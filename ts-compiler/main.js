// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.points = 0;
//   }

//   login() {
//     console.log(this.name, "has logged in");
//   }

//   logout() {
//     console.log(this.name, "has logged out");
//   }

//   addPoint() {
//     this.points++;
//     console.log("Total point:", this.points);
//   }
// }

// const user = new User("John", "john@example.com");

// console.log(user);

function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

User.prototype.login = function () {
  console.log(this.name, "has logged in");
};

User.prototype.logout = function () {
  console.log(this.name, "has logged out");
};

User.prototype.addPoint = function () {
  this.points++;
  console.log("Total point:", this.points);
};

function AdminUser(name, email) {
  User.apply(this, [name, email]);
}

const user = new User("John", "john@example.com");

const admin = new AdminUser("Mark", "mark@example.com");

console.log(user);
console.log(admin);
