import { NextRequest, NextResponse } from 'next/server';
import { RtcTokenBuilder, RtcRole } from 'agora-token';

const EXPIRATION_TIME_IN_SECONDS = 3600;

function generateChannelName(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `ai-conversation-${timestamp}-${random}`;
}

export async function GET(request: NextRequest) {
  // console.log('Generating Agora token...');
  const APP_ID = process.env.NEXT_PUBLIC_AGORA_APP_ID;
  const APP_CERTIFICATE = process.env.NEXT_AGORA_APP_CERTIFICATE;

  if (!APP_ID || !APP_CERTIFICATE) {
    return NextResponse.json(
      { error: 'Agora credentials are not set' },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const uidStr = searchParams.get('uid');
  const parsedUid = uidStr ? parseInt(uidStr, 10) : Number.NaN;
  const uid = Number.isNaN(parsedUid) || parsedUid <= 0
    ? Math.floor(Math.random() * 9_999_000) + 1000
    : parsedUid;
  const channelName = searchParams.get('channel') || generateChannelName();

  const expiry = EXPIRATION_TIME_IN_SECONDS; // 3600 seconds (1 hour)

  try {
    // Generate RTC token for the numeric UID to join RTC channels
    const rtcToken = RtcTokenBuilder.buildTokenWithUid(
      APP_ID,
      APP_CERTIFICATE,
      channelName,
      uid,
      RtcRole.PUBLISHER,
      expiry,
      expiry,
    );

    // Also build a combined RTC+RTM token with string account for RTM / toolkit compatibility
    const combinedToken = RtcTokenBuilder.buildTokenWithRtm(
      APP_ID,
      APP_CERTIFICATE,
      channelName,
      uid.toString(),
      RtcRole.PUBLISHER,
      expiry,
      expiry,
    );

    return NextResponse.json({
      token: rtcToken,
      rtcToken,
      rtmToken: combinedToken,
      uid: uid.toString(),
      channel: channelName,
    });
  } catch (error) {
    console.error('Error generating Agora token:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate Agora token',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
