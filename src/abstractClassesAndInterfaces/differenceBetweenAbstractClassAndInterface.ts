abstract class Person {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;
  
  public greeting() {
    console.log(`Hello ${this.name}`);
  }
}

interface User {
  name: string;
  email: string;
  phone: string;
}

/////////

class RegisteredPerson extends Person {
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ) {
    super();
  }
}

class RegisteredUser implements User {}

/////////

const person: RegisteredPerson = new RegisteredPerson (
  "John",
  "john@example.com",
  123456789,
);

console.log(person);