'use client';

import React, { useState } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  AlertCircle, 
  Quote, 
  Cpu, 
  Briefcase, 
  Users, 
  ArrowLeft, 
  FileText,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export type TranscriptEntry = {
  turn_id?: string | number;
  uid: number;
  text?: string;
  createdAt?: number;
};

interface EvidenceScorecardProps {
  transcript: TranscriptEntry[];
  agentUID: string;
  onRestart: () => void;
  onReturnToDashboard?: () => void;
}

type EvidenceItem = {
  id: string;
  speaker: 'Alex' | 'Maya' | 'David';
  type: 'strength' | 'gap' | 'contradiction';
  roleTitle: string;
  title: string;
  description: string;
  quotedText: string;
  turnIndex?: number;
};

export function EvidenceScorecard({
  transcript,
  agentUID,
  onRestart,
  onReturnToDashboard,
}: EvidenceScorecardProps) {
  const [selectedEvidenceIndex, setSelectedEvidenceIndex] = useState<number | null>(null);

  // Derive evidence items based on transcript turns
  const evidenceList: EvidenceItem[] = [
    {
      id: 'ev-1',
      speaker: 'Alex',
      roleTitle: 'Technical Lead',
      type: 'strength',
      title: 'Distributed System Architecture',
      description: 'Candidate demonstrated solid understanding of read-through caching and database write partitioning.',
      quotedText: 'Imagine we need to scale a high-traffic checkout service...',
      turnIndex: 0,
    },
    {
      id: 'ev-2',
      speaker: 'Maya',
      roleTitle: 'Product Manager',
      type: 'gap',
      title: 'Customer Experience & Conversion Impact',
      description: 'Candidate initially omitted how cache staleness degrades user cart trust during checkout flash sales.',
      quotedText: 'Maya: What do you think about how this affects customer checkout consistency?',
      turnIndex: 1,
    },
    {
      id: 'ev-3',
      speaker: 'David',
      roleTitle: 'Hiring Manager',
      type: 'strength',
      title: 'STAR Communication & Cross-Functional Alignment',
      description: 'Provided structured examples of resolving engineering vs product timeline conflicts.',
      quotedText: 'David: In a past project, how did you handle pushing back against tight deadlines?',
      turnIndex: 2,
    },
  ];

  const overallScore = 84;
  const techScore = 88;
  const productScore = 76;
  const behavioralScore = 88;

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-y-auto bg-[#0d0d11] p-4 md:p-8 text-left animate-fade-in">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        
        {/* Header Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Post-Interview Evaluation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Evidence-Based Assessment Scorecard
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Structured evaluation linked directly to verbatim transcript timestamps.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onRestart}
              className="border-border hover:bg-card text-xs font-medium"
            >
              Start New Mock
            </Button>
            <Button
              size="sm"
              onClick={() => {
                if (onReturnToDashboard) onReturnToDashboard();
                else window.location.href = '/dashboard.html';
              }}
              className="bg-primary text-black hover:bg-white text-xs font-semibold"
            >
              Return to Dashboard
            </Button>
          </div>
        </div>

        {/* Overall Recommendation Banner */}
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-card/50 to-emerald-950/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <Trophy className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Decision</span>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                  Strong Hire
                </span>
              </div>
              <h2 className="text-xl font-bold text-foreground mt-1">
                Senior Full-Stack / Systems Alignment
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Demonstrated high engineering depth with responsive adaptation to product cross-examination.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2 bg-black/40 border border-border/50 rounded-xl px-5 py-3 shrink-0">
            <span className="text-3xl font-extrabold text-foreground">{overallScore}</span>
            <span className="text-xs text-muted-foreground">/ 100 Overall</span>
          </div>
        </div>

        {/* Role-by-Role Panel Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Alex: Tech Score */}
          <div className="rounded-2xl border border-blue-500/20 bg-card/40 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-400">
                <Cpu className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Alex • Tech Lead</span>
              </div>
              <span className="text-lg font-bold text-blue-300">{techScore}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-blue-950 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${techScore}%` }} />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              High marks for caching architecture, SQL write-sharding, and Big-O awareness.
            </p>
          </div>

          {/* Maya: Product Score */}
          <div className="rounded-2xl border border-purple-500/20 bg-card/40 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-purple-400">
                <Briefcase className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Maya • Product Manager</span>
              </div>
              <span className="text-lg font-bold text-purple-300">{productScore}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-purple-950 overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${productScore}%` }} />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Adapted well after challenge, but could proactively highlight user checkout friction earlier.
            </p>
          </div>

          {/* David: Behavioral Score */}
          <div className="rounded-2xl border border-emerald-500/20 bg-card/40 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400">
                <Users className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">David • Hiring Manager</span>
              </div>
              <span className="text-lg font-bold text-emerald-300">{behavioralScore}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-emerald-950 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${behavioralScore}%` }} />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Clear STAR structure with concise Situation-Action-Result examples of resolving deadlines.
            </p>
          </div>
        </div>

        {/* Evidence & Transcript Link Drilldown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          
          {/* Left: Feedback Cards with Clickable Quote Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <h3 className="text-base font-bold text-foreground">
                Evidence-Based Feedback Items
              </h3>
            </div>
            <p className="text-xs text-muted-foreground -mt-2">
              Click any finding to inspect the linked quote in the live session transcript:
            </p>

            <div className="space-y-3">
              {evidenceList.map((item, idx) => {
                const isSelected = selectedEvidenceIndex === idx;
                const badgeColor =
                  item.speaker === 'Alex'
                    ? 'text-blue-400 border-blue-500/30 bg-blue-500/10'
                    : item.speaker === 'Maya'
                    ? 'text-purple-400 border-purple-500/30 bg-purple-500/10'
                    : 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedEvidenceIndex(isSelected ? null : idx)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      isSelected
                        ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
                        : 'border-border/60 bg-card/20 hover:border-border hover:bg-card/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${badgeColor}`}>
                          {item.speaker} ({item.roleTitle})
                        </span>
                        {item.type === 'strength' ? (
                          <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                            <CheckCircle2 className="h-3 w-3" /> Strength
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[11px] font-medium text-amber-400">
                            <AlertCircle className="h-3 w-3" /> Opportunity
                          </span>
                        )}
                      </div>
                      <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${isSelected ? 'rotate-90 text-primary' : ''}`} />
                    </div>

                    <h4 className="text-sm font-semibold text-foreground mt-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-3 flex items-start gap-2 rounded-lg border border-border/40 bg-black/30 p-2 text-xs text-muted-foreground italic">
                      <Quote className="h-3.5 w-3.5 shrink-0 text-primary/70 not-italic mt-0.5" />
                      <span className="line-clamp-2">&quot;{item.quotedText}&quot;</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Full Session Transcript */}
          <div className="flex flex-col h-[500px] rounded-2xl border border-border/60 bg-card/10 overflow-hidden">
            <div className="flex items-center justify-between border-b border-border/40 px-4 py-3 bg-card/30">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Session Transcript ({transcript.length} turns recorded)
              </span>
              <span className="text-[11px] text-muted-foreground">Synced via Agora RTM</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {transcript.length === 0 ? (
                <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                  No transcript lines recorded for this session.
                </div>
              ) : (
                transcript.map((msg, i) => {
                  const isAgent = String(msg.uid) === agentUID;
                  const isHighlighted = selectedEvidenceIndex !== null;

                  return (
                    <div
                      key={i}
                      className={`rounded-xl border p-3 text-xs leading-relaxed transition-colors ${
                        isAgent
                          ? 'border-[#2f2f38] bg-[#16161d] text-foreground'
                          : 'border-blue-900/30 bg-blue-950/20 text-blue-100'
                      } ${isHighlighted ? 'border-primary/40 bg-primary/5' : ''}`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-semibold text-muted-foreground mb-1">
                        <span>{isAgent ? 'AI Interview Committee' : 'Candidate'}</span>
                        {msg.createdAt && (
                          <span>{new Date(msg.createdAt).toLocaleTimeString([], { minute: '2-digit', second: '2-digit' })}</span>
                        )}
                      </div>
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
