// enum AgeUnit {
//   years = "years",
//   months = "months",
// }

// type GreetingFunction = (greeting: string) => string;

// type Person = {
//   name: string;
//   age: number;
//   ageUnit: AgeUnit;
//   country: string;
//   greet: GreetingFunction;
// }

// const person: Person = {
//   name: "John",
//   age: 30.5,
//   ageUnit: AgeUnit.years,
//   country: "Canada",
//   greet: (greeting: string) => `${greeting} ${person.name}`
// }

// function convertAgeToMonths(person: Person): Person {
//   person.age = person.age * 12;
//   person.ageUnit = AgeUnit.months;

//   return person;
// }

// console.log(convertAgeToMonths(person));

// console.log(person.greet("Hello"));