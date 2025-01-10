"use strict";
const g = (args) => args;
const checker = (args) => {
    if (!Array.isArray(args) && typeof args === "object" && args !== null)
        return { args, isValid: true };
    return { args, isValid: false };
};
console.log(checker({
    name: "smit",
    age: 20,
}));
const getUsers = (users, key) => {
    return users.map((user) => user[key]);
};
const objs = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
    },
];
console.log(getUsers(objs, "name"));
class dfsj {
    constructor(value) {
        this.data = value;
    }
    get resource() {
        return this.data;
    }
    set resource(value) {
        this.data = value;
    }
}
const fdsa = new dfsj({
    name: "smit",
    age: 20,
    // cars: ["bmw", "audi"],
});
console.log(fdsa.resource);
fdsa.resource = { name: "Smit", age: 20 };
console.log(fdsa.resource);
const hjkl = new dfsj("smit");
console.log(hjkl);
