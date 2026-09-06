'use client';

import React from 'react';
import { Loader2, Bot, Cpu, Briefcase, Users, Sparkles, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PANEL_CONFIGS } from '@/lib/panel';

type QuickstartPreCallCardProps = {
  isLoading: boolean;
  error: string | null;
  onStartConversation: () => void;
  role?: string;
  track?: string;
  difficulty?: string;
  candidateName?: string;
};

export function QuickstartPreCallCard({
  isLoading,
  error,
  onStartConversation,
  role,
  track = 'tech',
  difficulty,
  candidateName,
}: QuickstartPreCallCardProps) {
  const trackKey = (track || 'tech').toLowerCase();
  const panelists = PANEL_CONFIGS[trackKey] ?? PANEL_CONFIGS['tech'];

  return (
    <div className="relative mx-auto flex w-[min(94vw,38rem)] animate-fade-up flex-col items-center rounded-3xl border border-border/80 bg-card/75 p-6 sm:p-9 text-center shadow-[0_24px_70px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300">
      {/* EchoSphere Architecture Badge */}
      <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary shadow-sm">
        <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
        <span>Agora Real-Time Voice • Multi-Agent Committee</span>
      </div>

      {/* Main Title */}
      <h1 className="mt-4 font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
        Role-Pilot <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">Voice Interview Panel</span>
      </h1>
      <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground max-w-lg">
        Adaptive real-time voice panel simulation. The multi-role committee adapts questions dynamically to your answers, challenges assumptions, and evaluates your performance.
      </p>

      {/* Target Role & Candidate Setup Chips */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        {candidateName && candidateName.toLowerCase() !== 'candidate' && (
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-muted/40 px-3 py-1 font-medium text-foreground">
            <UserCheck className="h-3.5 w-3.5 text-cyan-400" />
            <span>Interviewee: <strong>{candidateName}</strong></span>
          </div>
        )}
        {role && (
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-foreground">
            <Briefcase className="h-3.5 w-3.5 text-violet-400" />
            <span>Target: <strong className="text-foreground">{role}</strong></span>
          </div>
        )}
        <div className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-muted/40 px-3 py-1 font-medium text-foreground capitalize">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Track: <strong>{trackKey} Panel</strong></span>
        </div>
        {difficulty && (
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-medium text-amber-500 dark:text-amber-400">
            <span>⚡ Difficulty: <strong>{difficulty === 'auto' ? 'AI-Adaptive' : difficulty.toUpperCase()}</strong></span>
          </div>
        )}
      </div>

      {/* The 3 Interviewers Committee Grid */}
      <div className="mt-6 w-full text-left">
        <div className="flex items-center justify-between px-1 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Your Interview Committee:
          </span>
          <span className="text-[10px] text-muted-foreground">160ms Interruption • Shared Memory</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
          {panelists.map((p) => {
            const Icon = p.icon;
            const isBlue = p.color === 'blue';
            const isPurple = p.color === 'purple';

            const cardClasses = isBlue
              ? 'border-blue-500/25 bg-blue-500/5 hover:border-blue-500/40 text-blue-900 dark:text-blue-100'
              : isPurple
              ? 'border-purple-500/25 bg-purple-500/5 hover:border-purple-500/40 text-purple-900 dark:text-purple-100'
              : 'border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-500/40 text-emerald-900 dark:text-emerald-100';

            const iconBg = isBlue
              ? 'bg-blue-500/15 text-blue-500 dark:text-blue-400'
              : isPurple
              ? 'bg-purple-500/15 text-purple-500 dark:text-purple-400'
              : 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400';

            const dotColor = isBlue
              ? 'bg-blue-500 dark:bg-blue-400'
              : isPurple
              ? 'bg-purple-500 dark:bg-purple-400'
              : 'bg-emerald-500 dark:bg-emerald-400';

            return (
              <div
                key={p.name}
                className={`flex flex-col justify-between rounded-2xl border p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${cardClasses}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconBg}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">{p.name}</div>
                        <div className="text-[10px] font-semibold text-muted-foreground">{p.role}</div>
                      </div>
                    </div>
                    <span className={`h-2 w-2 rounded-full ${dotColor}`} title="Ready" />
                  </div>
                  <p className="mt-2.5 text-[11px] leading-snug text-muted-foreground">
                    {p.focus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Primary CTA Button */}
      <Button
        onClick={onStartConversation}
        disabled={isLoading}
        className="mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting to Agora SD-RTN...
          </>
        ) : (
          <span className="inline-flex items-center gap-2">
            <span>Begin Multi-Role Interview</span>
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>

      {error && (
        <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/10 p-2 text-xs text-destructive">
          {error}
        </div>
      )}
    </div>
  );
}
