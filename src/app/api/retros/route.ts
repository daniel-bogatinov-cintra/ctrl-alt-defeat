import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    // Return list of recent retros (limit 10 for landing page)
    try {
        const retros = await prisma.retro.findMany({
            take: 10,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                shareId: true,
                title: true,
                teamName: true,
                createdAt: true,
                _count: {
                    select: { participants: true, memes: true }
                }
            }
        });
        return NextResponse.json(retros);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch retros' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, teamName, maxVotes } = body;

        if (!title) {
            return NextResponse.json({ error: 'Title is required' }, { status: 400 });
        }

        // Generate a simple shareId (8 chars)
        const shareId = crypto.randomUUID().split('-')[0];

        const retro = await prisma.retro.create({
            data: {
                title,
                teamName,
                maxVotesPerParticipant: maxVotes ? Number(maxVotes) : 3,
                shareId,
                lanes: {
                    create: [
                        { title: 'What went well', order: 0 },
                        { title: 'What didn\'t go well', order: 1 },
                        { title: 'Ideas / Experiments', order: 2 },
                        { title: 'Kudos / Shoutouts', order: 3 },
                    ]
                }
            }
        });

        return NextResponse.json(retro);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create retro' }, { status: 500 });
    }
}
