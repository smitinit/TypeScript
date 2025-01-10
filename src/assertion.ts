type One = string;
type Two = string | number;

type Three = "hello";

let a: One = "hello";
let b = a as Two;
let c = a as Three;

let d = <One>"world";
let e = <string | number>"world";

console.log(a, b, c, d, e);

const addOrConcate = (
  a: number,
  b: number,
  c: "add" | "concate"
): string | number => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let result: string = addOrConcate(80, 990, "concate") as string;

let result2: number = addOrConcate(80, 990, "concate") as number;
console.log(result2, result);

let value: string = 10 as unknown as string;
console.log(typeof value);

const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img")!;
const asdf = <HTMLImageElement>document.getElementById("#img")!;

let date: Date = new Date();
console.log(date.getSeconds());

let dateToNumber: number = date.getMilliseconds();
console.log(dateToNumber);

let stringToNumber: string = date.getMilliseconds().toString();
console.log(dateToNumber);
