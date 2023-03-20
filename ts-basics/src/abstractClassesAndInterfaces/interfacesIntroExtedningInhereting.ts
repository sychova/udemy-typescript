// enum Roles {
//   admin = "admin",
//   author = "author",
//   editor = "editor",
// }

// interface Role {
//   role: Roles;
// }

// enum PermissionsList {
//   read = "read",
//   write = "write",
//   execute = "execute",
// }

// interface UserPermissions {
//   permissions: PermissionsList[];
// }

// interface User {
//   name: string;
//   email: string;
//   phone: number;
//   gender: string;
// }

// interface AdminUser extends User, Role, UserPermissions {
//   numberOfUsersReporting: number;
// }

// interface UserWithAddress extends User {
//   address: string;
// }

// const user: User = {
//   name: "John",
//   email: "john@example.com",
//   phone: 123456789,
//   gender: "male",
// };

// const userWithAddress: UserWithAddress = {
//   name: "Mark",
//   email: "mark@example.com",
//   phone: 123456789,
//   gender: "male",
//   address: "Some street",
// }

// const rob: AdminUser = {
//   name: "Rob",
//   email: "rob@example.com",
//   phone: 123456789,
//   gender: "male",
//   role: Roles.admin,
//   permissions: [
//     PermissionsList.execute,
//     PermissionsList.read,
//     PermissionsList.write,
//   ],
//   numberOfUsersReporting: 5,
// }

// console.log(user);
// console.log(userWithAddress);
// console.log(rob);