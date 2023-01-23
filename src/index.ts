// type MapCustom = <T>(array: T[], predicate: (item: T) => T) => T[];

const map = <T, U>(array: T[], predicate: (item: T) => U) => {
  let result = [];

  if(array.length === 0) {
    return array;
  }

  for(let i = 0; i < array.length; i++) {
      result[i] = predicate(array[i]);
  }

  return result;
}

let numbers = [1, 2, 5, 7, 9, 10, 12];

function multiplyByTen(num: number) {
  return num.toString();
}

console.log(map(numbers, multiplyByTen));

// @ts-ignore
const converted = map(numbers, (num) => num.toString());

console.log(converted)