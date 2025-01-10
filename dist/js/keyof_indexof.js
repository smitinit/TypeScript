"use strict";
// Index Signatures
const Y = {
    a: 30,
    b: 10,
    c: 550,
};
// console.log(Y["a"], Y.b, Y.c);
const something = (Y) => {
    let total = 0;
    for (const y in Y) {
        total += Y[y];
    }
    return total;
};
// console.log(something(Y));
Y["d"] = 40;
const student = {
    name: "smit",
    age: 20,
    id: 220410116089,
    present: true,
};
for (const key in student) {
    console.log(student[key]);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const printStudentKey = (student, key) => {
    console.log(student[key], key);
};
printStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 500,
    sidehustle: 788,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
