/*
class User {
  name: string;
  age: number;
  private creditCard: number = 1234;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  asdf() {
    return this.creditCard;
  }
}

const smit = new User("smit", 19);
smit.name = "smit patel";

interface TakePhoto {
  camera: string;
  filter: string;
  buffer: number;
}

interface story {
  createStory(name: string): string;
}

class Instagram implements TakePhoto, story {
  constructor(
    public camera: string,
    public filter: string,
    public buffer: number
  ) {}
  createStory(name: "smit"): string {
    return `${name}`;
  }
}

class animal {
  public asdf: string = "smit";
  constructor(name: string, age: number, asdf: number) {}
}

function smitpatel(val: boolean | number): boolean | number {
  return val;
}

function smitpatell<Type>(val: Type): Type {
  return val;
}
smitpatell("smit");

function smitsmit<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
}

// Generics for normal functions
function getProducts<T>(products: T[]): T[] {
  return products;
}
getProducts(["sadf", "dsf"]);

// Generics for arrow functions
const getMoreProducts = <T>(products: T[]): T => {
  return products[2];
};
let productsArrNumber = getMoreProducts([1, 4, 5, 6, 7]);
let productsArrString = getMoreProducts(["324", "2343"]);

interface special {
  case: string;
}
function getProperty<T, U extends special>(valone: T, valtwo: U): object {
  return {
    valone,
    valtwo,
  };
}

let nam = getProperty(1, { case: "smit" });

class pushItem<T> {
  private cart: T[] = [];
  
  constructor(products: T) {
    this.pushToCart(products);
  }
  pushToCart(product: T) {
    this.cart.push(product);
  }
  get cartArr() {
    return this.cart;
  }
}

let stringItem = new pushItem(123);
stringItem.cartArr;

function detectTypes(val: number | string | number[]) {
  if (typeof val === "number") return val.toExponential();
  
  // return val.includes("s");
}
interface Admin {
  name: string;
  isAdmin: boolean;
}
interface User {
  name: string;
}
function isAdmin(account: Admin | User) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

let wot = isAdmin({ name: "smit" });
let wot2 = isAdmin({ name: "smit", isAdmin: true });

interface Circle {
  kind: "circle"; // can be named into anything!!
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Rectangle;

function aNewShape(shape: Shape): string {
  if (shape.kind === "circle") return "shape is a circle";
  return "shape is a rectangle";
}
let circle = aNewShape({ kind: "circle", radius: 10 });

function anotherOne(shape: Shape): string {
  switch (shape.kind) {
    case "circle":
      return "";
    case "rectangle":
      return "";
  }
}

type Guitarist = {
  name?: string;
  age: number;
  albums: (string | number)[];
};
let smit: Guitarist = {
  // name: "smit",
  age: 19,
  albums: [34, 5, "asfd"],
};

function greetGuitarist(guitarist: Guitarist) {
  if (guitarist.name) return guitarist.name.toLowerCase();
  return "Hello please specify your name!!";
}

*/

/*
interface Person {
  name: string;
  age: number;
}
let personal: Person = {
  name: "smit",
  age: 14,
};
console.log(personal);

let a: number = 4;
let b: string = "4";

console.log(a / +b);

function add(a: number, b: number) {
  return a + b;
}

let addNumbers = (a: number, b: number): number | string => {
  return a + b;
};

let result = add(32, 4);
let answer = addNumbers(123, 4);

let regex: RegExp = /\w+/g;
let aRandomArray: (string | number | boolean)[] = [12, "smit", false];

aRandomArray.push(14);
aRandomArray.push(true);
aRandomArray.push("1243");
console.log(aRandomArray);

aRandomArray.shift();
console.log(aRandomArray);

aRandomArray.pop();
console.log(aRandomArray);

let test = [];
let bands: string[] = [];

let Tuple: [string, number, boolean] = ["smit", 20, true];
let mixed = ["smit", 1, false];
*/
type albumsType = (string | number)[];
type musician = {
  name: string;
  age?: number;
  albums: albumsType;
};

let band = (musician: musician): string => {
  return `Hello, band named ${musician.name} with albums "${musician.albums}"`;
};
const aNewBand = band({ name: "smit", albums: ["album1", 404] });
console.log(aNewBand);

let add = (a: number, b: number, c?: number): void => {
  if (typeof c !== "undefined") console.log(a + b + c);
  console.log(a + b);
};

add(13, 53, 67);
const total = (...args: number[]) => {
  return args.reduce((acc, sum) => acc + sum, 0);
};
console.log(total(23, 1, 4325, 436, 7, 2134, 24, 54, 5, 34, 431, 543, 5));

const errorMsg = (err: string): never => {
  throw new Error(err);
};

const loop = () => {
  let i: number = 1;
  while (true) {
    i++;
    console.log(i);
    if (i >= 100) break;
  }
};
// loop();

const seeWotItIs = (val: string | number): string => {
  if (typeof val === "string") return "string";
  if (typeof val === "number") return "number";
  return errorMsg("this never happens");
};
console.log(seeWotItIs(2134), seeWotItIs("smit patel"));

const wotType = (val: any): boolean => {
  return typeof val === "number" ? true : false;
};
console.log(wotType(32456));
