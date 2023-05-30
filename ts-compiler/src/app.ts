// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Done!");
//   }, 1000);
// });

// type AwaitedType = Awaited<typeof promise>;

/////////////////////////////////////////////////////////////////

// type Roles = "author" | "editor" | "researcher";

// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// interface Article {
//   title: string;
//   content: string;
//   contributors: Record<Roles, User>;
// }

// const article: Article = {
//   title: "Title",
//   content: "Content",
//   contributors: {
//     author: { name: "authorName", email: "authorEmail", age: 11 },
//     editor: { name: "editorName", email: "editorName", age: 22 },
//     researcher: { name: "researcherName", email: "reseracherEmail", age: 33 },
//   },
// };

/////////////////////////////////////////////////////////////////

// interface Person {
//   name: string;
//   age: number;
//   address: string;
// }

// type NameAndAge = Pick<Person, "name" | "age">;

// const person: NameAndAge = {
//   name: "John",
//   age: 32,
// };

// person.name = "Mark";

/////////////////////////////////////////////////////////////////

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type JustNameAndAge = Omit<User, "password" | "email">;

/////////////////////////////////////////////////////////////////

// interface User {
//   name: string;
//   email: string;
//   password: string;
// }

// function updateUser(user: User, updates: Partial<User>) {
//   return { ...user, ...updates };
// }

// const user: User = {
//   name: "John",
//   email: "email",
//   password: "password",
// };

// const updatedUser = updateUser(user, { email: "newEmail" });

/////////////////////////////////////////////////////////////////

// interface User {
//   name?: string;
//   age?: number;
//   email?: string;
//   password?: string;
// }

// type RegisterUser = Required<Pick<User, "email" | "password">>;

/////////////////////////////////////////////////////////////////

// interface User {
//   name: string;
//   age: number;
// }

// const user: Readonly<User> = {
//   name: "John",
//   age: 32,
// };

// user.name = "Mark";

/////////////////////////////////////////////////////////////////

// type City = "new york" | "london" | "tokyo";
// type UppercaseCity = Uppercase<City>;
// type LowercaseCity = Lowercase<UppercaseCity>;
// type CapitalCity = Capitalize<City>;
// type UncapitalCity = Uncapitalize<CapitalCity>;
