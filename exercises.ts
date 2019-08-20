class Car {
  name: string;
  acceleration = 0;

  constructor(name: string) {
    this.name = name;
  };

  honk():void {
    console.log("Tooot!");
  }

  accelerate(speed: number):void {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car("Tesla");
car.honk();
console.log(car.acceleration);
car.accelerate(10)
console.log(car.acceleration);