'use client';

import { Loader2, Bot, Cpu, Briefcase, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

type QuickstartPreCallCardProps = {
  isLoading: boolean;
  error: string | null;
  onStartConversation: () => void;
};

export function QuickstartPreCallCard({
  isLoading,
  error,
  onStartConversation,
}: QuickstartPreCallCardProps) {
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
        Real-time, adaptive voice mock interview conducted by an AI committee representing Engineering, Product, and Leadership.
      </p>

      {/* The 3 Interviewers Pill Grid */}
      <div className="mt-5 grid grid-cols-3 gap-2 w-full text-left">
        <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-300">
            <Cpu className="h-3.5 w-3.5 text-blue-400" />
            <span>Alex</span>
          </div>
          <span className="text-[10px] text-blue-400/80 block mt-0.5">Tech Lead</span>
        </div>

        <div className="rounded-xl border border-purple-500/20 bg-purple-950/20 p-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
            <Briefcase className="h-3.5 w-3.5 text-purple-400" />
            <span>Maya</span>
          </div>
          <span className="text-[10px] text-purple-400/80 block mt-0.5">Product Lead</span>
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
            <Users className="h-3.5 w-3.5 text-emerald-400" />
            <span>David</span>
          </div>
          <span className="text-[10px] text-emerald-400/80 block mt-0.5">Hiring Manager</span>
        </div>
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

