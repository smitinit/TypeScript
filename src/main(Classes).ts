class Animal {
  // secondLang!: string; some assertion type shit

  constructor(
    protected name: string,
    public readonly age: number,
    private gender: string,
    public fly: boolean,
    public swim: boolean
  ) {
    this.name = name;
    this.swim = swim;
    this.gender = gender;
    this.age = age;
    this.fly = fly;
  }
  public giveInfo(): string {
    return `This animal which can ${
      this.fly === true ? "fly" : "swim"
    } has a name '${this.name[0].toUpperCase() + this.name.slice(1)}' and ${
      this.gender === "male" ? "his" : "her"
    } age is ${this.age}.`;
  }
}

const parrot = new Animal("jony", 20, "male", true, false);
console.log(parrot.giveInfo());

class Reptiles extends Animal {
  constructor(
    public category: string,
    name: string,
    age: number,
    gender: string,
    fly: boolean,
    swim: boolean
  ) {
    super(name, age, gender, fly, swim);
    this.category = category;
  }
}

class Render {
  static count: number = 0;
  constructor(
    public html: string,
    private element: HTMLElement,
    private id: number
  ) {
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
const DOM = new Render(
  "smit",
  document.querySelector("span") as HTMLElement,
  1
);
const DOM2 = new Render(
  "patel",
  document.querySelector("div") as HTMLElement,
  2
);
DOM.renderText();
DOM2.renderText();

console.log(Render.count);

class getterAndSetter {
  public a: number[];
  constructor() {
    this.a = [1, 2, 3, 4, 5, 6];
  }
  public get arr(): number[] {
    return this.a;
  }
  public set arr(val: number[]) {
    if (Array.isArray(val) && val.every((v) => typeof v === "number"))
      this.a = val;
    else throw new Error("a string was found in numbers array");
  }
}
const instance = new getterAndSetter();
console.log(instance.arr);
instance.arr = [0, 0, 0, 0];
console.log(instance.arr);
instance.arr = [...instance.arr, 1, 3, 5];
console.log(instance.arr);
