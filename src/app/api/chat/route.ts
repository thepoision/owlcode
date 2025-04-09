import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Get the last user message
    const lastMessage = messages[messages.length - 1];
    
    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create a context-aware prompt
    const prompt = `You are a helpful Bangkok travel assistant. Provide accurate and concise travel advice about Bangkok, Thailand. 
    Consider the following context when responding:
    - Focus on practical, up-to-date information
    - Include specific locations, prices, and tips when relevant
    - Be friendly and professional
    - Keep responses concise and to the point
    
    User's question: ${lastMessage.content}`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: 'assistant', content: text });
  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
} 