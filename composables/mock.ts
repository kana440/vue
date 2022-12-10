export const useMock = () => {
    const project:Project = {
        id: "1",
        name: "案件A",
        client: "田中商事株式会社",
        sales: 3000000,
        hours: 80,
        startDate: new Date("2022-9-1"),
        endDate: new Date("2022-12-31"),
    }
    return {
        project
    }
}