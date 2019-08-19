let myName = "Nick";
let myAge = 36;

//functions
function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

//void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number):number {
  return value1 * value2
}
multiply(2, 3)

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply()
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
  name: "Nick",
  age: 36
};

//complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[] {
    return this.data;

  }
}
