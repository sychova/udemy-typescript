// abstract class Person {
//   public abstract name: string;
//   public abstract email: string;
//   public abstract phone: number;
  
//   public greeting() {
//     console.log(`Hello ${this.name}`);
//   }

//   public static nameClass() {
//     return "Class name is Person";
//   }
// }

// interface User {
//   name: string;
//   email: string;
//   phone: number;
//   greeting: () => void;
// }

// /////////

// class RegisteredPerson extends Person {
//   constructor(
//     public name: string,
//     public email: string,
//     public phone: number
//   ) {
//     super();
//   }
// }

// interface Greeting {
//   greeting: () => void;
// }

// class RegisteredUser implements User, Greeting {
//   constructor(
//     public name: string,
//     public email: string,
//     public phone: number
//   ) {}

//   public greeting () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// /////////

// const person: RegisteredPerson = new RegisteredPerson (
//   "John",
//   "john@example.com",
//   123456789,
// );

// console.log(person);

// console.log(Person.nameClass());