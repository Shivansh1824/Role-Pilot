'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  AlertCircle, 
  Quote, 
  Cpu, 
  Briefcase, 
  Users, 
  FileText,
  Sparkles,
  ChevronRight,
  Star,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TRACK_EVALUATIONS, PANEL_CONFIGS } from '@/lib/panel';
import { isAgentUid } from '@/lib/agora';
import { ScorecardImpactSpotlight } from './ScorecardImpactSpotlight';

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
  role?: string;
  level?: string;
  difficulty?: string;
  track?: string;
  candidateName?: string;
}

type EvidenceItem = {
  id: string;
  speaker: string;
  type: 'strength' | 'gap' | 'contradiction';
  roleTitle: string;
  title: string;
  description: string;
  quotedText: string;
  impactRating?: 'High' | 'Medium' | 'Low';
  turnIndex?: number;
};

type AIEvaluationResult = {
  overallScore: number;
  decision: string;
  starRating: number;
  executiveSummary: string;
  experienceCalibration: string;
  impactAnalysis: {
    verdict: string;
    impactScore: number;
    hits: string[];
    misses: string[];
  };
  breakdown: {
    panelist1: { name: string; roleTitle: string; score: number; feedback: string };
    panelist2: { name: string; roleTitle: string; score: number; feedback: string };
    panelist3: { name: string; roleTitle: string; score: number; feedback: string };
  };
  evidenceList: EvidenceItem[];
};

export function EvidenceScorecard({
  transcript,
  agentUID,
  onRestart,
  onReturnToDashboard,
  role = 'Senior Full-Stack Engineer',
  level = 'Mid-Level',
  difficulty = 'auto',
  track = 'tech',
  candidateName = '',
}: EvidenceScorecardProps) {
  const [selectedEvidenceIndex, setSelectedEvidenceIndex] = useState<number | null>(null);
  const [aiEvaluation, setAiEvaluation] = useState<AIEvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(true);

  const trackKey = (track || 'tech').toLowerCase();
  const evalConfig = TRACK_EVALUATIONS[trackKey] ?? TRACK_EVALUATIONS.tech;
  const panelists = PANEL_CONFIGS[trackKey] ?? PANEL_CONFIGS.tech;

  // Live evaluation hook powered by gemini-3.5-flash on dedicated isolated key
  useEffect(() => {
    let isCancelled = false;

    async function fetchAiEvaluation() {
      if (!transcript || transcript.length === 0) {
        setIsEvaluating(false);
        return;
      }

      setIsEvaluating(true);
      try {
        const response = await fetch('/api/evaluate-interview', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            transcript,
            agentUID,
            role,
            level: level || 'Mid-Level',
            difficulty,
            track: trackKey,
            candidateName: candidateName || 'Candidate',
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        if (!isCancelled) {
          setAiEvaluation(data);
          setIsEvaluating(false);
        }
      } catch (err) {
        console.warn('AI evaluation offline/fallback triggered:', err);
        if (!isCancelled) {
          setIsEvaluating(false);
        }
      }
    }

    fetchAiEvaluation();

    return () => {
      isCancelled = true;
    };
  }, [transcript, agentUID, role, level, difficulty, trackKey, candidateName]);

  // Derive dynamic evidence items and individual role scores from the real transcript (fallback & init)
  const {
    fallbackEvidenceList,
    fallbackScore1,
    fallbackScore2,
    fallbackScore3,
    fallbackOverallScore,
    fallbackDecision,
    hasAskedQuestions,
  } = useMemo(() => {
    const isTurnFromAgent = (t: TranscriptEntry) => {
      const text = (t.text || '').trim();
      return isAgentUid(t.uid) || String(t.uid) === agentUID || /^\[.+\]/.test(text);
    };

    const candidateTurns = transcript.filter(
      (t) => !isTurnFromAgent(t) && (t.text || '').trim().length > 0,
    );
    const agentTurns = transcript.filter(
      (t) => isTurnFromAgent(t) && (t.text || '').trim().length > 0,
    );

    const items: EvidenceItem[] = [];

    // 1. Panelist 1 Fallback
    const p1Regex = new RegExp(`\\[${evalConfig.panelist1.name}|^${evalConfig.panelist1.name}:|${evalConfig.panelist1.name}\\s*\\(`, 'i');
    const p1Prompt = agentTurns.find((t) => p1Regex.test(t.text || ''));
    const p1Answer = candidateTurns.find((t) => evalConfig.panelist1.keywords.test(t.text || '')) || candidateTurns[0];

    if (p1Answer?.text) {
      const hasKeywords = evalConfig.panelist1.keywords.test(p1Answer.text);
      items.push({
        id: `ev-${evalConfig.panelist1.name.toLowerCase()}`,
        speaker: evalConfig.panelist1.name,
        roleTitle: evalConfig.panelist1.roleTitle,
        type: hasKeywords ? 'strength' : 'gap',
        title: hasKeywords ? evalConfig.panelist1.strengthTitle : evalConfig.panelist1.gapTitle,
        description: hasKeywords ? evalConfig.panelist1.strengthDesc : evalConfig.panelist1.gapDesc,
        quotedText: p1Answer.text.slice(0, 160) + (p1Answer.text.length > 160 ? '...' : ''),
        impactRating: hasKeywords ? 'High' : 'Medium',
      });
    } else {
      items.push({
        id: `ev-${evalConfig.panelist1.name.toLowerCase()}-fallback`,
        speaker: evalConfig.panelist1.name,
        roleTitle: evalConfig.panelist1.roleTitle,
        type: 'strength',
        title: evalConfig.panelist1.strengthTitle,
        description: evalConfig.panelist1.strengthDesc,
        quotedText: p1Prompt?.text
          ? `${evalConfig.panelist1.name}: "${p1Prompt.text.slice(0, 140)}..."`
          : 'Demonstrated core domain competency throughout the conversation.',
        impactRating: 'Medium',
      });
    }

    // 2. Panelist 2 Fallback
    const p2Regex = new RegExp(`\\[${evalConfig.panelist2.name}|^${evalConfig.panelist2.name}:|${evalConfig.panelist2.name}\\s*\\(`, 'i');
    const p2Prompt = agentTurns.find((t) => p2Regex.test(t.text || ''));
    const p2Answer = candidateTurns.find((t) => evalConfig.panelist2.keywords.test(t.text || '')) || candidateTurns[1] || candidateTurns[0];

    if (p2Answer?.text) {
      const hasKeywords = evalConfig.panelist2.keywords.test(p2Answer.text);
      items.push({
        id: `ev-${evalConfig.panelist2.name.toLowerCase()}`,
        speaker: evalConfig.panelist2.name,
        roleTitle: evalConfig.panelist2.roleTitle,
        type: hasKeywords ? 'strength' : 'gap',
        title: hasKeywords ? evalConfig.panelist2.strengthTitle : evalConfig.panelist2.gapTitle,
        description: hasKeywords ? evalConfig.panelist2.strengthDesc : evalConfig.panelist2.gapDesc,
        quotedText: p2Answer.text.slice(0, 160) + (p2Answer.text.length > 160 ? '...' : ''),
        impactRating: hasKeywords ? 'High' : 'Medium',
      });
    } else {
      items.push({
        id: `ev-${evalConfig.panelist2.name.toLowerCase()}-fallback`,
        speaker: evalConfig.panelist2.name,
        roleTitle: evalConfig.panelist2.roleTitle,
        type: 'gap',
        title: evalConfig.panelist2.gapTitle,
        description: evalConfig.panelist2.gapDesc,
        quotedText: p2Prompt?.text
          ? `${evalConfig.panelist2.name}: "${p2Prompt.text.slice(0, 140)}..."`
          : 'Pushed to connect domain choices with broader organizational implications.',
        impactRating: 'Medium',
      });
    }

    // 3. Panelist 3 Fallback
    const p3Regex = new RegExp(`\\[${evalConfig.panelist3.name}|^${evalConfig.panelist3.name}:|${evalConfig.panelist3.name}\\s*\\(`, 'i');
    const p3Prompt = agentTurns.find((t) => p3Regex.test(t.text || ''));
    const p3Answer = candidateTurns.find((t) => evalConfig.panelist3.keywords.test(t.text || '')) || candidateTurns[2] || candidateTurns[0];

    if (p3Answer?.text) {
      items.push({
        id: `ev-${evalConfig.panelist3.name.toLowerCase()}`,
        speaker: evalConfig.panelist3.name,
        roleTitle: evalConfig.panelist3.roleTitle,
        type: 'strength',
        title: evalConfig.panelist3.strengthTitle,
        description: evalConfig.panelist3.strengthDesc,
        quotedText: p3Answer.text.slice(0, 160) + (p3Answer.text.length > 160 ? '...' : ''),
        impactRating: 'High',
      });
    } else {
      items.push({
        id: `ev-${evalConfig.panelist3.name.toLowerCase()}-fallback`,
        speaker: evalConfig.panelist3.name,
        roleTitle: evalConfig.panelist3.roleTitle,
        type: 'strength',
        title: evalConfig.panelist3.strengthTitle,
        description: evalConfig.panelist3.strengthDesc,
        quotedText: p3Prompt?.text
          ? `${evalConfig.panelist3.name}: "${p3Prompt.text.slice(0, 140)}..."`
          : 'Demonstrated structured communication throughout the session.',
        impactRating: 'Medium',
      });
    }

    const totalWords = candidateTurns.reduce((acc, t) => acc + (t.text || '').split(/\s+/).length, 0);
    const depthBonus = Math.min(8, Math.floor(totalWords / 20));

    const reverseQAQuestionRegex = /\?|what is|how do|could you|can you tell me|what does the|roadmap|tech stack|team culture|next steps/i;
    const candidateQAQuestions = candidateTurns.filter((t) => reverseQAQuestionRegex.test(t.text || ''));
    const hasAskedQuestions = candidateQAQuestions.length > 0;
    const qaBonus = hasAskedQuestions ? 4 : 0;

    const s1 = Math.min(98, Math.max(70, 84 + depthBonus));
    const s2 = Math.min(95, Math.max(68, (items[1]?.type === 'strength' ? 88 : 74) + Math.floor(depthBonus / 2)));
    const s3 = Math.min(96, Math.max(72, 86 + depthBonus));
    const oScore = Math.min(99, Math.round((s1 + s2 + s3) / 3) + qaBonus);
    const dec = oScore >= 85 ? 'Strong Hire' : oScore >= 75 ? 'Hire' : 'Needs Review';

    return {
      fallbackEvidenceList: items,
      fallbackScore1: s1,
      fallbackScore2: s2,
      fallbackScore3: s3,
      fallbackOverallScore: oScore,
      fallbackDecision: dec,
      hasAskedQuestions,
    };
  }, [transcript, agentUID, evalConfig]);

  // Final consolidated properties (AI-preferred, heuristic fallback)
  const overallScore = aiEvaluation ? aiEvaluation.overallScore : fallbackOverallScore;
  const decision = aiEvaluation ? aiEvaluation.decision : fallbackDecision;
  const starRating = aiEvaluation ? aiEvaluation.starRating : (overallScore >= 90 ? 4.8 : overallScore >= 80 ? 4.2 : 3.6);
  const executiveSummary = aiEvaluation?.executiveSummary || 'Demonstrated high engineering depth with responsive adaptation to product and behavioral cross-examination.';
  const score1 = aiEvaluation ? aiEvaluation.breakdown.panelist1.score : fallbackScore1;
  const score2 = aiEvaluation ? aiEvaluation.breakdown.panelist2.score : fallbackScore2;
  const score3 = aiEvaluation ? aiEvaluation.breakdown.panelist3.score : fallbackScore3;
  const blurb1 = aiEvaluation?.breakdown.panelist1.feedback || evalConfig.panelist1.cardBlurb;
  const blurb2 = aiEvaluation?.breakdown.panelist2.feedback || evalConfig.panelist2.cardBlurb;
  const blurb3 = aiEvaluation?.breakdown.panelist3.feedback || evalConfig.panelist3.cardBlurb;
  const evidenceList = (aiEvaluation && aiEvaluation.evidenceList?.length > 0)
    ? aiEvaluation.evidenceList
    : fallbackEvidenceList;

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-y-auto bg-transparent p-4 md:p-8 text-left animate-fade-in">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        
        {/* Header Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Post-Interview Evaluation • Gemini 3.5 Flash Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Evidence-Based Assessment Scorecard
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Structured evaluation calibrated against difficulty and experience tier, linking verbatim transcript quotes.
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

        {/* Live Gemini 3.5 Flash Evaluation Banner */}
        {isEvaluating && (
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-primary/40 bg-primary/10 text-xs text-primary animate-pulse">
            <Sparkles className="h-4 w-4 animate-spin shrink-0 text-primary" />
            <div className="flex-1">
              <strong>Gemini 3.5 Flash Evaluation in progress:</strong> Calibrating {level} experience tier on {difficulty} difficulty, testing technical correctness, and computing quantifiable impact hits...
            </div>
          </div>
        )}

        {/* Overall Recommendation Banner */}
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-card/50 to-emerald-950/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <Trophy className="h-8 w-8" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Decision</span>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                  {decision}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-300">
                  <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
                  {starRating.toFixed(1)} / 5.0
                </span>
                <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-blue-300">
                  <Layers className="inline h-2.5 w-2.5 mr-1" />
                  {level}
                </span>
                <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-purple-300">
                  {difficulty === 'auto' ? '⚡ Adaptive AI Difficulty' : `${difficulty.toUpperCase()} Tier`}
                </span>
                {hasAskedQuestions && (
                  <span className="rounded-full bg-teal-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-teal-300">
                    ★ Reverse Q&A Bonus (+4)
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-foreground mt-2">
                {candidateName && candidateName.toLowerCase() !== 'candidate' ? `${candidateName} • ${role}` : role}
              </h2>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-2xl">
                {executiveSummary}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end bg-black/40 border border-border/50 rounded-xl px-5 py-3 shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-foreground">{overallScore}</span>
              <span className="text-xs text-muted-foreground">/ 100 Overall</span>
            </div>
            <span className="text-[10px] text-primary/80 mt-1 font-medium">
              {aiEvaluation ? '✓ Verified by Gemini 3.5 Flash' : '⚡ Local Analysis'}
            </span>
          </div>
        </div>

        {/* Quantifiable Hits & Impact Analysis Spotlight */}
        {aiEvaluation?.impactAnalysis && (
          <ScorecardImpactSpotlight
            impactAnalysis={aiEvaluation.impactAnalysis}
            experienceCalibration={aiEvaluation.experienceCalibration}
          />
        )}

        {/* Role-by-Role Panel Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Panelist 1 Score */}
          {(() => {
            const Icon1 = panelists[0]?.icon || Cpu;
            return (
              <div className="rounded-2xl border border-blue-500/20 bg-card/40 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Icon1 className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {evalConfig.panelist1.name} • {evalConfig.panelist1.roleTitle}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-blue-300">{score1}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-blue-950 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full transition-all duration-700" style={{ width: `${score1}%` }} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {blurb1}
                </p>
              </div>
            );
          })()}

          {/* Panelist 2 Score */}
          {(() => {
            const Icon2 = panelists[1]?.icon || Briefcase;
            return (
              <div className="rounded-2xl border border-purple-500/20 bg-card/40 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-purple-400">
                    <Icon2 className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {evalConfig.panelist2.name} • {evalConfig.panelist2.roleTitle}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-purple-300">{score2}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-purple-950 overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full transition-all duration-700" style={{ width: `${score2}%` }} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {blurb2}
                </p>
              </div>
            );
          })()}

          {/* Panelist 3 Score (David) */}
          {(() => {
            const Icon3 = panelists[2]?.icon || Users;
            return (
              <div className="rounded-2xl border border-emerald-500/20 bg-card/40 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Icon3 className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {evalConfig.panelist3.name} • {evalConfig.panelist3.roleTitle}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-emerald-300">{score3}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-emerald-950 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full transition-all duration-700" style={{ width: `${score3}%` }} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {blurb3}
                </p>
              </div>
            );
          })()}
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
                  item.speaker === evalConfig.panelist1.name
                    ? 'text-blue-400 border-blue-500/30 bg-blue-500/10'
                    : item.speaker === evalConfig.panelist2.name
                    ? 'text-purple-400 border-purple-500/30 bg-purple-500/10'
                    : 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';

                return (
                  <div
                    key={item.id || idx}
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
                          {item.speaker} {item.roleTitle ? `(${item.roleTitle})` : ''}
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
                        {item.impactRating && (
                          <span className="rounded bg-primary/15 border border-primary/25 px-1.5 py-0.2 text-[9px] font-semibold text-primary">
                            {item.impactRating} Impact
                          </span>
                        )}
                      </div>
                      <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${isSelected ? 'rotate-90 text-primary' : ''}`} />
                    </div>

                    <h4 className="text-sm font-semibold text-foreground mt-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>

                    {item.quotedText && (
                      <div className="mt-3 flex items-start gap-2 rounded-lg border border-border/40 bg-black/30 p-2 text-xs text-muted-foreground italic">
                        <Quote className="h-3.5 w-3.5 shrink-0 text-primary/70 not-italic mt-0.5" />
                        <span className="line-clamp-2">&quot;{item.quotedText}&quot;</span>
                      </div>
                    )}
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
              <span className="text-[11px] text-muted-foreground">Synced via Agora Engine</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {transcript.length === 0 ? (
                <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                  No transcript lines recorded for this session.
                </div>
              ) : (
                transcript.map((msg, i) => {
                  const isAgent = isAgentUid(msg.uid) || String(msg.uid) === agentUID || /^\[.+\]/.test((msg.text || '').trim());
                  const selectedQuote = selectedEvidenceIndex !== null && evidenceList[selectedEvidenceIndex]?.quotedText;
                  const isHighlighted = Boolean(
                    selectedQuote &&
                    msg.text &&
                    (msg.text.includes(selectedQuote.replace(/^["']|["']$/g, '').slice(0, 40)) ||
                     selectedQuote.includes(msg.text.slice(0, 40)))
                  );

                  return (
                    <div
                      key={i}
                      className={`rounded-xl border p-3 text-xs leading-relaxed transition-all ${
                        isHighlighted
                          ? 'border-primary bg-primary/20 ring-2 ring-primary/40 shadow-lg'
                          : isAgent
                          ? 'border-border/70 bg-card/60 text-foreground'
                          : 'border-primary/30 bg-primary/10 text-foreground'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-semibold text-muted-foreground mb-1">
                        <span className={isAgent ? 'text-muted-foreground' : 'text-primary font-bold'}>
                          {isAgent ? 'AI Interview Committee' : (candidateName && candidateName.toLowerCase() !== 'candidate' ? candidateName : 'Candidate')}
                        </span>
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
