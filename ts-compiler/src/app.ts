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
