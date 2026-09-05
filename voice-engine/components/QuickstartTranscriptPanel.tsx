'use client';

import { useEffect, useMemo, useRef } from 'react';

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
}: QuickstartTranscriptPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const messages = useMemo(
    () =>
      currentInProgressMessage
        ? [...messageList, currentInProgressMessage]
        : messageList,
    [currentInProgressMessage, messageList],
  );

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages]);

  const parseSpeakerInfo = (text?: string, isAgent?: boolean) => {
    if (!isAgent) {
      const displayName = candidateName && candidateName.toLowerCase() !== 'candidate' 
        ? candidateName.split(' ')[0] 
        : '';
      return {
        speaker: displayName ? `You (${displayName})` : 'You',
        badgeClass: 'text-blue-300 bg-blue-950/40 border-blue-800/40',
        bubbleClass: 'border-blue-800/40 bg-blue-950/30 text-blue-50',
      };
    }

    if (text) {
      // Matches [Alex (Tech Lead)], [Sarah (VP Sales)], [Elena (HR Director)], etc.
      const match = text.match(/^\[([A-Za-z]+)(?:\s*\(([^)]+)\))?\]/);
      if (match) {
        const name = match[1];
        const role = match[2] || 'Panelist';
        const isBlue = /Alex|Sarah|Elena|Marcus/i.test(name);
        const isPurple = /Maya|Mark|Sam/i.test(name);

        return {
          speaker: `${name} (${role})`,
          badgeClass: isBlue
            ? 'text-blue-400 bg-blue-950/60 border-blue-500/30'
            : isPurple
            ? 'text-purple-400 bg-purple-950/60 border-purple-500/30'
            : 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30',
          bubbleClass: isBlue
            ? 'border-blue-900/30 bg-[#121624] text-[#e3e8f8]'
            : isPurple
            ? 'border-purple-900/30 bg-[#181324] text-[#ede3f8]'
            : 'border-emerald-900/30 bg-[#12221c] text-[#e3f8ef]',
        };
      }
    }

    return {
      speaker: 'AI Panel Committee',
      badgeClass: 'text-gray-300 bg-gray-800/60 border-gray-700/40',
      bubbleClass: 'border-[#2f2f2f] bg-[#1a1a20] text-[#e7e7e7]',
    };
  };

  return (
    <section
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/20 backdrop-blur-sm"
      aria-label="Transcription panel"
    >
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-border/60 px-4 bg-card/30">
        <div>
          <h2 className="text-sm font-bold text-foreground">Live Panel Transcript</h2>
          <p className="text-[11px] text-muted-foreground">Real-time Agora RTM audio turns</p>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Synced</span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex min-h-0 flex-1 flex-col gap-3.5 overflow-y-auto px-4 py-4"
      >
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center text-center text-xs text-muted-foreground">
            Connect to the panel and start speaking to see real-time turns.
          </div>
        ) : (
          messages.map((message, index) => {
            const isAgent = String(message.uid) === agentUID;
            const rawText = message.text?.trim();
            const time = formatMessageTime(message.createdAt);
            const { speaker, badgeClass, bubbleClass } = parseSpeakerInfo(rawText, isAgent);
            // Clean up leading bracket tags (e.g. "[Alex (Tech Lead)]") since the badge already shows the speaker
            const cleanText = isAgent && rawText
              ? rawText.replace(/^\[[^\]]+\]\s*:?\s*/, '').trim() || rawText
              : rawText;

            return (
              <article
                key={`${message.turn_id ?? message.uid}-${index}`}
                className={`flex flex-col ${isAgent ? 'items-start' : 'items-end'}`}
              >
                <div className="mb-1 flex items-center gap-2 px-1 text-xs font-semibold">
                  <span className={`rounded-md border px-1.5 py-0.2 text-[10px] ${badgeClass}`}>
                    {speaker}
                  </span>
                  {time && <span className="text-[10px] font-normal text-muted-foreground">{time}</span>}
                </div>
                <div
                  className={`max-w-[92%] whitespace-pre-wrap rounded-xl border px-3.5 py-2.5 text-xs leading-5 shadow-sm ${bubbleClass}`}
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

