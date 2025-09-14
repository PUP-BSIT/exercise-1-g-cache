enum TechRoles {
    SOFTWARE_DEVELOPER = "Software Developer",
    CLOUD_ENGINEER = "Cloud Engineer",
    WEB_DEVELOPER = "Web Developer",
    DATA_ANALYST = "Data Analyst",
    NETWORK_ENGINEER = "Network Engineer"
}

type Student = {
    id: number;
    name: string;
    role: TechRoles;               
    programmingLanguages?: string[]; 
    print: () => void;               
};

const student1: Student = {
    id: 4,
    name: "Hannah Lorainne",
    role: TechRoles.DATA_ANALYST,
    programmingLanguages: ["C++", "COBOL"],
    print: (): void => {
        console.log(`
        ID: ${student1.id}
        Name: ${student1.name}
        Role: ${TechRoles[student1.role]}
        Languages: ${student1.programmingLanguages?.join(", ")}
        `);
    },
};

student1.print();