import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const coreMessages = messages.map((msg) => ({
      role: msg.role,
      content:
        msg.content ||
        (msg.parts ? msg.parts.map((p) => p.text || '').join('') : ''),
    }));

    // Get the AI stream
    const result = await streamText({
      model: google('gemini-2.5-flash'),
      system:
        'You are the AI interface for "The Syndicate," a premium digital architecture firm. Keep answers concise.',
      messages: coreMessages,
    });

    // Directly return the textStream as the response body
    return new Response(result.textStream, {
      headers: {
        'Content-Type': 'text/event-stream', // required by useChat()
        'Cache-Control': 'no-store',         // prevent caching
      },
    });
  } catch (error) {
    console.error('❌ BACKEND CRASH:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to process request' }),
      { status: 500 }
    );
  }
}