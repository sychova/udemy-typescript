"use strict";
// function convertNumberToString(number) {
//   if (typeof number !== "number") {
//     console.log("Input a valid number");
//   }
//   return number.toString();
// }
////////////////////////////////////////////////////////
// const user = {
//   name: "John",
//   age: 32,
// };
// let tom: typeof user;
// function printStrings(str: string | string[] | null) {
//   if (str && typeof str === "object") {
//     for (const s of str) {
//       console.log(s);
//     }
//   } else if (typeof str === "string") {
//     console.log(str);
//   } else {
//     console.log("Pass an array of strings or a string as an argument");
//   }
// }
////////////////////////////////////////////////////////
// type Person = {
//   name: string;
//   age?: number;
// };
// function printAge(person: Person) {
//   if (person.age) {
//     console.log(person.age);
//   } else {
//     console.log("Age unknown");
//   }
// }
// printAge({
//   name: "John",
//   age: "age",
// });
////////////////////////////////////////////////////////
// type Circle = {
//   kind: "circle";
//   radius: number;
// };
// type Square = {
//   kind: "square";
//   sideLenght: number;
// };
// type Shape = Circle | Square;
// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     return shape.sideLenght ** 2;
//   }
// }
////////////////////////////////////////////////////////
// type Circle = {
//   kind: "circle";
//   radius: number;
// };
// type Square = {
//   kind: "square";
//   sideLenght: number;
// };
// type Shape = Circle | Square;
// function getArea(shape: Shape) {
//   if ("radius" in shape) {
//     return Math.PI * shape.radius ** 2;
//   } else {
//     return shape.sideLenght ** 2;
//   }
// }
////////////////////////////////////////////////////////
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    getPrice() {
        return this.price;
    }
}
class Clothing extends Product {
    constructor(name, price, size, material) {
        super(name, price);
        this.size = size;
        this.material = material;
    }
    getPrice() {
        return this.price;
    }
}
function displayDetails(product) {
    console.log(`Name: ${product.name}`);
    console.log(`Price ${product.getPrice()}`);
    if (product instanceof Electronics) {
        console.log(`Warranty: ${product.warranty}`);
    }
    else if (product instanceof Clothing) {
        console.log(`Size: ${product.size}`);
        console.log(`Material: ${product.material}`);
    }
}
//# sourceMappingURL=app.js.map