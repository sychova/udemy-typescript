enum Manufacturers {
  BOEING = "boeing",
  AIRBUS = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boingMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.AIRBUS) {
      target.prototype.origin = "USA";
      target.prototype.manufacturer = Manufacturers.AIRBUS;
      target.prototype.type = "Jet";
      target.prototype.airbusMethod = () => {
        console.log("Function by Airbus");
      };
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.BOEING;
      target.prototype.type = "Helicopter";
      target.prototype.boingMethod = () => {
        console.log("Function by Boing");
      };
    }
  };
}

@AircraftManufacturer(Manufacturers.AIRBUS)
class Airplane implements AircraftInterface {
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

const airplane: AircraftInterface = new Airplane("Airbus A380", "John");

console.log(airplane.manufacturer);

airplane.airbusMethod
  ? airplane.airbusMethod()
  : console.log("Method does not exist");
