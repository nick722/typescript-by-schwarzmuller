class Person {
  name: string;
  private type: string;
  protected age: number;

  constructor(name: string, public username: string) {
    this.name = name;
  }
}

const person = new Person("Nick", 'nick');
console.log(person);