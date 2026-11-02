'use client';

import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import type { ILocalAudioTrack } from 'agora-rtc-sdk-ng';

interface RolePilotMicButtonProps {
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
  track?: any | null;
  onToggle: () => Promise<void>;
  className?: string;
}

export function RolePilotMicButton({
  isEnabled,
  track,
  onToggle,
  className = '',
}: RolePilotMicButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative group flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isEnabled
          ? 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90 focus:ring-primary'
          : 'bg-destructive/10 text-destructive border border-destructive/30 hover:bg-destructive/20 focus:ring-destructive'
      } ${className}`}
      title={isEnabled ? 'Mute Microphone' : 'Unmute Microphone'}
      aria-label={isEnabled ? 'Mute Microphone' : 'Unmute Microphone'}
    >
      {isEnabled ? (
        <>
          {/* Subtle audio ripple indicator when active */}
          <span className="absolute -inset-1 rounded-full border border-primary/40 animate-ping opacity-30 pointer-events-none" />
          <Mic className="w-5 h-5 transition-transform group-hover:scale-110" />
        </>
      ) : (
        <MicOff className="w-5 h-5 transition-transform group-hover:scale-110 text-destructive" />
      )}
    </button>
  );
}
