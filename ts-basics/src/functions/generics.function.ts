// // type Filter = {
// //   <T>(array: T[], predicate: (item: T) => boolean): T[];
// // };

// // type Filter<T> = {
// //   (array: T[], predicate: (item: T) => boolean): T[];
// // };

// type Filter = <T>(array: T[], predicate: (item: T) => boolean) => T[];

// const filter: Filter = (array, predicate) => {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (predicate(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// let numbers = [1, 2, 5, 7, 9, 10, 12];

// function greaterThanSeven(item: number) {
//   return item > 7;
// }

// console.log(filter(numbers, greaterThanSeven));

// let animals = ["cat", "dog", "rat", "lion"];

// function filterCats(item: string) {
//   return item === "cat";
// }

// console.log(filter(animals, filterCats));