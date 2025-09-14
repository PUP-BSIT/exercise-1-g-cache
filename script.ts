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