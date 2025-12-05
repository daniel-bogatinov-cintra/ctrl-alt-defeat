export interface Lane {
    id: string;
    title: string;
    order: number;
    type?: string; // "meme" | "action"
}
export interface Participant {
    id: string;
    displayName: string;
    avatarColor: string;
    _count?: { reactions: number };
}

export interface Retro {
    id: string;
    shareId: string;
    title: string;
    teamName?: string;
    maxVotesPerParticipant: number;
    timerExpiresAt?: string; // ISO date string
    lanes: Lane[];
    memes: MemeEntry[];
    participants: Participant[];
}

export interface MemeEntry {
    id: string;
    topText?: string;
    bottomText?: string;
    generatedImageUrl?: string;
    textContent?: string;
    description?: string;
    participantId: string;
    participant?: Participant;
    laneId: string;
    reactions: string; // JSON
}
