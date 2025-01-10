"use strict";
let a = "hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
console.log(a, b, c, d, e);
const addOrConcate = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let result = addOrConcate(80, 990, "concate");
let result2 = addOrConcate(80, 990, "concate");
console.log(result2, result);
let value = 10;
console.log(typeof value);
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const asdf = document.getElementById("#img");
let date = new Date();
console.log(date.getSeconds());
let dateToNumber = date.getMilliseconds();
console.log(dateToNumber);
let stringToNumber = date.getMilliseconds().toString();
console.log(dateToNumber);
