'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Target, 
  Award, 
  Users, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ScorecardLoadingViewProps {
  role?: string;
  level?: string;
  difficulty?: string;
  candidateName?: string;
  transcriptLength?: number;
  panelists?: Array<{ name: string; role: string }>;
}

const EVALUATION_STAGES = [
  {
    id: 1,
    title: 'Transcript Parsing & Turn Verification',
    desc: 'Ingesting conversational turns and isolating candidate technical responses...',
    icon: Layers,
    durationMs: 2200,
  },
  {
    id: 2,
    title: 'Factual & Technical Correctness Audit',
    desc: 'Cross-examining architectural claims, concurrency patterns, and domain depth...',
    icon: Cpu,
    durationMs: 2800,
  },
  {
    id: 3,
    title: 'Hit & Quantifiable Impact Analysis',
    desc: 'Detecting metric-backed achievements (latency, QPS, GMV, uptime, SLAs)...',
    icon: Target,
    durationMs: 3000,
  },
  {
    id: 4,
    title: 'Experience Tier & Difficulty Calibration',
    desc: 'Normalizing scoring rubric against candidate career seniority and room rigor...',
    icon: Award,
    durationMs: 2800,
  },
  {
    id: 5,
    title: 'Committee Consensus & Star Rating',
    desc: 'Synthesizing individual panelist scores and formulating hiring decision...',
    icon: Users,
    durationMs: 3500,
  },
];

export function ScorecardLoadingView({
  role = 'Software Engineer',
  level = 'Mid-Level',
  difficulty = 'auto',
  candidateName = 'Candidate',
  transcriptLength = 0,
  panelists = [],
}: ScorecardLoadingViewProps) {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(12);

  // Progressive stage stepper animation
  useEffect(() => {
    const stageInterval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev < EVALUATION_STAGES.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2400);

    const progressInterval = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev < 92) {
          const delta = Math.floor(Math.random() * 5) + 3;
          return Math.min(92, prev + delta);
        }
        return prev;
      });
    }, 450);

    return () => {
      clearInterval(stageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const p1 = panelists[0] || { name: 'Alex', role: 'Technical Lead' };
  const p2 = panelists[1] || { name: 'Mark', role: 'Product Manager' };
  const p3 = panelists[2] || { name: 'David', role: 'Hiring Manager' };

  return (
    <div className="flex h-full min-h-0 w-full flex-col items-center justify-center overflow-y-auto bg-transparent p-4 md:p-8 text-center animate-fade-in">
      <div className="mx-auto w-full max-w-3xl space-y-8 my-auto">
        
        {/* Holographic Radar / AI Core Visualizer */}
        <div className="relative mx-auto flex h-36 w-36 items-center justify-center">
          {/* Pulsing glow rings */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
          <div className="absolute -inset-4 rounded-full border border-primary/30 animate-spin [animation-duration:12s]" />
          <div className="absolute -inset-8 rounded-full border border-primary/15 border-dashed animate-spin [animation-duration:20s] [animation-direction:reverse]" />

          {/* Central orb */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-primary/30 via-card to-primary/10 border border-primary/50 shadow-2xl shadow-primary/30">
            <Sparkles className="h-10 w-10 text-primary animate-pulse" />
          </div>

          {/* Live floating chip */}
          <div className="absolute -bottom-2 z-20 flex items-center gap-1.5 rounded-full bg-black/80 border border-primary/40 px-3 py-0.5 text-[10px] font-semibold text-primary shadow-lg backdrop-blur-md">
            <Zap className="h-3 w-3 fill-primary text-primary" />
            <span>Gemini 3.5 Flash Engine</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-3.5 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Hiring Committee Deliberation Active</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Synthesizing Interview Evaluation
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our multi-agent evaluation engine is scoring candidate responses against technical correctness, business impact, and experience calibration.
          </p>
        </div>

        {/* Context Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="rounded-full bg-card/80 border border-border/60 px-3 py-1 font-medium text-foreground">
            <strong>Candidate:</strong> {candidateName && candidateName.toLowerCase() !== 'candidate' ? candidateName : 'Candidate'}
          </span>
          <span className="rounded-full bg-card/80 border border-border/60 px-3 py-1 font-medium text-foreground">
            <strong>Role:</strong> {role}
          </span>
          <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-3 py-1 font-semibold text-blue-300">
            {level} Tier
          </span>
          <span className="rounded-full bg-purple-500/10 border border-purple-500/30 px-3 py-1 font-semibold text-purple-300">
            {difficulty === 'auto' ? '⚡ Adaptive Rigor' : `${difficulty.toUpperCase()} Rigor`}
          </span>
          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 font-semibold text-emerald-300">
            {transcriptLength} Turns Recorded
          </span>
        </div>

        {/* Animated Progress Bar */}
        <div className="space-y-2 max-w-lg mx-auto">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Deliberation Progress</span>
            <span className="font-semibold text-primary">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-card border border-border/60 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-purple-400 to-emerald-400 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Evaluation Steps Progression Card */}
        <div className="rounded-2xl border border-border/60 bg-card/30 p-5 text-left backdrop-blur-sm max-w-xl mx-auto space-y-3.5 shadow-xl">
          <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">
            Committee Analysis Pipeline
          </div>
          
          <div className="space-y-2.5">
            {EVALUATION_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isCompleted = idx < currentStageIndex;
              const isCurrent = idx === currentStageIndex;

              return (
                <div 
                  key={stage.id} 
                  className={`flex items-start gap-3 rounded-xl p-2.5 transition-all ${
                    isCurrent 
                      ? 'bg-primary/10 border border-primary/30 ring-1 ring-primary/20' 
                      : isCompleted 
                      ? 'bg-black/20 opacity-80' 
                      : 'opacity-40'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {isCompleted ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : isCurrent ? (
                      <Icon className="h-4 w-4 text-primary animate-spin [animation-duration:3s]" />
                    ) : (
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs font-semibold ${isCurrent ? 'text-primary font-bold' : isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {stage.title}
                      </span>
                      {isCurrent && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-primary animate-pulse bg-primary/20 px-1.5 py-0.5 rounded">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Committee Members Voting Roster */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-1">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
            <span>{p1.name} ({p1.role})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-purple-400 animate-ping" />
            <span>{p2.name} ({p2.role})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{p3.name} ({p3.role})</span>
          </div>
        </div>

      </div>
    </div>
  );
}
