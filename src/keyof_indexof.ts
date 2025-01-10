// Index Signatures

interface T {
  a: number;
  b: number;
  c: number;
}
// let prop: string = "a";
// console.log(Y[prop]) throws error of any implicit type

interface TT {
  readonly [index: string]: number;
}

interface TTT {
  [index: string]: number;
  a: number;
  b: number;
  c: number;
}

const Y: TTT = {
  a: 30,
  b: 10,
  c: 550,
};

// console.log(Y["a"], Y.b, Y.c);

const something = (Y: TT): number => {
  let total: number = 0;
  for (const y in Y) {
    total += Y[y];
  }
  return total;
};
// console.log(something(Y));
Y["d"] = 40;

interface Student {
  // [key: string]: string | number | boolean;
  name: string;
  age: number;
  id: number;
  present: boolean;
}

const student: Student = {
  name: "smit",
  age: 20,
  id: 220410116089,
  present: true,
};

for (const key in student) {
  console.log(student[key as keyof Student]);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const printStudentKey = (student: Student, key: keyof typeof student): void => {
  console.log(student[key], key);
};
printStudentKey(student, "name");

// interface Income{
//   [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";
type Income = Record<Streams, number>;

const monthlyIncomes: Income = {
  salary: 500,
  bonus: 500,
  sidehustle: 788,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Income]);
}

console.log("my name is smit");
