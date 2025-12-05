import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { MemegenClient } from '@/lib/memegen';

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { templateId, lines, participantId, laneId, textContent, description } = body;

        if (!participantId || (!templateId && !textContent)) {
            return NextResponse.json({ error: 'Missing required fields (participantId and either templateId or textContent)' }, { status: 400 });
        }

        // Resolve retro
        const retro = await prisma.retro.findFirst({
            where: { OR: [{ shareId: id }, { id: id }] }
        });

        if (!retro) {
            return NextResponse.json({ error: 'Retro not found' }, { status: 404 });
        }

        // Generate URL
        // lines defaults to empty array
        // Generate URL only if template is present
        let generatedImageUrl = '';
        const imageLines = Array.isArray(lines) ? lines : [];

        if (templateId) {
            generatedImageUrl = MemegenClient.buildMemeUrl(templateId, imageLines);
        }

        const meme = await prisma.memeEntry.create({
            data: {
                retroId: retro.id,
                participantId,
                laneId, // Optional, can be null
                templateId: templateId || null,
                topText: imageLines[0] || '',
                bottomText: imageLines[1] || '',
                textContent: textContent || null,
                description: description || null,
                generatedImageUrl: generatedImageUrl || null,
                reactions: '{}',
            },
            include: {
                participant: true // Return with participant for immediate UI update
            }
        });

        return NextResponse.json(meme);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
