export interface Lane {
    id: string;
    title: string;
    order: number;
}
export interface Participant {
    id: string;
    displayName: string;
    avatarColor: string;
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
