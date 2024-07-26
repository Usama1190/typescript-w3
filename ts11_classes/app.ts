// TypeScript Classes

/* Members: Types
The members of a class (properties & methods) are typed using type 
annotations, similar to variables. */

// class Person {
//     myName: string;
// }

// const person = new Person();
// person.myName = 'Usama';

// console.log(person);





/* Members: Visibility
Class members also be given special modifiers which affect visibility. */

// class Person {
//     private name: string;

//     public constructor(name: string) {
//         this.name = name;
//     }

//     public getName():string {
//         return this.name;
//     }
// }

// const person = new Person('Usama');

// console.log(person.getName());

// person.name isn't accessible from outside the class since its private.





/* Parameter Properties
TypeScript provides a convenient way to define class members in the 
constructor, by adding a visibility modifiers to the parameter. */

// class Person {
//     // name is a private member variable

//     constructor(private name: string) {}

//     getName(): string {
//         return this.name;
//     }
// }

// const person = new Person('Usama');

// console.log(person.getName());





/* Readonly
Similar to arrays, the readonly keyword can prevent class members from 
being changed. */

// class Person {
//     private readonly name: string;

//     public constructor(name: string) {
//         // name cannot be changed after this initial definition, which 
//         // has to be either at it's declaration or in the constructor.
//         this.name = name;
//     }

//     public getName(): string {
//         return this.name;
//     }
// }

// const person = new Person('Osama');

// console.log(person);





/* Inheritance: Implements
Interfaces (covered here) can be used to define the type a class must 
follow through the implements keyword. */

// interface Shape {
//     getArea: () =>  number;
// }

// class Rectangle implements Shape {
//     public constructor(protected readonly height: number, 
//         protected readonly width: number) {}

//     getArea(): number {
//         return this.height * this.width;
//     }
// }

// const rectangle = new Rectangle(12, 23);

// console.log(rectangle.getArea());





/* Inheritance: Extends
Classes can extend each other through the extends keyword. A class can 
only extends one other class. */

// interface Shape {
//     getArea: () => number;
// }

// class Rectangle implements Shape {
//     public constructor(protected readonly height: number, 
//         protected readonly width: number) {}
    
//     getArea() {
//         return this.width * this.height;
//     }
// }

// class Square extends Rectangle {
//     public constructor(width: number) {
//         super(width, width)
//     }

//     // getArea gets inherited from rectangle
// }

// const mySqr = new Square(12);

// console.log(mySqr.getArea());





/* Override
When a class extends another class, it can replace the members of the 
parent class with the same name.

Newer versions of TypeScript allow explicitly marking this with the 
override keyword. */

// interface Shape {
//     getArea: () => number;
// }

// class Rectangle implements Shape {
//     public constructor(protected readonly width: number, 
//         protected readonly height: number) {}

//     public getArea() {
//         return this.height * this.width;
//     }

//     public toString() {
//         return `Rectangle[width=${this.width},height=${this.height}]`;
//     }
// }

// class Square extends Rectangle {
//     public constructor(width: number) {
//         super(width, width);
//     }

//     // this toString replaces the toString from Rectangle
//     public override toString() {
//         return `Square[width=${this.width}, ${this.height}.]`;
//     }
// }

// const myRec = new Rectangle(12, 45);
// console.log(myRec.getArea());

// const mySqr = new Square(24);
// console.log(mySqr.getArea());





/* Abstract Classes
Classes can be written in a way that allows them to be used as a base 
class for other classes without having to implement all the members. 
This is done by using the abstract keyword. Members that are left 
unimplemented also use the abstract keyword. */

