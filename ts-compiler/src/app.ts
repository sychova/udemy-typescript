// function convertNumberToString(number) {
//   if (typeof number !== "number") {
//     console.log("Input a valid number");
//   }
//   return number.toString();
// }

////////////////////////////////////////////////////////

// const user = {
//   name: "John",
//   age: 32,
// };

// let tom: typeof user;

// function printStrings(str: string | string[] | null) {
//   if (str && typeof str === "object") {
//     for (const s of str) {
//       console.log(s);
//     }
//   } else if (typeof str === "string") {
//     console.log(str);
//   } else {
//     console.log("Pass an array of strings or a string as an argument");
//   }
// }

////////////////////////////////////////////////////////

// type Person = {
//   name: string;
//   age?: number;
// };

// function printAge(person: Person) {
//   if (person.age) {
//     console.log(person.age);
//   } else {
//     console.log("Age unknown");
//   }
// }

// printAge({
//   name: "John",
//   age: "age",
// });

////////////////////////////////////////////////////////

// type Circle = {
//   kind: "circle";
//   radius: number;
// };

// type Square = {
//   kind: "square";
//   sideLenght: number;
// };

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     return shape.sideLenght ** 2;
//   }
// }

////////////////////////////////////////////////////////

// type Circle = {
//   kind: "circle";
//   radius: number;
// };

// type Square = {
//   kind: "square";
//   sideLenght: number;
// };

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   if ("radius" in shape) {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     return shape.sideLenght ** 2;
//   }
// }

////////////////////////////////////////////////////////

// abstract class Product {
//   constructor(public name: string, public price: number) {}

//   abstract getPrice(): number;
// }

// class Electronics extends Product {
//   constructor(name: string, price: number, public warranty: number) {
//     super(name, price);
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }

// class Clothing extends Product {
//   constructor(
//     name: string,
//     price: number,
//     public size: string,
//     public material: string
//   ) {
//     super(name, price);
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }

// function displayDetails(product: Product): void {
//   console.log(`Name: ${product.name}`);
//   console.log(`Price ${product.getPrice()}`);

//   if (product instanceof Electronics) {
//     console.log(`Warranty: ${product.warranty}`);
//   } else if (product instanceof Clothing) {
//     console.log(`Size: ${product.size}`);
//     console.log(`Material: ${product.material}`);
//   }
// }

////////////////////////////////////////////////////////

// let firstNameField = document.querySelector("#firstName")! as HTMLInputElement;

// firstNameField.value;

////////////////////////////////////////////////////////

// type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

// type Day = Weekdays | "Sat" | "Sun";

// function nextDatForAWeekDay(weekday: Weekdays): Day {
//   switch (weekday) {
//     case "Mon":
//       return "Tue";
//     case "Tue":
//       return "Wed";
//     case "Wed":
//       return "Thu";
//     case "Thu":
//       return "Fri";
//     case "Fri":
//       return "Sat";
//   }
// }

////////////////////////////////////////////////////////

// let firstName = "Mark";

// console.log(typeof firstName);

// type Cat = {
//   type: "cat";
//   purrs: boolean;
// };

// type Dog = {
//   type: "dog";
//   barks: boolean;
// };

// type Animal = Cat | Dog;

// let cat: Animal = {
//   type: "cat",
//   purrs: true,
// };

// let dog: Animal = {
//   type: "dog",
//   barks: true,
// };

// function animalReaction(animal: Animal) {
//   switch (animal.type) {
//     case "cat":
//       console.log("The animal is a cat and it purrs");
//       break;
//     case "dog":
//       console.log("The animal is a dog and it barks");
//       break;
//   }
// }

// animalReaction(cat);

////////////////////////////////////////////////////////

// type ServiceList = UserDetailsAPIResponse["servicesList"];

// type UserDetailsAPIResponse = {
//   id: number;
//   name: string;
//   servicesList: {
//     count: number;
//     services: {
//       id: number;
//       name: string;
//       price: number;
//     }[];
//   };
// };

// function fetchUserDetails(name: string): Promise<UserDetailsAPIResponse> {
//   return new Promise((res, rej) => {
//     if (name) {
//       res({
//         id: 23,
//         name: "John",
//         servicesList: {
//           count: 2,
//           services: [
//             {
//               id: 1,
//               name: "Stuff",
//               price: 100,
//             },
//             {
//               id: 2,
//               name: "Other stuff",
//               price: 200,
//             },
//           ],
//         },
//       });
//     } else rej(new Error("Pass a valid name"));
//   });
// }

// fetchUserDetails("John")
//   .then((res) => {
//     console.log(res);
//     printServiceList(res.servicesList);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function printServiceList(services: ServiceList): void {
//   console.log(services);
// }

////////////////////////////////////////////////////////

// type Events = {
//   id: number;
//   date: Date;
//   type: "indoor" | "outdoor";
// };

// type unionOfKeysOfEvents = keyof Events;

// type Numeric = {
//   [key: number]: string;
// };

// type NumericKeyOf = keyof Numeric;

// type NumberAndString = {
//   [key: string]: string;
// };

// type NumberAndStringKeyOf = keyof NumberAndString;

////////////////////////////////////////////////////////

// interface WritePermissions {
//   write: true;
// }

// interface ReadPermissions {
//   write: false;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface Admin extends User, WritePermissions {}

// interface Author extends User, WritePermissions {}

// interface Reader extends User, ReadPermissions {}

// type FilterWritable<T> = T extends { write: true } ? true : false;

// type Writable = FilterWritable<Admin>;

////////////////////////////////////////////////////////

// type ArrayElementType<T> = T extends (infer E)[] ? E : T;

// type TypeOne = ArrayElementType<string[]>;

// type TypeTwo = ArrayElementType<number[]>;

// type TypeThree = ArrayElementType<(number | string | boolean)[]>;

// type TypeFour = ArrayElementType<{ name: string }>;

// type TypeFive = ArrayElementType<string>;

////////////////////////////////////////////////////////

// function returnString() {
//   return "string";
// }

// type FunctionReturnType<T> = T extends () => infer R ? R : T;

// type NewType = FunctionReturnType<typeof returnString>;

////////////////////////////////////////////////////////

// function person(name: string, age: number) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// type GetFirstArgumentOfFunction<T> = T extends (
//   first: infer FirstArgument,
//   ...args: any[]
// ) => any
//   ? FirstArgument
//   : never;

// type GetSecondArgumentOfFunction<T> = T extends (
//   first: any,
//   second: infer SecondArgument,
//   ...args: any[]
// ) => any
//   ? SecondArgument
//   : never;

// type FirstArgument = GetFirstArgumentOfFunction<typeof person>;

// type SecondArgument = GetSecondArgumentOfFunction<typeof person>;

////////////////////////////////////////////////////////

// type Properties = "red" | "green" | "blue";

// type RGB = [red: number, green: number, blue: number];

// const color = {
//   red: [255, 0, 0],
//   green: "#00ff00",
//   blue: [255, 255, 0],
// } satisfies Record<Properties, RGB | string>;

// const redComponent = color.red[0];

// const greenValue = color.green.toUpperCase();

// const blueValue = color.blue.toUpperCase();

////////////////////////////////////////////////////////

// function convertNumberToString(number) {
//   if (typeof number !== "number") {
//     console.log("Input a valid number");
//   }
//   return number.toString();
// }

////////////////////////////////////////////////////////

// const user = {
//   name: "John",
//   age: 32,
// };

// let tom: typeof user;

// function printStrings(str: string | string[] | null) {
//   if (str && typeof str === "object") {
//     for (const s of str) {
//       console.log(s);
//     }
//   } else if (str == "string") {
//     console.log(str);
//   } else {
//     console.log("Pass an array of strings or a string as an argument");
//   }
// }

////////////////////////////////////////////////////////

// type Person = {
//   name: string;
//   age?: number;
// };

// function printAge(person: Person) {
//   if (person.age) {
//     console.log(person.age);
//   } else {
//     console.log("Age unknown");
//   }
// }

// const user: Person = {
//   name: "John",
//   age: "John",
// };

// printAge({
//   name: "John",
//   age: "John",
// });

////////////////////////////////////////////////////////

// type Circle = {
//   kind: "circle";
//   radius: number;
// };

// type Square = {
//   kind: "square";
//   sideLength: number;
// };

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     return shape.sideLength ** 2;
//   }
// }

////////////////////////////////////////////////////////

// abstract class Product {
//   constructor(public name: string, public price: number) {}

//   abstract getPrice(): number;
// }

// class Electronics extends Product {
//   constructor(name: string, price: number, public warranty: number) {
//     super(name, price);
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }

// class Clothing extends Product {
//   constructor(
//     name: string,
//     price: number,
//     public size: string,
//     public material: string
//   ) {
//     super(name, price);
//   }

//   getPrice(): number {
//     return this.price;
//   }
// }

// function displayDetails(product: Product): void {
//   console.log(`Name: ${product.name}`);
//   console.log(`Price: ${product.getPrice()}`);

//   if (product instanceof Electronics) {
//     console.log(`Warranty: ${product.warranty}`);
//   }

//   if (product instanceof Clothing) {
//     console.log(`Material: ${product.material}`);
//     console.log(`Size: ${product.size}`);
//   }
// }

////////////////////////////////////////////////////////

// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Done!");
//   }, 1000);
// });

// type AwaitedType = Awaited<typeof promise>;

////////////////////////////////////////////////////////

// type Roles = "author" | "editor" | "researcher";

// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// const article: Article = {
//   title: "Title1",
//   content: "Content",
//   contributors: {
//     author: { name: "John", email: "John", age: 10 },
//     editor: { name: "Mark", email: "Mark", age: 20 },
//     researcher: { name: "Ibrahim", email: "Ibrahim", age: 30 },
//   },
// };

// interface Article {
//   title: string;
//   content: string;
//   contributors: Record<Roles, User>;
// }

////////////////////////////////////////////////////////

// interface Person {
//   name: string;
//   age: number;
//   address: string;
// }

// type NameAndAge = Readonly<Pick<Person, "name" | "age">>;

// const person: NameAndAge = {
//   name: "John",
//   age: 12,
// };

// person.name = "Mark";

////////////////////////////////////////////////////////

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type LimitedUser = Omit<User, "password" | "age">;

////////////////////////////////////////////////////////

// interface User {
//   name: string;
//   email: string;
//   password: string;
// }

// function updateUser(user: User, updates: Partial<User>): User {
//   return { ...user, ...updates };
// }

// const user: User = {
//   name: "John",
//   email: "John",
//   password: "John",
// };

// const updatedUser = updateUser(user, { email: "John2" });

////////////////////////////////////////////////////////

// interface User {
//   name?: string;
//   age?: number;
//   email?: string;
//   password?: string;
// }

// type RegisterUser = Required<Pick<User, "email" | "password">>;

////////////////////////////////////////////////////////

// interface User {
//   name: string;
//   age: number;
// }

// const user: Readonly<User> = {
//   name: "John",
//   age: 10,
// };

// user.name = "Mark";

////////////////////////////////////////////////////////

// type City = "new york" | "london" | "tokyo";

// type UppercaseCity = Uppercase<City>;
// type LowercaseCity = Lowercase<UppercaseCity>;
// type CapitalizaCity = Capitalize<City>;
// type UncapitalizeCity = Uncapitalize<CapitalizaCity>;
