// class User {
//   name: string;
//   email: string;
//   age: number;

//   constructor(
//     name: string,
//     email: string,
//     age: number,
//   ) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }

// class AdminUser extends User {
//   isAdmin: boolean = true;
//   usersReporting: number;

//   constructor(name: string, email: string, age: number, usersReporting: number) {
//     super(name, email, age);
//     this.usersReporting = usersReporting;
//   }
// }

// const user: User = new User("John3", "john3@example.com", 12);
// const admin: AdminUser = new AdminUser("John4", "john4@example.com", 22, 33);

// console.log(user);
// console.log(admin);