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
var student2 = {
    id: 2004,
    name: "Ivan Delumen",
    role: TechRoles.NETWORK_ENGINEER,
    programmingLanguages: ["Python", "C#", "Ruby"],
    print: function () {
        var _a;
        console.log("\n        ID: ".concat(this.id, "\n        Name: ").concat(this.name, "\n        Role: ").concat(this.role, "\n        Languages: ").concat((_a = this.programmingLanguages) === null || _a === void 0 ? void 0 : _a.join(", "), "\n        "));
    }
};
student1.print();
student2.print();
