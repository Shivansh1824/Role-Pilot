'use client';

import React from 'react';
import { Target, TrendingUp, AlertTriangle, Award, CheckCircle } from 'lucide-react';

interface ImpactAnalysisProps {
  impactAnalysis?: {
    verdict: string;
    impactScore: number;
    hits: string[];
    misses: string[];
  };
  experienceCalibration?: string;
}

export function ScorecardImpactSpotlight({
  impactAnalysis,
  experienceCalibration,
}: ImpactAnalysisProps) {
  if (!impactAnalysis) return null;

  const hits = impactAnalysis.hits || [];
  const misses = impactAnalysis.misses || [];

  return (
    <div className="rounded-2xl border border-primary/25 bg-card/30 p-5 space-y-4 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-3">
        <div className="flex items-center gap-2 text-primary">
          <Target className="h-4 w-4" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Quantifiable Impact & Technical Hit Analysis
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Impact Rating:</span>
          <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-bold text-primary">
            {impactAnalysis.impactScore}% Impact Score
          </span>
        </div>
      </div>

      {/* Experience Tier & Difficulty Calibration Note */}
      {experienceCalibration && (
        <div className="flex items-start gap-2.5 rounded-xl border border-border/50 bg-background/50 p-3 text-xs text-muted-foreground">
          <Award className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
          <div>
            <strong className="text-foreground">Committee Calibration: </strong>
            <span>{typeof experienceCalibration === 'string' ? experienceCalibration : String(experienceCalibration)}</span>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground leading-relaxed">
        {impactAnalysis.verdict}
      </p>

      {/* Hits & Misses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {/* Identified Hits */}
        <div className="rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-3.5 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Identified Hits & Metrics ({hits.length})
            </span>
          </div>
          {hits.length === 0 ? (
            <p className="text-[11px] text-muted-foreground italic">
              No concrete quantifiable metrics were cited in candidate responses.
            </p>
          ) : (
            <ul className="space-y-1.5">
              {hits.map((hit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-emerald-300/90 leading-normal">
                  <CheckCircle className="h-3 w-3 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{hit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Missed Impact / Opportunities */}
        <div className="rounded-xl border border-amber-500/25 bg-amber-950/15 p-3.5 space-y-2">
          <div className="flex items-center gap-2 text-amber-400">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Impact Gaps & Opportunities ({misses.length})
            </span>
          </div>
          {misses.length === 0 ? (
            <p className="text-[11px] text-muted-foreground italic">
              Candidate addressed all operational and business constraints thoroughly.
            </p>
          ) : (
            <ul className="space-y-1.5">
              {misses.map((miss, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-amber-300/90 leading-normal">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                  <span>{miss}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
