import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { displayName, avatarColor } = body;

        if (!displayName) {
            return NextResponse.json({ error: 'Display Name is required' }, { status: 400 });
        }

        const retro = await prisma.retro.findFirst({
            where: { OR: [{ shareId: id }, { id: id }] }
        });

        if (!retro) {
            return NextResponse.json({ error: 'Retro not found' }, { status: 404 });
        }

        const participant = await prisma.participant.create({
            data: {
                retroId: retro.id,
                displayName,
                avatarColor: avatarColor || '#' + (Math.random() * 0xFFFFFF << 0).toString(16) // Random color if null
            }
        });

        return NextResponse.json(participant);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to join retro' }, { status: 500 });
    }
}
