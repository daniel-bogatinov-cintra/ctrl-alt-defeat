import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params; // shareId
        const body = await request.json();
        const { action, durationMinutes } = body;

        const retro = await prisma.retro.findFirst({ where: { shareId: id } });
        if (!retro) return NextResponse.json({ error: 'Retro not found' }, { status: 404 });

        let timerExpiresAt: Date | null = null;

        if (action === 'start') {
            if (!durationMinutes) {
                return NextResponse.json({ error: 'Duration required' }, { status: 400 });
            }
            // Set expiration
            timerExpiresAt = new Date(Date.now() + durationMinutes * 60 * 1000);
        } else if (action === 'reset' || action === 'stop') {
            timerExpiresAt = null;
        } else {
            return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
        }

        const updated = await prisma.retro.update({
            where: { id: retro.id },
            data: { timerExpiresAt }
        });

        return NextResponse.json(updated);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
