class Person {
  name: string;
  private type: string;
  protected age: number = 36;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Walker")
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Nick", 'nick');
console.log(person);

person.printAge();
// person.setType("Cool guy");

// Inheritance
class Piper extends Person{
  // name = "Piper";

  constructor(username: string) {
    super("Piper", username);
    this.age = 32;
  }
}
const piper = new Piper( "piper");
console.log(piper);

// Getters & Setters
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if(value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Tato";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8))

// Abscract Classes
abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project")
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public  readonly name: string) {}

  static getInstance() {
    if(!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

let wrong = new OnlyOne("The only one");
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = "Something else";