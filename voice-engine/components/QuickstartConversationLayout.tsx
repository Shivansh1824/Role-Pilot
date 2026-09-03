'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Cpu, Briefcase, Users, Bot, Zap } from 'lucide-react';

type QuickstartConversationLayoutProps = {
  statusPanel: ReactNode;
  pipelineMetrics: ReactNode;
  transcriptPanel: ReactNode;
  visualizer: ReactNode;
  controls: ReactNode;
  onEndConversation: () => void;
};

export function QuickstartConversationLayout({
  statusPanel,
  pipelineMetrics,
  transcriptPanel,
  visualizer,
  controls,
  onEndConversation,
}: QuickstartConversationLayoutProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col text-left bg-[#0c0c10]">
      {/* Header */}
      <header className="flex shrink-0 flex-col gap-3 border-b border-border/70 px-4 py-3 md:h-[72px] md:flex-row md:items-center md:justify-between md:px-6 md:py-0 bg-card/10 backdrop-blur-md">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
            <Bot className="h-5 w-5" />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-0.5">
            <div className="flex items-center gap-2">
              <span className="truncate text-base font-bold tracking-tight text-foreground">
                Role-Pilot AI Interview Committee
              </span>
              <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2 py-0.2 text-[10px] font-semibold text-blue-400">
                Live Panel
              </span>
            </div>
            {pipelineMetrics}
          </div>
        </div>

        <div className="flex items-center gap-2 md:pr-1">
          {statusPanel}
          <Button
            variant="destructive"
            size="sm"
            className="h-8 rounded-lg border border-destructive/80 bg-destructive/10 px-3.5 text-xs font-semibold text-destructive hover:bg-destructive hover:text-white transition-colors"
            onClick={onEndConversation}
            aria-label="End interview session"
            title="End conversation and view scorecard"
          >
            End Interview
          </Button>
        </div>
      </header>

      {/* Main Panel Content */}
      <div className="flex min-h-0 w-full flex-1 flex-col gap-4 px-4 pb-4 pt-4 md:px-6 lg:flex-row lg:gap-4">
        
        {/* Left: Live Transcript Rail */}
        <aside className="order-2 h-72 min-h-0 w-full shrink-0 lg:order-1 lg:h-full lg:w-[26rem]">
          {transcriptPanel}
        </aside>

        {/* Right: The 3 Interviewers Stage & Voice Visualizer */}
        <main className="order-1 flex min-h-0 flex-1 flex-col rounded-2xl border border-border/70 bg-card/10 p-4 lg:order-2">
          
          {/* The 3 Panelist Cards */}
          <div className="grid grid-cols-3 gap-2.5 pb-3 border-b border-border/40">
            {/* Alex */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-3 flex flex-col justify-between transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-xs font-bold text-blue-300">Alex</span>
                </div>
                <Cpu className="h-3.5 w-3.5 text-blue-400/80" />
              </div>
              <div className="text-[10px] font-semibold text-blue-400/90 mt-1">Technical Lead</div>
              <div className="text-[9px] text-muted-foreground mt-0.5 line-clamp-1">Architecture & Scaling</div>
            </div>

            {/* Maya */}
            <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-3 flex flex-col justify-between transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-bold text-purple-300">Maya</span>
                </div>
                <Briefcase className="h-3.5 w-3.5 text-purple-400/80" />
              </div>
              <div className="text-[10px] font-semibold text-purple-400/90 mt-1">Product Manager</div>
              <div className="text-[9px] text-muted-foreground mt-0.5 line-clamp-1">UX & Customer Impact</div>
            </div>

            {/* David */}
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 flex flex-col justify-between transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-300">David</span>
                </div>
                <Users className="h-3.5 w-3.5 text-emerald-400/80" />
              </div>
              <div className="text-[10px] font-semibold text-emerald-400/90 mt-1">Hiring Manager</div>
              <div className="text-[9px] text-muted-foreground mt-0.5 line-clamp-1">STAR & Communication</div>
            </div>
          </div>

          {/* Center Stage: Voice Waveform / Visualizer */}
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-4">
            <div className="flex min-h-0 flex-1 items-center justify-center">
              {visualizer}
            </div>

            {/* Adaptive Telemetry Indicator */}
            <div className="mt-2 flex items-center gap-2 rounded-full border border-border/60 bg-black/40 px-3 py-1 text-[11px] text-muted-foreground">
              <Zap className="h-3 w-3 text-amber-400" />
              <span>Adaptive Difficulty: <strong>Mid-to-Senior Tier</strong> • 160ms Interruption Active</span>
            </div>

            {/* Mic Controls */}
            <div className="shrink-0 pt-3">{controls}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

