// type User = {
//   name: string;
// };

// // type User = {
// //   lastName: string;
// // };

// type AdminUser = {
//   isAdmin: boolean;
// };

// // Intersection Type
// const userAndAdmin: User & AdminUser = {
//   name: "John",
//   isAdmin: true,
// };

// // Union Type
// const userOrAdmin: User | AdminUser = {
//   name: "Mark",
// };

// // Tuples 
// type ResponseTuple = [string, number];

// interface Person {
//   name: string;
// }

// interface Person {
//   lastName: string;
// }

// const person: Person = {
//   name: "John",
//   lastName: "Malkovich",
// }
// ///////////////////////////////
// interface Name {
//   name: string;
// }

// interface LastName {
//   lastName: string;
// }

// class Person implements Name, LastName {
//   constructor(
//     public name: string,
//     public lastName: string
//     ) {}
// }

// const person2: Person = {
//   name: "John",
//   lastName: "Malkovich",
// }