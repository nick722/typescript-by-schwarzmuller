// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//     return this._firstName;
//   },
//   set: function (value) {
//     if (value.length > 3) {
//       this._firstName = value;
//     }
//     else {
//       this._firstName = "";
//     }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
//
// stName);
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log("person.firstName:", person.firstName);
person.firstName = "Ma";
console.log("person.firstName:", person.firstName);
person.firstName = "Maximilian";
console.log("person.firstName:", person.firstName);
