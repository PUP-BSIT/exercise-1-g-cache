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
    print: () => void;               
};

type Person = {
    f_name: string;
    l_name: string;
    age: number;
    role: TechRoles;
    print(): void;
}

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

const person1: Person = {
    f_name: "Ivan",
    l_name: "Delumen",
    age: 20,
    role: TechRoles.NETWORK_ENGINEER,
    print(): void {
        console.log(`
            First Name: ${this.f_name} 
            Last Name ${this.l_name} 
            Age ${this.age} 
            Role ${TechRoles[this.role]}`);
    }
}

student1.print();
person1.print();