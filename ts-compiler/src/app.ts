enum Manufacturers {
  BOEING = "boeing",
  AIRBUS = "airbus",
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.AIRBUS) {
      target.prototype.origin = "USA";
      target.prototype.manufacturer = Manufacturers.AIRBUS;
      target.prototype.type = "Jet";
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.BOEING;
      target.prototype.type = "Helicopter";
    }
  };
}

@AircraftManufacturer(Manufacturers.AIRBUS)
class Airplane {
  constructor(public _aircraftModel: string, private pilot: string) {
    console.log("Class initiated");
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane = new Airplane("Airbus A380", "John");

//@ts-ignore
console.log(airplane.manufacturer);
