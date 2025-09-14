enum TechRoles {
    SOFTWARE_ENGINEER,
    CLOUD_ENGINEER,
    WEB_DEVELOPER,
    DATA_ANALYST,
    NETWORK_ENGINEER
}

type Student = {
    id: number;
    name: string;
    role: TechRoles;               
    programmingLanguages?: string[]; 
    print (): void;               
};

const student1: Student = {
    id: 4,
    name: "Hannah Lorainne",
    role: TechRoles.DATA_ANALYST,
    programmingLanguages: ["C++", "COBOL"],
    print (): void {
        console.log(`
        ID: ${this.id}
        Name: ${this.name}
        Role: ${TechRoles[this.role]}
        Languages: ${this.programmingLanguages?.join(", ")}
        `);
    },
};

student1.print();