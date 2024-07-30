// TypeScript Classes



// Memebers: Types
// class Person {
//     name: string = 'john';
// }

// const person = new Person();

// person.name = 'Usama';

// console.log(person);





// Members: Visibility
/*
class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person('Usama');

console.log(person);
console.log(person.getName());
*/
// person.name isn't accessible from outside the class since its private





// Parameter Properties
/*
class Person {
    // name is a private member variable
    public constructor( private name: string ) {}

    public getName(): string {
        return this.name;
    }
}

const person = new Person('Osama');

console.log(person);
console.log(person.getName());
*/





// Readonly
/*
class Person {
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which
        // has to be either at it's declaration or in the constructor
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

let person = new Person('Osama');

console.log(person);
console.log(person.getName());
*/
// console.log(person.name = 'ali');
// if private modifier removes on name property then,
// Cannot assign to 'name' because it is a read-only property.ts(2540)





// Inheritance: Implements
/*
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {

    public constructor(protected readonly width: number,
        protected readonly height: number) {}

    getArea() {
        return this.width * this.height;
    };
}

const rectangle = new Rectangle(20, 10);

console.log(rectangle);
console.log(rectangle.getArea());
*/





// Inheritance: Extends
/*
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height
    }
}

class Square extends Rectangle {

    public constructor(protected readonly width: number) {
        super(width, width);
    }

    // getArea gets inherited from rectangle
}

const mySqr = new Square(20);

console.log(mySqr);
console.log(mySqr.getArea());
*/





// Override
/*
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    // Using protected for these members alows access from classes that
    // extends from this class, such as Square

    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea() {
        return this.width * this.height;
    }

    toString() {
        return `My Rectangle has [width${this.width}, height${this.height}].`;
    }
}

class Square extends Rectangle {

    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from the Rectangle
    public override toString(): string {
        return `My Square has [width${this.width}].`;
    }
}

const mySqr = new Square(20);

console.log(mySqr);
console.log(mySqr.toString());
console.log(mySqr.getArea());
*/





// Abstract Classes
/*
abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}].`;
    }
}

class Rectangle extends Polygon {

    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

let myRect = new Rectangle(40, 20);

console.log(myRect);
console.log(myRect.getArea());
console.log(myRect.toString());
*/




/*
abstract class Animal {
    // Concrete method
    eat(): void {
        console.log('This animal is eating!');
        
    }

    // Abstract method
    abstract makeSound(): void
}

// let myAni = new Animal();
// Error: Cannot create an instance of an abstract class.ts(2511)
// constructor Animal(): Animal

class Dog extends Animal {
    makeSound(): void {
        console.log('Woof!');
        
    }
}

let myDog = new Dog();

myDog.eat();
myDog.makeSound();

class Cat extends Animal {

    makeSound(): void {
        console.log('Meow!');
        
    }
}

let myCat = new Cat();

myCat.eat();
myCat.makeSound()
*/