const MEMEGEN_API = process.env.MEMEGEN_BASE_URL || process.env.NEXT_PUBLIC_MEMEGEN_BASE_URL || 'https://api.memegen.link';

export interface Template {
    id: string;
    name: string;
    lines: number;
    blank: string;
    example: {
        text: string[];
        url: string;
    };
}

export class MemegenClient {
    static async listTemplates(): Promise<Template[]> {
        try {
            // Use next: { revalidate: 3600 } to cache for 1 hour
            const res = await fetch(`${MEMEGEN_API}/templates/`, {
                next: { revalidate: 3600 }
            });
            if (!res.ok) {
                console.error(`Memegen fetch failed: ${res.status}`);
                return [];
            }
            const templates = await res.json() as Template[];

            // Deduplicate by ID
            const idMap = new Map(templates.map(item => [item.id, item]));

            // Deduplicate by Name (some templates have different IDs but same name)
            const uniqueTemplates: Template[] = [];
            const seenNames = new Set<string>();

            for (const template of idMap.values()) {
                const normalizedName = template.name.trim().toLowerCase();
                if (!seenNames.has(normalizedName)) {
                    seenNames.add(normalizedName);
                    uniqueTemplates.push(template);
                }
            }

            return uniqueTemplates.sort((a, b) => a.name.localeCompare(b.name));
        } catch (e) {
            console.error("Memegen Error", e);
            return [];
        }
    }

    static buildMemeUrl(templateId: string, lines: string[]): string {
        const escapedLines = lines.map(line => MemegenClient.escapeText(line));
        // Join with slash
        const path = escapedLines.length > 0 ? escapedLines.join('/') : '_';
        return `${MEMEGEN_API}/images/${templateId}/${path}.png`;
    }

    private static escapeText(text: string): string {
        if (!text) return '_';
        return text
            .trim()
            .replace(/_/g, '__')
            .replace(/-/g, '--')
            .replace(/\s/g, '_')
            .replace(/\?/g, '~q')
            .replace(/&/g, '~a')
            .replace(/%/g, '~p')
            .replace(/#/g, '~h')
            .replace(/\//g, '~s')
            .replace(/\\/g, '~b')
            .replace(/</g, '~l')
            .replace(/>/g, '~g')
            .replace(/"/g, "''");
    }
}
