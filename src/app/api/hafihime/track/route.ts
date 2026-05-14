import { NextRequest } from 'next/server';

const HAFIHIME_API_URL = 'https://track.hafihime.com/api/track';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const apiKey = process.env.HAFIHIME_API_KEY;

    if (!apiKey) {
      console.warn('HAFIHIME_API_KEY not configured');
      return Response.json({ success: false, error: 'API key not configured' }, { status: 500 });
    }

    const response = await fetch(HAFIHIME_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch (error: any) {
    console.error('Hafihime track error:', error);
    return Response.json(
      { success: false, error: error.message || 'Tracking failed' },
      { status: 500 }
    );
  }
}
