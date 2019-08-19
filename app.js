var myName = "Nick";
var myAge = 36;
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
multiply(2, 3);
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply()
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Nick",
    age: 36
};
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge;
// check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never
function neverReturns() {
    throw new Error("An error!");
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
