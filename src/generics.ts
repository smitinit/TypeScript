const g = <T>(args: T): T => args;

const checker = <T>(args: T): { args: T; isValid: boolean } => {
  if (!Array.isArray(args) && typeof args === "object" && args !== null)
    return { args, isValid: true };
  return { args, isValid: false };
};

console.log(
  checker({
    name: "smit",
    age: 20,
  })
);

const getUsers = <T, k extends keyof T>(users: T[], key: k): T[k][] => {
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

class dfsj<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }
  get resource(): T {
    return this.data;
  }
  set resource(value: T) {
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
