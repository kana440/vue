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
    const projects:Array<Project> = [{
        id: "1",
        name: "案件A",
        client: "田中商事株式会社",
        sales: 3000000,
        hours: 80,
        startDate: new Date("2022-9-1"),
        endDate: new Date("2022-12-31"),
    },{
        id: "2",
        name: "案件B",
        client: "佐藤商事株式会社",
        sales: 1000000,
        hours: 10,
        startDate: new Date("2022-12-1"),
        endDate: new Date("2022-12-31"),

    }
    ]
    const projectsMass:Array<Project> = [{
        id: "2",
        name: "案件B",
        client: "佐藤商事株式会社",
        sales: 1000000,
        hours: 10,
        startDate: new Date("2022-12-1"),
        endDate: new Date("2022-12-31"),

    }]
    for(let i=0; i<100; i++){
        projectsMass.push(project)
        projectsMass.push(project)
    }
    return {
        project,
        projects,
        projectsMass,
    }
}