import { NextResponse } from 'next/server';
import { MemegenClient } from '@/lib/memegen';

export async function GET() {
    const templates = await MemegenClient.listTemplates();
    // Return top 100 or all? Memegen isn't too huge.
    // Ideally, sort or filter popular ones if possible, but API returns list.
    return NextResponse.json(templates);
}
