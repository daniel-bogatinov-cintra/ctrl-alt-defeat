import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params; // memeId
        const body = await request.json();
        const { reaction } = body;

        if (!reaction) return NextResponse.json({ error: 'Reaction required' }, { status: 400 });

        const meme = await prisma.memeEntry.findUnique({ where: { id } });
        if (!meme) {
            return NextResponse.json({ error: 'Meme not found' }, { status: 404 });
        }

        const reactions = JSON.parse(meme.reactions || '{}');
        // Simple toggle logic? Or just increment? 
        // Prompt says "add or toggle". 
        // If I don't track *who* reacted, I can only increment. 
        // "quick one-click reactions ... implement a small API ... to add or toggle"
        // Without user ID tracking, toggle is impossible. I'll just increment.

        reactions[reaction] = (reactions[reaction] || 0) + 1;

        const updated = await prisma.memeEntry.update({
            where: { id },
            data: { reactions: JSON.stringify(reactions) }
        });

        return NextResponse.json(updated);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
