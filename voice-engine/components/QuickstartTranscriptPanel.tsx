'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { isAgentUid } from '@/lib/agora';
import { Cpu, Briefcase, Users, User, Bot, Sparkles } from 'lucide-react';

type TranscriptMessage = {
  turn_id?: string | number;
  uid: number;
  text?: string;
  createdAt?: number;
};

type QuickstartTranscriptPanelProps = {
  messageList: TranscriptMessage[];
  currentInProgressMessage: TranscriptMessage | null;
  agentUID: string;
  candidateName?: string;
  candidateUid?: string | number;
};

function formatMessageTime(createdAt?: number) {
  if (!createdAt) return null;
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(createdAt));
}

export function QuickstartTranscriptPanel({
  messageList,
  currentInProgressMessage,
  agentUID,
  candidateName,
  candidateUid,
}: QuickstartTranscriptPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const messages = useMemo(() => {
    const list = [...messageList];
    if (currentInProgressMessage) {
      // Check if currentInProgressMessage matches an already listed turn
      const existingIdx = list.findIndex(
        (m) =>
          (m.turn_id !== undefined &&
            currentInProgressMessage.turn_id !== undefined &&
            m.turn_id === currentInProgressMessage.turn_id) ||
          (m.uid === currentInProgressMessage.uid &&
            m.text &&
            currentInProgressMessage.text &&
            (m.text.trim().toLowerCase() === currentInProgressMessage.text.trim().toLowerCase() ||
              currentInProgressMessage.text.trim().startsWith(m.text.trim()) ||
              m.text.trim().startsWith(currentInProgressMessage.text.trim()))),
      );

      if (existingIdx >= 0) {
        // Update in-place with the latest version rather than appending a duplicate!
        if (
          (currentInProgressMessage.text?.length ?? 0) >=
          (list[existingIdx].text?.length ?? 0)
        ) {
          list[existingIdx] = currentInProgressMessage;
        }
      } else {
        list.push(currentInProgressMessage);
      }
    }
    return list;
  }, [currentInProgressMessage, messageList]);

  // Split any compound turns that contain multiple speaker tags so each panelist gets their own turn bubble
  const displayMessages = useMemo(() => {
    const result: typeof messages = [];
    for (const msg of messages) {
      const text = msg.text || '';
      const tagRegex = /\[([A-Za-z]+)(?:\s*\(([^)]+)\))?\]/g;
      const matches = [...text.matchAll(tagRegex)];

      if (matches.length <= 1) {
        result.push(msg);
      } else {
        for (let i = 0; i < matches.length; i++) {
          const startIndex = matches[i].index!;
          const endIndex = i + 1 < matches.length ? matches[i + 1].index! : text.length;
          const chunk = text.slice(startIndex, endIndex).trim();
          if (chunk) {
            result.push({
              ...msg,
              turn_id: `${msg.turn_id ?? 'sub'}-${i}` as unknown as number,
              text: chunk,
            });
          }
        }
      }
    }
    return result;
  }, [messages]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [displayMessages]);

  const parseSpeakerInfo = (text?: string, isAgent?: boolean, uid?: number | string) => {
    if (!isAgent) {
      const displayName =
        candidateName && candidateName.toLowerCase() !== 'candidate'
          ? candidateName.split(' ')[0]
          : 'You';
      return {
        speaker: displayName,
        icon: User,
        badgeClass: 'text-primary bg-primary/10 border-primary/25',
        bubbleClass: 'border-primary/25 bg-primary/10 text-foreground',
      };
    }

    let name = '';
    let role = 'Panelist';

    const ROLE_MAP: Record<string, string> = {
      David: 'Hiring Manager',
      Alex: 'Technical Lead',
      Mark: 'Product Manager',
      Sean: 'VP of Sales',
      Marcus: 'Sales Director',
      Ethan: 'HR Director',
      Sam: 'Culture Lead',
    };

    // 1. First check if text starts with [Name] or [Name (Role)]
    if (text) {
      const match = text.match(/^\[([A-Za-z]+)(?:\s*\(([^)]+)\))?\]/);
      if (match) {
        name = match[1];
        role = match[2] || ROLE_MAP[name] || 'Panelist';
      }
    }

    // 2. If no bracket tag in text, resolve by assigned agent UID
    if (!name && uid !== undefined) {
      const num = Number(uid);
      if (num === 1001) {
        name = 'David';
        role = 'Hiring Manager';
      } else if (num === 1002) {
        name = 'Alex';
        role = 'Technical Lead';
      } else if (num === 1003) {
        name = 'Mark';
        role = 'Product Lead';
      }
    }

    if (name) {
      const isBlue = /Alex|Sean|Ethan|Marcus/i.test(name);
      const isPurple = /Mark|Sam/i.test(name);

      return {
        speaker: `${name} (${role})`,
        icon: isBlue ? Cpu : isPurple ? Briefcase : Users,
        badgeClass: isBlue
          ? 'text-blue-600 dark:text-blue-400 bg-blue-500/15 border-blue-500/30'
          : isPurple
          ? 'text-purple-600 dark:text-purple-400 bg-purple-500/15 border-purple-500/30'
          : 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
        bubbleClass: isBlue
          ? 'border-blue-500/25 bg-blue-500/5 text-foreground'
          : isPurple
          ? 'border-purple-500/25 bg-purple-500/5 text-foreground'
          : 'border-emerald-500/25 bg-emerald-500/5 text-foreground',
      };
    }

    return {
      speaker: 'AI Committee',
      icon: Bot,
      badgeClass: 'text-muted-foreground bg-muted border-border',
      bubbleClass: 'border-border/60 bg-card/60 text-foreground',
    };
  };

  return (
    <section
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/40 backdrop-blur-xl shadow-lg transition-colors"
      aria-label="Transcription panel"
    >
      {/* Header */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-border/60 px-4 md:px-5 bg-card/30">
        <div>
          <h2 className="text-sm font-bold text-foreground">Live Panel Transcript</h2>
          <p className="text-[11px] text-muted-foreground">Real-time Agora RTM turns</p>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 dark:text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          <span>RTM Synced</span>
        </div>
      </div>

      {/* Messages Stream */}
      <div
        ref={scrollRef}
        className="flex min-h-0 flex-1 flex-col gap-3.5 overflow-y-auto px-4 py-4"
      >
        {displayMessages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center p-6 text-xs text-muted-foreground">
            <Sparkles className="h-6 w-6 text-primary mb-2 opacity-60" />
            <p>Connect to the panel and begin speaking to see real-time turn-taking and committee responses.</p>
          </div>
        ) : (
          displayMessages.map((message, index) => {
            const isAgent =
              isAgentUid(message.uid, candidateUid) || String(message.uid) === agentUID;
            const rawText = message.text?.trim();
            const time = formatMessageTime(message.createdAt);
            const { speaker, icon: Icon, badgeClass, bubbleClass } = parseSpeakerInfo(
              rawText,
              isAgent,
              message.uid,
            );
            const cleanText =
              isAgent && rawText
                ? rawText.replace(/^\[[^\]]+\]\s*:?\s*/, '').trim() || rawText
                : rawText;

            return (
              <article
                key={`${message.turn_id ?? message.uid}-${index}`}
                className={`flex flex-col ${isAgent ? 'items-start' : 'items-end'} animate-fade-up`}
              >
                <div className="mb-1 flex items-center gap-1.5 px-1 text-xs">
                  <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-bold ${badgeClass}`}>
                    <Icon className="h-3 w-3" />
                    <span>{speaker}</span>
                  </span>
                  {time && (
                    <span className="text-[10px] font-medium text-muted-foreground">
                      {time}
                    </span>
                  )}
                </div>
                <div
                  className={`max-w-[90%] whitespace-pre-wrap rounded-2xl border px-3.5 py-2.5 text-xs leading-relaxed shadow-sm transition-colors ${bubbleClass}`}
                >
                  {cleanText || '...'}
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
