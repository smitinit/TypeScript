"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, 
// propsToUpdate: Assignment
propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "asfd22",
    title: "The theory of relativity",
    grade: "A",
};
console.log(updateAssignment(assign1, { grade: "A+" }));
const assignedGrade = updateAssignment(assign1, { grade: "A+" });
const assign2 = (assign) => {
    return assign;
};
console.log(assign2({
    studentId: "asfd22",
    title: "The theory of relativity",
    grade: "A",
    submitted: true,
}));
console.log(assign2(Object.assign(Object.assign({}, assign1), { submitted: true })));
const hexColorMap = {
    red: "FF0000",
    blue: "FF0000",
    purple: "FF0000",
};
//library function kato koi unknown function che jeni tane return type nai khabar!!
const unknownFunction = (name, age) => {
    return { name, age };
};
const objjjj = {
    name: "smit",
    age: 20,
};
const somethingOfTuple = ["smit", 20];
const arr = ["smit", 20];
console.log(arr);
console.log(...arr);
const fetchData = (api) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(api)
        .then((res) => res.json())
        .catch((err) => console.log(err.message instanceof Error));
    return data;
});
fetchData("https://jsonplaceholder.typicode.com/posts").then((data) => console.log(data));
const response = fetchData("https://jsonplaceholder.typicode.com/posts");
