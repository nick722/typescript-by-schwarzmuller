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
multiply(2, "Nick")