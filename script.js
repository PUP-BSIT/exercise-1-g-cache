var TechRoles;
(function (TechRoles) {
    TechRoles["SOFTWARE_DEVELOPER"] = "Software Developer";
    TechRoles["CLOUD_ENGINEER"] = "Cloud Engineer";
    TechRoles["WEB_DEVELOPER"] = "Web Developer";
    TechRoles["DATA_ANALYST"] = "Data Analyst";
    TechRoles["NETWORK_ENGINEER"] = "Network Engineer";
})(TechRoles || (TechRoles = {}));
var student1 = {
    id: 4,
    name: "Hannah Lorainne",
    role: TechRoles.DATA_ANALYST,
    programmingLanguages: ["C++", "COBOL"],
    print: function () {
        var _a;
        console.log("\n        ID: ".concat(this.id, "\n        Name: ").concat(this.name, "\n        Role: ").concat(this.role, "\n        Languages: ").concat((_a = this.programmingLanguages) === null || _a === void 0 ? void 0 : _a.join(", "), "\n        "));
    },
};
var person1 = {
    f_name: "Ivan",
    l_name: "Delumen",
    age: 20,
    role: TechRoles.NETWORK_ENGINEER,
    print: function () {
        console.log("\n            First Name: ".concat(this.f_name, " \n            Last Name ").concat(this.l_name, " \n            Age ").concat(this.age, " \n            Role ").concat(this.role));
    }
};
student1.print();
person1.print();
