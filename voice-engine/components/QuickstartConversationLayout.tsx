'use client';

import React, { type ReactNode, useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, Zap, Sparkles, Volume2, ShieldAlert, Clock } from 'lucide-react';
import { PANEL_CONFIGS } from '@/lib/panel';

type QuickstartConversationLayoutProps = {
  statusPanel: ReactNode;
  pipelineMetrics: ReactNode;
  transcriptPanel: ReactNode;
  visualizer: ReactNode;
  controls: ReactNode;
  track?: string;
  candidateName?: string;
  activeSpeaker?: string | null;
  isSpeaking?: boolean;
  hitCount?: number;
  onEndConversation: () => void;
};

export function QuickstartConversationLayout({
  statusPanel,
  pipelineMetrics,
  transcriptPanel,
  visualizer,
  controls,
  track = 'tech',
  candidateName,
  activeSpeaker,
  isSpeaking = false,
  hitCount = 0,
  onEndConversation,
}: QuickstartConversationLayoutProps) {
  const trackKey = (track || 'tech').toLowerCase();
  const panelists = PANEL_CONFIGS[trackKey] ?? PANEL_CONFIGS['tech'];

  // Track live elapsed interview time
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDuration = useMemo(() => {
    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    const hours = Math.floor(mins / 60);
    if (hours > 0) {
      const remMins = mins % 60;
      return `${String(hours).padStart(2, '0')}:${String(remMins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, [elapsedSeconds]);

  // Render the 3 lives/hearts counter
  const renderHearts = () => {
    const livesLeft = Math.max(0, 3 - hitCount);
    return Array.from({ length: 3 }).map((_, i) => (
      <span
        key={i}
        className={`text-base transition-all duration-300 ${
          i < livesLeft ? 'opacity-100 scale-100' : 'opacity-30 grayscale blur-[0.5px] scale-75'
        }`}
        title={i < livesLeft ? 'Life remaining' : 'Strike! Answer lacked depth or contradicted prior claims'}
      >
        ❤️
      </span>
    ));
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col text-left bg-transparent">
      {/* Session HUD Bar */}
      <div className="flex shrink-0 flex-col gap-3 border-b border-border/70 px-4 py-3 md:h-16 md:flex-row md:items-center md:justify-between md:px-7 md:py-0 bg-card/40 backdrop-blur-xl transition-colors">
        {/* Left: Committee Details */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-sm">
            <Bot className="h-5 w-5" />
          </div>
          <div className="flex min-w-0 flex-col justify-center">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="truncate text-sm font-bold tracking-tight text-foreground">
                AI Interview Committee
              </span>
              <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-semibold text-primary capitalize">
                {trackKey} Panel
              </span>
              {candidateName && candidateName.toLowerCase() !== 'candidate' && (
                <span className="hidden sm:inline-flex items-center text-xs text-muted-foreground border-l border-border/60 pl-2">
                  Candidate: <strong className="text-foreground ml-1">{candidateName}</strong>
                </span>
              )}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {pipelineMetrics}
            </div>
          </div>
        </div>

        {/* Right: Live Telemetry & End Button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Live Interview Elapsed Timer */}
          <div
            className="flex items-center gap-1.5 rounded-xl border border-border/70 bg-card/60 px-2.5 py-1 text-xs font-mono font-bold tabular-nums text-foreground shadow-sm"
            title="Interview elapsed duration"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <Clock className="h-3.5 w-3.5 text-muted-foreground hidden xs:inline-block" />
            <span>{formattedDuration}</span>
          </div>

          {/* Strike / Hearts Counter */}
          <div
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-semibold tabular-nums transition-all ${
              hitCount >= 2
                ? 'border-destructive/50 bg-destructive/15 text-destructive animate-pulse'
                : hitCount === 1
                ? 'border-amber-500/40 bg-amber-500/15 text-amber-500'
                : 'border-border/70 bg-card/60 text-muted-foreground'
            }`}
            title={`Strikes: ${hitCount} / 3`}
          >
            <span className="text-[10px] uppercase tracking-wider font-bold opacity-80 mr-1 hidden sm:inline-block">
              Lives:
            </span>
            <div className="flex gap-1">
              {renderHearts()}
            </div>
          </div>

          {/* Connection Status Panel Dropdown */}
          {statusPanel}

          {/* End Interview Session */}
          <Button
            variant="destructive"
            size="sm"
            className="h-8 rounded-xl border border-destructive/80 bg-destructive/15 px-3.5 text-xs font-bold text-destructive hover:bg-destructive hover:text-white transition-all shadow-sm"
            onClick={onEndConversation}
            aria-label="End interview session"
            title="End conversation and generate evidence scorecard"
          >
            End Interview
          </Button>
        </div>
      </div>

      {/* Main Panel Content Area */}
      <div className="flex min-h-0 w-full flex-1 flex-col gap-4 p-4 md:p-6 lg:flex-row lg:gap-5">
        
        {/* Left Column: Live Transcript Rail */}
        <aside className="order-2 h-72 min-h-0 w-full shrink-0 lg:order-1 lg:h-full lg:w-[26rem]">
          {transcriptPanel}
        </aside>

        {/* Right Column: The 3 Interviewers Stage & Voice Visualizer */}
        <main className="order-1 flex min-h-0 flex-1 flex-col rounded-3xl border border-border/80 bg-card/40 p-4 md:p-6 backdrop-blur-xl shadow-lg transition-colors lg:order-2">
          
          {/* Top: The 3 Interviewers Conference Table */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pb-4 border-b border-border/60">
            {panelists.map((p) => {
              const Icon = p.icon;
              const isCurrentActive = activeSpeaker?.toLowerCase() === p.name.toLowerCase();
              const isCurrentSpeaking = isCurrentActive && isSpeaking;

              const activeGlowClasses =
                p.color === 'blue'
                  ? 'border-2 border-blue-400 bg-blue-500/15 shadow-[0_0_28px_rgba(59,130,246,0.35)] text-blue-900 dark:text-blue-100'
                  : p.color === 'purple'
                  ? 'border-2 border-purple-400 bg-purple-500/15 shadow-[0_0_28px_rgba(168,85,247,0.35)] text-purple-900 dark:text-purple-100'
                  : 'border-2 border-emerald-400 bg-emerald-500/15 shadow-[0_0_28px_rgba(16,185,129,0.35)] text-emerald-900 dark:text-emerald-100';

              const activeDotColor =
                p.color === 'blue'
                  ? 'bg-blue-500 dark:bg-blue-400'
                  : p.color === 'purple'
                  ? 'bg-purple-500 dark:bg-purple-400'
                  : 'bg-emerald-500 dark:bg-emerald-400';

              return (
                <div
                  key={p.name}
                  className={`rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-300 ${
                    isCurrentSpeaking
                      ? `${activeGlowClasses} scale-[1.02]`
                      : isCurrentActive
                      ? 'border border-primary/50 bg-card/70 shadow-sm'
                      : 'border border-border/60 bg-card/25 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          isCurrentSpeaking
                            ? `${activeDotColor} animate-ping`
                            : isCurrentActive
                            ? activeDotColor
                            : 'bg-muted-foreground/40'
                        }`}
                      />
                      <span className="text-xs sm:text-sm font-bold text-foreground">{p.name}</span>
                    </div>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>

                  <div className="text-[11px] font-semibold text-primary mt-1 truncate">
                    {p.role}
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/40 text-[10px]">
                    <span className="text-muted-foreground text-[10px] truncate max-w-[80px]">
                      {p.focus}
                    </span>
                    {isCurrentSpeaking ? (
                      <span className="font-bold flex items-center gap-1 text-[10px] text-amber-500 dark:text-amber-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" /> Speaking
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-[10px]">Listening</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Stage: Voice Waveform / Visualizer */}
          <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center py-4">
            
            {/* Visualizer Container with Halo Glows */}
            <div className="relative flex min-h-0 flex-1 items-center justify-center w-full">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-56 w-56 rounded-full border border-primary/20 animate-pulse opacity-40" />
                <div className="h-72 w-72 rounded-full border border-cyan-400/10 opacity-30" />
              </div>
              {visualizer}
            </div>

            {/* Adaptive Telemetry Capsule */}
            <div className="mt-3 flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-md shadow-sm">
              <Zap className="h-3.5 w-3.5 text-amber-500 dark:text-amber-400" />
              <span>
                Adaptive Difficulty: <strong className="text-foreground">AI-Adaptive</strong> • 160ms Interruption Active
              </span>
            </div>

            {/* Mic Controls Dock */}
            <div className="shrink-0 pt-4">{controls}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
