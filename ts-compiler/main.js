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

function AdminUser(name, email, peopleReporting) {
  User.apply(this, [name, email]);
  this.peopleReporting = peopleReporting;
}

AdminUser.prototype = Object.create(User.prototype);

AdminUser.prototype.updatePeopleReporting = function (newNumber) {
  this.peopleReporting = newNumber;
};

const user = new User("John", "john@example.com");

const admin = new AdminUser("Mark", "mark@example.com", 10);

console.log(user);
console.log(admin);
