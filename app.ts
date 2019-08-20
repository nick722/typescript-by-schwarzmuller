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