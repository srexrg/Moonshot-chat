import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';
export const runtime = 'edge';
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();
        
        const response = await genAI
            .getGenerativeModel({ model: 'gemini-pro' })
            .generateContentStream({
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
            });

        const stream = GoogleGenerativeAIStream(response);

        return new StreamingTextResponse(stream);

    } catch (error) {
        console.error('Error generating stream:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
