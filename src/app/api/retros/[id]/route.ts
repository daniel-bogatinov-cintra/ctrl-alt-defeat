import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const retro = await prisma.retro.findFirst({
            where: {
                OR: [
                    { shareId: id },
                    { id: id }
                ]
            },
            include: {
                lanes: {
                    orderBy: { order: 'asc' }
                },
                participants: true,
                memes: {
                    include: {
                        participant: true
                    },
                }
            }
        });

        if (!retro) {
            return NextResponse.json({ error: 'Retro not found' }, { status: 404 });
        }

        return NextResponse.json(retro);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
