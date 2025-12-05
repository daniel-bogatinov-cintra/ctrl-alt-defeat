import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params; // memeId
        const body = await request.json();
        const { reaction, participantId } = body;

        if (!reaction) return NextResponse.json({ error: 'Reaction required' }, { status: 400 });
        if (!participantId) return NextResponse.json({ error: 'Participant ID required' }, { status: 400 });

        const meme = await prisma.memeEntry.findUnique({
            where: { id },
            include: { retro: true }
        });

        if (!meme) {
            return NextResponse.json({ error: 'Meme not found' }, { status: 404 });
        }

        // Check vote limit
        const totalVotes = await prisma.reaction.count({
            where: {
                participantId,
                meme: { retroId: meme.retroId }
            }
        });

        if (totalVotes >= meme.retro.maxVotesPerParticipant) {
            return NextResponse.json({ error: `Vote limit of ${meme.retro.maxVotesPerParticipant} reached` }, { status: 403 });
        }

        // Always create a new reaction (allow multiple votes with same emoji)
        await prisma.reaction.create({
            data: {
                memeId: id,
                participantId,
                emoji: reaction
            }
        });

        // Update reactions count
        const reactionsMap = JSON.parse(meme.reactions || '{}');
        reactionsMap[reaction] = (reactionsMap[reaction] || 0) + 1;

        const updated = await prisma.memeEntry.update({
            where: { id },
            data: { reactions: JSON.stringify(reactionsMap) }
        });

        return NextResponse.json(updated);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
