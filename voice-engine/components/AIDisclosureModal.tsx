'use client';

import React from 'react';
import { ShieldCheck, Bot, Cpu, Briefcase, Users, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AIDisclosureModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  isLoading: boolean;
}

export function AIDisclosureModal({ isOpen, onConfirm, isLoading }: AIDisclosureModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl border border-border/80 bg-[#121216] p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border/50 pb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">AI Multi-Role Interview Panel</h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>AI Disclosure & Real-Time Voice Simulation Notice</span>
            </div>
          </div>
        </div>

        {/* AI Transparency Notice */}
        <div className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200/90 leading-relaxed">
          <strong className="text-amber-400 font-semibold block mb-1">📢 AI Interaction Disclosure:</strong>
          You are about to participate in an adaptive interview conducted entirely by an AI committee powered by <strong>Agora Conversational AI</strong>. The interviewers will listen to your voice in real time, ask dynamic follow-ups, challenge your technical and business assumptions, and evaluate your responses.
        </div>

        {/* The 3 Panelists */}
        <div className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Your Interview Committee:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Alex */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-950/10 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-sm font-semibold text-blue-300">Alex</span>
                </div>
                <div className="text-[11px] font-medium text-blue-400/80 mt-0.5 flex items-center gap-1">
                  <Cpu className="h-3 w-3" /> Technical Lead
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 leading-snug">
                  Evaluates system architecture, Big-O, concurrency, and edge cases.
                </p>
              </div>
            </div>

            {/* Maya */}
            <div className="rounded-xl border border-purple-500/20 bg-purple-950/10 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-sm font-semibold text-purple-300">Maya</span>
                </div>
                <div className="text-[11px] font-medium text-purple-400/80 mt-0.5 flex items-center gap-1">
                  <Briefcase className="h-3 w-3" /> Product Manager
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 leading-snug">
                  Challenges on user experience, business impact, and conversion metrics.
                </p>
              </div>
            </div>

            {/* David */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-300">David</span>
                </div>
                <div className="text-[11px] font-medium text-emerald-400/80 mt-0.5 flex items-center gap-1">
                  <Users className="h-3 w-3" /> Hiring Manager
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 leading-snug">
                  Assesses STAR behavioral responses, leadership, and team collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips for candidate */}
        <div className="mt-5 rounded-xl border border-border/50 bg-card/30 p-3.5 text-xs text-muted-foreground space-y-1.5">
          <div className="flex items-center gap-1.5 text-foreground font-medium">
            <Mic className="h-3.5 w-3.5 text-primary" />
            <span>Voice Interview Tips:</span>
          </div>
          <p>• <strong>Interrupt anytime:</strong> If you start speaking, the AI immediately stops and listens (160ms barge-in).</p>
          <p>• <strong>Think holistically:</strong> Cover both engineering design and customer/business tradeoffs.</p>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end gap-3">
          <Button
            onClick={onConfirm}
            disabled={isLoading}
            className="w-full sm:w-auto px-6 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/20"
          >
            {isLoading ? 'Connecting to Agora...' : 'I Agree & Start Voice Panel'}
          </Button>
        </div>
      </div>
    </div>
  );
}
