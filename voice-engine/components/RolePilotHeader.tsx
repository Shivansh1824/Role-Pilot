'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Mic, Bot, Sparkles, Menu, X, ArrowLeft } from 'lucide-react';

interface RolePilotHeaderProps {
  track?: string;
  candidateName?: string;
  isInCall?: boolean;
  onEndInterview?: () => void;
}

export function RolePilotHeader({
  track = 'tech',
  candidateName,
  isInCall = false,
  onEndInterview,
}: RolePilotHeaderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Synchronize theme with localStorage and document classes on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
      setTheme(savedTheme);
      applyTheme(savedTheme);

      const handleStorage = (e: StorageEvent) => {
        if (e.key === 'theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
          setTheme(e.newValue);
          applyTheme(e.newValue);
        }
      };

      const handleThemeChanged = (e: any) => {
        if (e.detail?.theme) {
          setTheme(e.detail.theme);
          applyTheme(e.detail.theme);
        }
      };

      window.addEventListener('storage', handleStorage);
      document.addEventListener('themeChanged', handleThemeChanged);
      return () => {
        window.removeEventListener('storage', handleStorage);
        document.removeEventListener('themeChanged', handleThemeChanged);
      };
    }
  }, []);

  const applyTheme = (targetTheme: 'dark' | 'light') => {
    const root = document.documentElement;
    if (targetTheme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light-theme');
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: nextTheme } }));
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full shrink-0 items-center justify-between border-b border-border/70 bg-card/60 px-4 md:px-7 backdrop-blur-xl transition-colors duration-300">
      {/* Left: Brand Logo matching Role-Pilot base design */}
      <div className="flex items-center gap-3">
        <a
          href="/dashboard.html"
          className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
          title="Return to Role-Pilot Dashboard"
        >
          <svg className="h-8 w-8 transition-transform group-hover:rotate-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-grad-header" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(263, 75%, 60%)" />
                <stop offset="100%" stopColor="hsl(190, 95%, 45%)" />
              </linearGradient>
            </defs>
            <rect x="12" y="66" width="13" height="18" rx="3" fill="url(#logo-grad-header)" opacity="0.35" />
            <rect x="30" y="48" width="13" height="36" rx="3" fill="url(#logo-grad-header)" opacity="0.6" />
            <rect x="48" y="30" width="13" height="54" rx="3" fill="url(#logo-grad-header)" opacity="0.8" />
            <path d="M30,22 L92,12 L58,51 L44,46 Z" fill="url(#logo-grad-header)" />
            <path d="M44,46 L92,12 L52,58 Z" fill="url(#logo-grad-header)" opacity="0.85" />
            <path d="M52,58 L92,12 L72,36 Z" fill="url(#logo-grad-header)" opacity="0.7" />
          </svg>
          <span className="font-sans text-xl font-extrabold tracking-tight text-foreground">
            Role<span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">Pilot</span>
          </span>
        </a>

        {/* Small separator & Session Indicator */}
        <div className="hidden lg:flex items-center gap-2 border-l border-border/70 pl-3">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            AI Voice Committee
          </span>
        </div>
      </div>

      {/* Center: Main Navigation Tabs */}
      <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-muted/30 p-1 backdrop-blur-md">
        <a
          href="/dashboard.html"
          className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-card/40"
        >
          <LayoutDashboard className="h-3.5 w-3.5" />
          <span>Dashboard</span>
        </a>
        <a
          href="/gear-up.html"
          className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-card/40"
        >
          <Mic className="h-3.5 w-3.5 text-cyan-400" />
          <span>Voice Onboarding</span>
        </a>
        <div
          className="flex items-center gap-1.5 rounded-full bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm border border-border/60"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interview Panel</span>
        </div>
      </nav>

      {/* Right: Actions, Theme Toggle & Navigation */}
      <div className="flex items-center gap-2.5">
        {/* Live Audio Telemetry Pill */}
        <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-medium text-foreground/90">
            {isInCall ? 'Live Panel Active' : 'Agora SD-RTN Ready'}
          </span>
        </div>

        {/* Theme Toggle Button (☀️ / 🌙) */}
        <button
          id="theme-toggle"
          type="button"
          onClick={toggleTheme}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-sm transition-transform duration-200 hover:scale-110 active:scale-95 hover:bg-card hover:border-border shadow-sm"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* Return to Dashboard */}
        <a
          href="/dashboard.html"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-200 hover:bg-card hover:border-primary/40 hover:shadow-sm"
        >
          <LayoutDashboard className="h-3.5 w-3.5 text-muted-foreground" />
          <span>Dashboard</span>
        </a>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card/60 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 z-50 flex w-full flex-col gap-3 border-b border-border/70 bg-card/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden animate-fade-in">
          <a
            href="/dashboard.html"
            className="flex items-center gap-2 rounded-lg p-2.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </a>
          <a
            href="/gear-up.html"
            className="flex items-center gap-2 rounded-lg p-2.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            <Mic className="h-4 w-4 text-cyan-400" />
            <span>Voice Onboarding</span>
          </a>
          <div className="flex items-center justify-between rounded-lg bg-primary/10 p-2.5 text-sm font-semibold text-primary">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Interview Panel (Active)</span>
            </div>
            <span className="text-xs uppercase">{track} Panel</span>
          </div>
        </div>
      )}
    </header>
  );
}
