"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function AddLocation(lat, long) {
    return (classConstructor) => {
        return class extends classConstructor {
            constructor(...args) {
                super(...args);
                this.mapLocation = { lat, long };
            }
        };
    };
}
let Person = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Person = __decorate([
    AddLocation(1.234, 1.876),
    __metadata("design:paramtypes", [String, Number])
], Person);
const person = new Person("John", 32);
console.log(person);
//# sourceMappingURL=app.js.map