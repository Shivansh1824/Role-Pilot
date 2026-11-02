'use client';

import { useState, useRef, Suspense, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { RTMClient } from 'agora-rtm';
import type {
  AgoraTokenData,
  ClientStartRequest,
  AgentResponse,
  AgoraRenewalTokens,
} from '../types/conversation';
import { ErrorBoundary } from './ErrorBoundary';
import { LoadingSkeleton } from './LoadingSkeleton';
import { QuickstartPreCallCard } from './QuickstartPreCallCard';
import { AIDisclosureModal } from './AIDisclosureModal';
import { EvidenceScorecard, type TranscriptEntry } from './EvidenceScorecard';
import { RolePilotHeader } from './RolePilotHeader';

// Dynamically import the ConversationComponent with ssr disabled
const ConversationComponent = dynamic(() => import('./ConversationComponent'), {
  ssr: false,
});

// Dynamically import AgoraRTCProvider (browser-only).
// The AgoraVoiceAI toolkit is initialized inside ConversationComponent after
// the RTC join succeeds, so this wrapper only needs to provide the RTC client.
const AgoraProvider = dynamic(
  async () => {
    const agoraModule = await import('agora-rtc-react');
    const AgoraRTCProvider =
      agoraModule.AgoraRTCProvider ||
      (agoraModule.default as any)?.AgoraRTCProvider;
    const AgoraRTC = (agoraModule.default || agoraModule) as any;
    return {
      default: function AgoraProviders({
        children,
      }: {
        children: React.ReactNode;
      }) {
        // useRef persists across StrictMode's simulated unmount/remount, so only
        // one RTC client is ever created per session (useMemo creates two in StrictMode).
        const clientRef = useRef<ReturnType<
          typeof AgoraRTC.createClient
        > | null>(null);
        if (!clientRef.current) {
          clientRef.current = AgoraRTC.createClient({
            mode: 'rtc',
            codec: 'vp8',
          });
        }
        return (
          <AgoraRTCProvider client={clientRef.current}>
            {children}
          </AgoraRTCProvider>
        );
      },
    };
  },
  { ssr: false },
);

export default function LandingPage() {
  const [showConversation, setShowConversation] = useState(false);
  const [showDisclosureModal, setShowDisclosureModal] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);
  const [finalTranscript, setFinalTranscript] = useState<TranscriptEntry[]>([]);

  // Setup configuration passed from interview-setup.html
  const [setupConfig, setSetupConfig] = useState({
    track: 'tech',
    role: 'Senior Full-Stack Engineer',
    level: 'Mid-Level',
    difficulty: 'auto',
    candidate: 'Alex',
    resume: 'none',
    resumeSummary: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const rawCandidate = params.get('candidate') ? decodeURIComponent(params.get('candidate')!).trim() : '';
      const cleanCandidate = rawCandidate && rawCandidate.toLowerCase() !== 'candidate' ? rawCandidate : 'Alex';
      const resumeSummary = sessionStorage.getItem('rolepilot_resume_summary') || '';
      setSetupConfig({
        track: params.get('track') || 'tech',
        role: params.get('role') ? decodeURIComponent(params.get('role')!) : 'Senior Full-Stack Engineer',
        level: params.get('level') ? decodeURIComponent(params.get('level')!) : 'Mid-Level',
        difficulty: params.get('difficulty') || 'auto',
        candidate: cleanCandidate,
        resume: params.get('resume') || 'none',
        resumeSummary,
      });
    }
  }, []);

  // Preload heavy modules on mount so they're already cached when the user
  // clicks "Try it Now" — eliminates the ~1.8s dynamic-import delay.
  useEffect(() => {
    import('agora-rtc-react').catch(() => {});
    import('agora-rtm').catch(() => {});
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agoraData, setAgoraData] = useState<AgoraTokenData | null>(null);
  const [rtmClient, setRtmClient] = useState<RTMClient | null>(null);
  const [agentJoinError, setAgentJoinError] = useState(false);

  const handleStartConversation = async () => {
    setIsLoading(true);
    setError(null);
    setAgentJoinError(false);
    setShowDisclosureModal(false);

    try {
      // 1. Fetch RTC token + channel
      const agoraResponse = await fetch('/api/generate-agora-token');
      const responseData = await agoraResponse.json();

      if (!agoraResponse.ok) {
        throw new Error(
          `Failed to generate Agora token: ${JSON.stringify(responseData)}`,
        );
      }

      // 2. Run agent invite and RTM setup in parallel
      const [agentData, rtm] = await Promise.all([
        // 2a. Start the AI agent with personalized configuration
        fetch('/api/invite-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            requester_id: responseData.uid,
            channel_name: responseData.channel,
            track: setupConfig.track,
            role: setupConfig.role,
            experience_level: setupConfig.level,
            difficulty_mode: setupConfig.difficulty,
            candidate_name: setupConfig.candidate,
            resume_summary: setupConfig.resumeSummary,
          }),
        })
          .then(async (res) => {
            if (!res.ok) {
              setAgentJoinError(true);
              return null;
            }
            return res.json() as Promise<AgentResponse>;
          })
          .catch((err) => {
            console.error('Failed to start conversation with agent:', err);
            setAgentJoinError(true);
            return null;
          }),

        // 2b. Set up RTM (with graceful fallback to RTC if RTM is unavailable)
        (async () => {
          try {
            const { default: AgoraRTM } = await import('agora-rtm');
            const rtm: RTMClient = new AgoraRTM.RTM(
              process.env.NEXT_PUBLIC_AGORA_APP_ID!,
              responseData.uid,
            );
            const tokenToUse = responseData.rtmToken || responseData.token;
            await rtm.login({ token: tokenToUse });
            await rtm.subscribe(responseData.channel);
            return rtm;
          } catch (rtmErr) {
            console.warn('[RTM] Optional RTM setup failed, proceeding with direct WebRTC audio session:', rtmErr);
            return null;
          }
        })(),
      ]);

      // 3. All dependencies ready — store state and show conversation
      setRtmClient(rtm);
      setAgoraData({
        ...responseData,
        agentId: agentData?.agent_id,
        agentIds: agentData?.agent_ids,
      });
      setShowScorecard(false);
      setShowConversation(true);
    } catch (err) {
      setError('Failed to start conversation. Please try again.');
      console.error('Error starting conversation:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTokenWillExpire = useCallback(
    async (uid: string): Promise<AgoraRenewalTokens> => {
      try {
        const channel = agoraData?.channel;
        if (!channel) {
          throw new Error('Missing channel for token renewal');
        }

        const [rtcResponse, rtmResponse] = await Promise.all([
          fetch(`/api/generate-agora-token?channel=${channel}&uid=${uid}`),
          fetch(`/api/generate-agora-token?channel=${channel}&uid=${agoraData.uid}`),
        ]);
        const [rtcData, rtmData] = await Promise.all([
          rtcResponse.json(),
          rtmResponse.json(),
        ]);

        if (!rtcResponse.ok || !rtmResponse.ok) {
          throw new Error('Failed to generate renewal tokens');
        }

        return {
          rtcToken: rtcData.token,
          rtmToken: rtmData.token,
        };
      } catch (error) {
        console.error('Error renewing token:', error);
        throw error;
      }
    },
    [agoraData],
  );

  const handleEndConversation = async (transcript?: any[]) => {
    // Stop the AI agent(s)
    const agentIdsToStop = agoraData?.agentIds && agoraData.agentIds.length > 0
      ? agoraData.agentIds
      : agoraData?.agentId
      ? [agoraData.agentId]
      : [];

    if (agentIdsToStop.length > 0) {
      try {
        const response = await fetch('/api/stop-conversation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ agent_ids: agentIdsToStop }),
        });
        if (!response.ok) {
          console.error('Failed to stop agent(s):', await response.text());
        }
      } catch (error) {
        console.error('Error stopping agent(s):', error);
      }
    }

    // Save transcript and switch to Scorecard
    if (transcript && transcript.length > 0) {
      setFinalTranscript(transcript);
    }
    
    // Tear down RTM
    rtmClient?.logout().catch((err) => console.error('RTM logout error:', err));
    setRtmClient(null);
    setShowConversation(false);
    setShowScorecard(true);
  };

  return (
    <div className="relative flex h-dvh min-h-screen flex-col overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Role-Pilot Ambient Glowing Background Layers */}
      <div className="rolepilot-bg-layers">
        <div className="rolepilot-glow-1" />
        <div className="rolepilot-glow-2" />
      </div>

      {/* Global Role-Pilot App Header with Theme Toggle */}
      <RolePilotHeader
        track={setupConfig.track}
        candidateName={setupConfig.candidate}
        isInCall={showConversation}
        onEndInterview={showConversation ? handleEndConversation : undefined}
      />

      {/* Pre-interview AI Disclosure Modal */}
      <AIDisclosureModal
        isOpen={showDisclosureModal}
        isLoading={isLoading}
        onConfirm={handleStartConversation}
        onClose={() => setShowDisclosureModal(false)}
      />

      {/* Main View Shell */}
      <div
        className={`relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden ${
          showConversation || showScorecard
            ? 'items-stretch justify-start'
            : 'items-center justify-center p-4'
        }`}
      >
        <div
          className={`z-10 flex min-h-0 flex-1 flex-col ${
            showConversation || showScorecard
              ? 'h-full w-full max-w-none items-stretch gap-0 px-0 text-left'
              : 'w-full max-w-none items-center justify-center text-center'
          }`}
        >
          {showScorecard ? (
            <EvidenceScorecard
              transcript={finalTranscript}
              agentUID={agoraData?.agentId || '123456'}
              onRestart={() => setShowScorecard(false)}
              onReturnToDashboard={() => (window.location.href = '/dashboard.html')}
              role={setupConfig.role}
              level={setupConfig.level}
              difficulty={setupConfig.difficulty}
              track={setupConfig.track}
              candidateName={setupConfig.candidate}
            />
          ) : !showConversation ? (
            <QuickstartPreCallCard
              isLoading={isLoading}
              error={error}
              onStartConversation={() => setShowDisclosureModal(true)}
              role={setupConfig.role}
              track={setupConfig.track}
              difficulty={setupConfig.difficulty}
              candidateName={setupConfig.candidate}
            />
          ) : agoraData ? (
            <>
              {agentJoinError && (
                <div className="m-3 p-3 bg-destructive/10 border border-destructive/25 rounded-2xl text-destructive text-xs max-w-md mx-auto">
                  Failed to connect with AI agent. The conversation may not work as expected.
                </div>
              )}
              <Suspense fallback={<LoadingSkeleton />}>
                <ErrorBoundary>
                  <AgoraProvider>
                    <ConversationComponent
                      agoraData={agoraData}
                      rtmClient={rtmClient}
                      track={setupConfig.track}
                      candidateName={setupConfig.candidate}
                      onTokenWillExpire={handleTokenWillExpire}
                      onEndConversation={handleEndConversation}
                    />
                  </AgoraProvider>
                </ErrorBoundary>
              </Suspense>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Failed to load conversation data.
            </p>
          )}
        </div>
      </div>

      {/* Persistent attribution footer for the pre-call view */}
      {!showConversation && !showScorecard && (
        <footer className="fixed bottom-0 right-0 z-20 py-4 pr-4 md:py-5 md:pr-6 pointer-events-none">
          <div className="flex items-center justify-end gap-2 text-muted-foreground pointer-events-auto bg-card/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border/60 text-xs shadow-sm">
            <span className="text-[10px] font-bold tracking-wider uppercase opacity-70">
              Powered by
            </span>
            <a
              href="https://agora.io/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Visit Agora's website"
            >
              <Image
                src="/agora-logo-rgb-blue.svg"
                alt="Agora"
                width={70}
                height={20}
                priority
                className="h-4 w-auto"
              />
            </a>
          </div>
        </footer>
      )}
    </div>
  );
}
