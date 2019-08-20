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
  name = "Piper";
}
const piper = new Piper("Cait", "cait");
console.log(piper);