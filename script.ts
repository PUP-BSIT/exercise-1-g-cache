enum TechRoles {
    SOFTWARE_DEVELOPER = "Software Developer",
    CLOUD_ENGINEER = "Cloud Engineer",
    WEB_DEVELOPER = "Web Developer",
    DATA_ANALYST = "Data Analyst",
    NETWORK_ENGINEER = "Network Engineer"
};

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
        Role: ${this.role}
        Languages: ${this.programmingLanguages?.join(", ")}
        `);
    },
};

const student2: Student = {
    id: 2004,
    name: "Ivan Delumen",
    role: TechRoles.NETWORK_ENGINEER,
    programmingLanguages: ["Python", "C#", "Ruby"],
    print(): void {
        console.log(`
        ID: ${this.id}
        Name: ${this.name}
        Role: ${this.role}
        Languages: ${this.programmingLanguages?.join(", ")}
        `);
    }
};

const student3: Student = {
    id: 495,
    name: "Daniel",
    role: TechRoles.WEB_DEVELOPER,
    programmingLanguages: ["C++", "Java", "PHP", "Dart", "Python"],
    print(): void {
    console.log(`
        ID: ${this.id}
        Name: ${this.name}
        Role: ${this.role}
        Languages: ${this.programmingLanguages?.join(", ")}
        `);
    }
};

student1.print();
student2.print();
student3.print();