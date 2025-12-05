export interface Lane {
    id: string;
    title: string;
    order: number;
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
    lanes: Lane[];
    memes: MemeEntry[];
    participants: Participant[];
}

export interface MemeEntry {
    id: string;
    topText: string;
    bottomText: string;
    generatedImageUrl: string;
    participantId: string;
    participant?: Participant;
    laneId: string;
    reactions: string; // JSON
}
