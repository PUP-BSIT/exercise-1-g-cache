var TechRoles;
(function (TechRoles) {
    TechRoles[TechRoles["SOFTWARE_ENGINEER"] = 0] = "SOFTWARE_ENGINEER";
    TechRoles[TechRoles["CLOUD_ENGINEER"] = 1] = "CLOUD_ENGINEER";
    TechRoles[TechRoles["WEB_DEVELOPER"] = 2] = "WEB_DEVELOPER";
    TechRoles[TechRoles["DATA_ANALYST"] = 3] = "DATA_ANALYST";
    TechRoles[TechRoles["NETWORK_ENGINEER"] = 4] = "NETWORK_ENGINEER";
})(TechRoles || (TechRoles = {}));
var student1 = {
    id: 4,
    name: "Hannah Lorainne",
    role: TechRoles.DATA_ANALYST,
    programmingLanguages: ["C++", "COBOL"],
    print: function () {
        var _a;
        console.log("\n        ID: ".concat(student1.id, "\n        Name: ").concat(student1.name, "\n        Role: ").concat(TechRoles[student1.role], "\n        Languages: ").concat((_a = student1.programmingLanguages) === null || _a === void 0 ? void 0 : _a.join(", "), "\n        "));
    },
};
var person1 = {
    f_name: "Ivan",
    l_name: "Delumen",
    age: 20,
    role: TechRoles.NETWORK_ENGINEER,
    print: function () {
        console.log("\n            First Name: ".concat(this.f_name, " \n            Last Name ").concat(this.l_name, " \n            Age ").concat(this.age, " \n            Role ").concat(TechRoles[this.role]));
    }
};
student1.print();
person1.print();
