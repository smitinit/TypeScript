interface Assignment {
  studentId: string;
  grade: string;
  title: string;
  submitted?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  // propsToUpdate: Assignment
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};
const assign1: Assignment = {
  studentId: "asfd22",
  title: "The theory of relativity",
  grade: "A",
};

console.log(updateAssignment(assign1, { grade: "A+" }));
const assignedGrade: Assignment = updateAssignment(assign1, { grade: "A+" });

const assign2 = (assign: Required<Assignment>): Assignment => {
  return assign;
};

console.log(
  assign2({
    studentId: "asfd22",
    title: "The theory of relativity",
    grade: "A",
    submitted: true,
  })
);
console.log(assign2({ ...assign1, submitted: true }));

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  blue: "FF0000",
  purple: "FF0000",
};

interface uuid {
  id: number;
  identity: string;
}
type Grades = "A" | "B" | "C" | "D" | null | undefined;

type AssignResult = Pick<uuid, "id">;
type AssignOmit = Omit<uuid, "identity">;

type aandb = Extract<Grades, "A" | "B">;
type notaandb = Exclude<Grades, "A" | "B">;

type nonnullable = NonNullable<Grades>;

//library function kato koi unknown function che jeni tane return type nai khabar!!
const unknownFunction = (name: string, age: number) => {
  return { name, age };
};

type unknownFunctionType = ReturnType<typeof unknownFunction>;

const objjjj: unknownFunctionType = {
  name: "smit",
  age: 20,
};

// from parameters
type fromParameter = Parameters<typeof unknownFunction>;
const somethingOfTuple: fromParameter = ["smit", 20];

const arr: (number | string)[] = ["smit", 20];
console.log(arr);

console.log(...arr);

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchData = async (api: string): Promise<Posts[]> => {
  const data = await fetch(api)
    .then((res) => res.json())
    .catch((err) => console.log(err.message instanceof Error));
  return data;
};
type FetchUserReturnType = Awaited<ReturnType<typeof fetchData>>;

fetchData("https://jsonplaceholder.typicode.com/posts").then((data) =>
  console.log(data)
);

const response = fetchData("https://jsonplaceholder.typicode.com/posts");
