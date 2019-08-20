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