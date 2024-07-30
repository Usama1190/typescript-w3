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

