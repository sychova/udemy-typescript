// firstname, lastname, age

let person: [string, string, number?];

person = ["John", "Doe"];

// [
//   NumberOfStudents: Number,
//   passing: boolean,
//   "John", "John",
// ]

type ListOfStudents = [number, boolean, ... string[]]

const passingStudents: ListOfStudents = [3, true, "John", "Stella", "Mark"];
const failingStudents: ListOfStudents = [1, false, "Scott"];