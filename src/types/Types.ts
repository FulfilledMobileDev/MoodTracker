export type MoodOptions = {
    emoji: string;
    description: string;
}

export type MoodOptionsWithTimestamp = {
    mood: MoodOptions;
    timeStamp: number;
}