interface Event {
    id: string,
    summary?: string,
    description?: string,
    startTime: Date,
    endTime: Date,
    isAllDayEvent: boolean,
    colorId?: string,
    duration: number,
}