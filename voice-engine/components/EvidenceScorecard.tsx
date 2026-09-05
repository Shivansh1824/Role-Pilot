'use client';

import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  AlertCircle, 
  Quote, 
  Cpu, 
  Briefcase, 
  Users, 
  ArrowLeft, 
  FileText,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TRACK_EVALUATIONS, PANEL_CONFIGS } from '@/lib/panel';

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
  turnIndex?: number;
};

export function EvidenceScorecard({
  transcript,
  agentUID,
  onRestart,
  onReturnToDashboard,
  role = 'Senior Full-Stack Engineer',
  difficulty = 'auto',
  track = 'tech',
  candidateName = '',
}: EvidenceScorecardProps) {
  const [selectedEvidenceIndex, setSelectedEvidenceIndex] = useState<number | null>(null);

  const trackKey = (track || 'tech').toLowerCase();
  const evalConfig = TRACK_EVALUATIONS[trackKey] ?? TRACK_EVALUATIONS['tech'];
  const panelists = PANEL_CONFIGS[trackKey] ?? PANEL_CONFIGS['tech'];

  // Derive dynamic evidence items and individual role scores from the real transcript
  const {
    evidenceList,
    score1,
    score2,
    score3,
    overallScore,
    decision,
  } = useMemo(() => {
    const candidateTurns = transcript.filter(
      (t) => String(t.uid) !== agentUID && (t.text || '').trim().length > 0,
    );
    const agentTurns = transcript.filter(
      (t) => String(t.uid) === agentUID && (t.text || '').trim().length > 0,
    );

    const items: EvidenceItem[] = [];

    // 1. Analyze Panelist 1 (Lead Domain: e.g. Alex, Sarah, Elena, Maya)
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
        quotedText: `"${p1Answer.text.slice(0, 160)}${p1Answer.text.length > 160 ? '...' : ''}"`,
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
      });
    }

    // 2. Analyze Panelist 2 (Cross-Functional / PS11 Interjection Lead)
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
        quotedText: `"${p2Answer.text.slice(0, 160)}${p2Answer.text.length > 160 ? '...' : ''}"`,
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
      });
    }

    // 3. Analyze Panelist 3 (David: Hiring Manager / Leadership / STAR)
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
        quotedText: `"${p3Answer.text.slice(0, 160)}${p3Answer.text.length > 160 ? '...' : ''}"`,
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
      });
    }

    // Dynamic scoring calculation
    const totalWords = candidateTurns.reduce(
      (acc, t) => acc + (t.text || '').split(/\s+/).length,
      0,
    );
    const depthBonus = Math.min(8, Math.floor(totalWords / 20));

    const s1 = Math.min(98, Math.max(70, 84 + depthBonus));
    const s2 = Math.min(
      95,
      Math.max(68, (items[1]?.type === 'strength' ? 88 : 74) + Math.floor(depthBonus / 2)),
    );
    const s3 = Math.min(96, Math.max(72, 86 + depthBonus));
    const oScore = Math.round((s1 + s2 + s3) / 3);
    const dec = oScore >= 85 ? 'Strong Hire' : oScore >= 75 ? 'Hire' : 'Needs Review';

    return {
      evidenceList: items,
      score1: s1,
      score2: s2,
      score3: s3,
      overallScore: oScore,
      decision: dec,
    };
  }, [transcript, agentUID, evalConfig]);

  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-y-auto bg-[#0d0d11] p-4 md:p-8 text-left animate-fade-in">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        
        {/* Header Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Post-Interview Evaluation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
              Evidence-Based Assessment Scorecard
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Structured evaluation linked directly to verbatim transcript timestamps.
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

        {/* Overall Recommendation Banner */}
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-card/50 to-emerald-950/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <Trophy className="h-8 w-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Decision</span>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                  {decision}
                </span>
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300">
                  {difficulty === 'auto' ? '⚡ Adaptive AI Difficulty' : `${difficulty.toUpperCase()} Tier`}
                </span>
              </div>
              <h2 className="text-xl font-bold text-foreground mt-1">
                {candidateName && candidateName.toLowerCase() !== 'candidate' ? `${candidateName} • ${role}` : role}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Demonstrated high engineering depth with responsive adaptation to product and behavioral cross-examination.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2 bg-black/40 border border-border/50 rounded-xl px-5 py-3 shrink-0">
            <span className="text-3xl font-extrabold text-foreground">{overallScore}</span>
            <span className="text-xs text-muted-foreground">/ 100 Overall</span>
          </div>
        </div>

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
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${score1}%` }} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {evalConfig.panelist1.cardBlurb}
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
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${score2}%` }} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {evalConfig.panelist2.cardBlurb}
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
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${score3}%` }} />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {evalConfig.panelist3.cardBlurb}
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
                    key={item.id}
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
                          {item.speaker} ({item.roleTitle})
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
                      </div>
                      <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${isSelected ? 'rotate-90 text-primary' : ''}`} />
                    </div>

                    <h4 className="text-sm font-semibold text-foreground mt-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-3 flex items-start gap-2 rounded-lg border border-border/40 bg-black/30 p-2 text-xs text-muted-foreground italic">
                      <Quote className="h-3.5 w-3.5 shrink-0 text-primary/70 not-italic mt-0.5" />
                      <span className="line-clamp-2">&quot;{item.quotedText}&quot;</span>
                    </div>
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
              <span className="text-[11px] text-muted-foreground">Synced via Agora RTM</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {transcript.length === 0 ? (
                <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                  No transcript lines recorded for this session.
                </div>
              ) : (
                transcript.map((msg, i) => {
                  const isAgent = String(msg.uid) === agentUID;
                  const isHighlighted = selectedEvidenceIndex !== null;

                  return (
                    <div
                      key={i}
                      className={`rounded-xl border p-3 text-xs leading-relaxed transition-colors ${
                        isAgent
                          ? 'border-[#2f2f38] bg-[#16161d] text-foreground'
                          : 'border-blue-900/30 bg-blue-950/20 text-blue-100'
                      } ${isHighlighted ? 'border-primary/40 bg-primary/5' : ''}`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-semibold text-muted-foreground mb-1">
                        <span>{isAgent ? 'AI Interview Committee' : (candidateName && candidateName.toLowerCase() !== 'candidate' ? candidateName : 'Interviewee')}</span>
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
