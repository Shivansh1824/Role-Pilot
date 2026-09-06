'use client';

import React from 'react';
import { ShieldCheck, Bot, Cpu, Briefcase, Users, Mic, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AIDisclosureModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose?: () => void;
  isLoading: boolean;
}

export function AIDisclosureModal({ isOpen, onConfirm, onClose, isLoading }: AIDisclosureModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 dark:bg-black/80 backdrop-blur-xl p-4 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl border border-border/80 bg-card/95 p-6 sm:p-8 shadow-2xl text-left backdrop-blur-2xl transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-md shadow-violet-500/20">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                AI Multi-Role Interview Committee
              </h2>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>AI Disclosure & Real-Time Voice Simulation Notice</span>
              </div>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* AI Transparency Notice Banner */}
        <div className="mt-5 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400 mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Interaction & Voice Simulation Notice</span>
          </div>
          You are about to enter a live, adaptive mock interview conducted entirely by an AI committee powered by <strong>Agora Conversational AI</strong>. The AI interviewers will listen to your voice in real time, ask dynamic follow-ups, challenge technical trade-offs, and generate an evidence-backed scorecard.
        </div>

        {/* The 3 Panelists Breakdown */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Your Evaluation Committee:
            </h3>
            <span className="text-[11px] text-muted-foreground">Dynamic Role-Playing</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Alex */}
            <div className="rounded-2xl border border-blue-500/25 bg-blue-500/5 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">Alex</span>
                  </div>
                  <Cpu className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                </div>
                <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  Technical Lead
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 leading-snug">
                  Evaluates system architecture, Big-O, concurrency, and real-world edge cases.
                </p>
              </div>
            </div>

            {/* Mark */}
            <div className="rounded-2xl border border-purple-500/25 bg-purple-500/5 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">Mark</span>
                  </div>
                  <Briefcase className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
                </div>
                <div className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                  Product Manager
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 leading-snug">
                  Challenges product intuition, user experience, and business impact.
                </p>
              </div>
            </div>

            {/* David */}
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">David</span>
                  </div>
                  <Users className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                </div>
                <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  Hiring Manager
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 leading-snug">
                  Assesses STAR behavioral responses, team collaboration, and communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Voice Tips */}
        <div className="mt-5 rounded-2xl border border-border/60 bg-muted/30 p-3.5 text-xs text-muted-foreground space-y-1.5">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <Mic className="h-3.5 w-3.5 text-cyan-400" />
            <span>Voice Interview Quick Tips:</span>
          </div>
          <p>• <strong>Interrupt anytime:</strong> Natural speech interruption is active. Start speaking, and the AI immediately pauses (160ms VAD).</p>
          <p>• <strong>Be structured & specific:</strong> Use the STAR format for behavioral scenarios and state architecture trade-offs explicitly.</p>
        </div>

        {/* Actions Row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
          {onClose && (
            <button
              onClick={onClose}
              disabled={isLoading}
              className="w-full sm:w-auto px-5 h-11 rounded-xl border border-border/80 bg-card hover:bg-muted text-xs font-semibold text-foreground transition-colors"
            >
              Cancel / Review Setup
            </button>
          )}

          <Button
            onClick={onConfirm}
            disabled={isLoading}
            className="w-full sm:w-auto px-7 h-11 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-violet-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            {isLoading ? (
              'Connecting to Agora...'
            ) : (
              <span className="inline-flex items-center gap-2">
                <span>I Agree & Start Voice Panel</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
