let loggedInUsername: string;

const users = [
  {
    name: "Obby",
    age: 12,
  },
  {
    name: "Hina",
    age: 14,
  }
];

const loggedInUser = users.find((user: { age: number, name: string }) => user.name === loggedInUsername)

console.log(loggedInUser.age);

let saveButton: HTMLElement | null = document.getElementById("save");

if (saveButton !== null) {
  //do something
}