'use client';

import { Loader2, Bot, Cpu, Briefcase, Users, Sparkles } from 'lucide-react';
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
    <div
      className="mx-auto flex w-[min(94vw,34rem)] animate-fade-up flex-col items-center rounded-3xl border border-[#2b2b36] p-6 sm:p-8 text-center shadow-[0_16px_36px_rgba(0,0,0,0.45)] bg-[#101015]"
    >
      <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Agora Conversational AI • EchoSphere</span>
      </div>

      <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
        Role-Pilot Voice Interview Panel
      </h1>
      <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground">
        Real-time, adaptive voice mock interview conducted by an AI committee representing Domain Expertise, Product, and Leadership.
      </p>

      {/* Target Role & Setup Badges if configured */}
      {(role || difficulty || candidateName) && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px]">
          {candidateName && candidateName.toLowerCase() !== 'candidate' && (
            <span className="rounded-md border border-border/80 bg-zinc-900/80 px-2.5 py-1 text-zinc-300">
              Interviewee: <strong className="text-white">{candidateName}</strong>
            </span>
          )}
          {role && (
            <span className="rounded-md border border-blue-500/30 bg-blue-950/40 px-2.5 py-1 text-blue-300">
              Target: <strong className="text-white">{role}</strong>
            </span>
          )}
          {difficulty && (
            <span className="rounded-md border border-amber-500/30 bg-amber-950/40 px-2.5 py-1 text-amber-300">
              Difficulty:{' '}
              <strong className="text-white">
                {difficulty === 'auto' ? '⚡ AI-Adaptive' : difficulty.toUpperCase()}
              </strong>
            </span>
          )}
        </div>
      )}

      {/* The 3 Interviewers Pill Grid */}
      <div className="mt-5 grid grid-cols-3 gap-2 w-full text-left">
        {panelists.map((p) => {
          const Icon = p.icon;
          const borderClass =
            p.color === 'blue'
              ? 'border-blue-500/20 bg-blue-950/20 text-blue-300'
              : p.color === 'purple'
              ? 'border-purple-500/20 bg-purple-950/20 text-purple-300'
              : 'border-emerald-500/20 bg-emerald-950/20 text-emerald-300';
          const iconColor =
            p.color === 'blue'
              ? 'text-blue-400'
              : p.color === 'purple'
              ? 'text-purple-400'
              : 'text-emerald-400';
          const subtextColor =
            p.color === 'blue'
              ? 'text-blue-400/80'
              : p.color === 'purple'
              ? 'text-purple-400/80'
              : 'text-emerald-400/80';

          return (
            <div key={p.name} className={`rounded-xl border p-2.5 ${borderClass}`}>
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
                <span>{p.name}</span>
              </div>
              <span className={`text-[10px] block mt-0.5 truncate ${subtextColor}`}>{p.role}</span>
            </div>
          );
        })}
      </div>

      <Button
        onClick={onStartConversation}
        disabled={isLoading}
        className="mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting to Agora SD-RTN...
          </>
        ) : (
          'Begin Multi-Role Interview'
        )}
      </Button>

      {error && <p className="mt-3 text-xs text-destructive">{error}</p>}
    </div>
  );
}

