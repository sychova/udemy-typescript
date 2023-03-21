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
var Manufacturers;
(function (Manufacturers) {
    Manufacturers["BOEING"] = "boeing";
    Manufacturers["AIRBUS"] = "airbus";
})(Manufacturers || (Manufacturers = {}));
function AircraftManufacturer(manufacturer) {
    return (target) => {
        if (manufacturer === Manufacturers.AIRBUS) {
            target.prototype.origin = "USA";
            target.prototype.manufacturer = Manufacturers.AIRBUS;
            target.prototype.type = "Jet";
        }
        else {
            target.prototype.origin = "France";
            target.prototype.manufacturer = Manufacturers.BOEING;
            target.prototype.type = "Helicopter";
        }
    };
}
let Airplane = class Airplane {
    constructor(_aircraftModel, pilot) {
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
        console.log("Class initiated");
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
};
Airplane = __decorate([
    AircraftManufacturer(Manufacturers.AIRBUS),
    __metadata("design:paramtypes", [String, String])
], Airplane);
const airplane = new Airplane("Airbus A380", "John");
//@ts-ignore
console.log(airplane.manufacturer);
//# sourceMappingURL=app.js.map