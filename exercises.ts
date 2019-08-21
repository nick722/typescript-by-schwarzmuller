// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };

class BaseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends BaseObject {
  width: number = 5;
  length: number = 2;

  calcSize():number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle;
console.log(`rectangle.calcSize:`, rectangle.calcSize());
