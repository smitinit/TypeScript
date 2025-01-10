"use strict";
class Animal {
    // secondLang!: string; some assertion type shit
    constructor(name, age, gender, fly, swim) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.fly = fly;
        this.swim = swim;
        this.name = name;
        this.swim = swim;
        this.gender = gender;
        this.age = age;
        this.fly = fly;
    }
    giveInfo() {
        return `This animal which can ${this.fly === true ? "fly" : "swim"} has a name '${this.name[0].toUpperCase() + this.name.slice(1)}' and ${this.gender === "male" ? "his" : "her"} age is ${this.age}.`;
    }
}
const parrot = new Animal("jony", 20, "male", true, false);
console.log(parrot.giveInfo());
class Reptiles extends Animal {
    constructor(category, name, age, gender, fly, swim) {
        super(name, age, gender, fly, swim);
        this.category = category;
        this.category = category;
    }
}
class Render {
    constructor(html, element, id) {
        this.html = html;
        this.element = element;
        this.id = id;
        this.html = html;
        this.element = element;
        this.id = id;
        ++Render.count;
    }
    renderText() {
        this.element.innerText = this.html;
    }
    static getCount() {
        return Render.count;
    }
}
Render.count = 0;
const DOM = new Render("smit", document.querySelector("span"), 1);
const DOM2 = new Render("patel", document.querySelector("div"), 2);
DOM.renderText();
DOM2.renderText();
console.log(Render.count);
class getterAndSetter {
    constructor() {
        this.a = [1, 2, 3, 4, 5, 6];
    }
    get arr() {
        return this.a;
    }
    set arr(val) {
        if (Array.isArray(val) && val.every((v) => typeof v === "number"))
            this.a = val;
        else
            throw new Error("a string was found in numbers array");
    }
}
const instance = new getterAndSetter();
console.log(instance.arr);
instance.arr = [0, 0, 0, 0];
console.log(instance.arr);
instance.arr = [...instance.arr, 1, 3, 5];
console.log(instance.arr);
