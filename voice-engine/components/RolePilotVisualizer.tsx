'use client';

import React from 'react';
import { Mic, Sparkles, Volume2, Loader2, WifiOff } from 'lucide-react';

export type RolePilotVisualizerState =
  | 'ambient'
  | 'listening'
  | 'analyzing'
  | 'talking'
  | 'joining'
  | 'disconnected'
  | 'not-joined';

interface RolePilotVisualizerProps {
  state: RolePilotVisualizerState | string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function RolePilotVisualizer({
  state,
  size = 'lg',
  className = '',
}: RolePilotVisualizerProps) {
  const normalizedState = (state || 'ambient').toLowerCase();

  const isTalking = normalizedState === 'talking' || normalizedState === 'speaking';
  const isListening = normalizedState === 'listening';
  const isAnalyzing = normalizedState === 'analyzing' || normalizedState === 'thinking';
  const isJoining = normalizedState === 'joining' || normalizedState === 'connecting';
  const isDisconnected = normalizedState === 'disconnected' || normalizedState === 'not-joined';

  // Dimension scale
  const orbSizes = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36',
    lg: 'w-48 h-48 sm:w-56 sm:h-56',
  };

  const currentOrbSize = orbSizes[size] || orbSizes.lg;

  // Status configuration
  let label = 'Interviewer Ready';
  let badgeColor = 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  let Icon = Sparkles;

  if (isTalking) {
    label = 'Interviewer Speaking…';
    badgeColor = 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    Icon = Volume2;
  } else if (isListening) {
    label = 'Listening to Your Voice…';
    badgeColor = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    Icon = Mic;
  } else if (isAnalyzing) {
    label = 'Analyzing Response…';
    badgeColor = 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    Icon = Loader2;
  } else if (isJoining) {
    label = 'Connecting to Panel…';
    badgeColor = 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    Icon = Loader2;
  } else if (isDisconnected) {
    label = 'Waiting for Interviewer…';
    badgeColor = 'bg-red-500/10 text-red-400 border-red-500/20';
    Icon = WifiOff;
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-6 ${className}`}>
      {/* Central Interactive Orb */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Halo 1 */}
        <div
          className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${
            isTalking
              ? 'bg-indigo-500/30 scale-125 animate-pulse'
              : isListening
              ? 'bg-emerald-500/30 scale-120 animate-pulse'
              : isAnalyzing
              ? 'bg-purple-500/35 scale-115 animate-spin'
              : 'bg-indigo-500/15 scale-100'
          }`}
        />

        {/* Ambient Halo 2 */}
        <div
          className={`absolute -inset-4 rounded-full blur-3xl transition-opacity duration-700 ${
            isTalking
              ? 'bg-cyan-500/25 opacity-100'
              : isListening
              ? 'bg-teal-500/25 opacity-100'
              : isAnalyzing
              ? 'bg-fuchsia-500/20 opacity-100'
              : 'opacity-0'
          }`}
        />

        {/* Expanding pulse rings for listening/talking */}
        {(isListening || isTalking) && (
          <>
            <div className={`absolute -inset-8 rounded-full border border-dashed animate-ping opacity-25 duration-1000 ${
              isTalking ? 'border-indigo-400' : 'border-emerald-400'
            }`} />
            <div className={`absolute -inset-14 rounded-full border opacity-15 animate-pulse duration-700 ${
              isTalking ? 'border-cyan-400' : 'border-emerald-300'
            }`} />
          </>
        )}

        {/* Rotating gradient border for analyzing */}
        {isAnalyzing && (
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-400 to-pink-500 animate-spin opacity-60 blur-[2px]" />
        )}

        {/* Core Glowing Orb */}
        <div
          className={`relative rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${currentOrbSize} ${
            isTalking
              ? 'bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 shadow-indigo-500/50 ring-4 ring-indigo-400/30'
              : isListening
              ? 'bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 shadow-emerald-500/50 ring-4 ring-emerald-400/30'
              : isAnalyzing
              ? 'bg-gradient-to-tr from-purple-600 via-indigo-600 to-fuchsia-400 shadow-purple-500/50 ring-4 ring-purple-400/30'
              : 'bg-gradient-to-tr from-slate-800 via-slate-700 to-indigo-950 shadow-slate-900/50 ring-2 ring-slate-700/50'
          }`}
        >
          {/* Inner glass reflection */}
          <div className="absolute top-2 left-6 w-1/3 h-1/4 rounded-full bg-white/20 blur-[3px] pointer-events-none" />

          {/* Dynamic Content Inside Orb */}
          {isTalking ? (
            /* Multi-bar active voice equalizer */
            <div className="flex items-center gap-1.5 z-10">
              <span className="w-1.5 h-6 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-10 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-14 bg-white rounded-full animate-bounce" />
              <span className="w-1.5 h-8 bg-white rounded-full animate-bounce [animation-delay:-0.2s]" />
              <span className="w-1.5 h-5 bg-white rounded-full animate-bounce [animation-delay:-0.35s]" />
            </div>
          ) : isListening ? (
            /* Sound wave listener icon */
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm animate-pulse">
                <Mic className="w-6 h-6 text-white" />
              </div>
            </div>
          ) : isAnalyzing ? (
            /* Rotating spinner */
            <div className="z-10 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          ) : (
            /* Ambient idle sparkles */
            <div className="z-10 flex flex-col items-center text-slate-300/80">
              <Sparkles className="w-8 h-8 animate-pulse text-indigo-300" />
            </div>
          )}
        </div>
      </div>

      {/* State Status Pill */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-md transition-all duration-300 ${badgeColor}`}
      >
        <Icon className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
        <span>{label}</span>
      </div>
    </div>
  );
}
