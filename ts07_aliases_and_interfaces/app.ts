// TypeScript Type Aliases and Interfaces

/* Type Aliases
Type Aliases allow defining types with a custom name (an Alias).

Type Aliases can be used for primitives like string or more complex 
types such as objects and arrays: */


// Try creating a new Car using the alias provided
/*
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
};


const carYear: CarYear = 2001;
const carType: CarType = 'Toyota';
const carModel: CarModel = 'Corolla';

const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

console.log(car);
*/




/* Interfaces
Interfaces are similar to type aliases, except they only apply to object types. */

// Try creating a new interface using it below

// interface Rectangle {
//     height: number;
//     width: number;
// }

// const rectangle: Rectangle = {
//     height: 20,
//     width: 10
// }

// console.log(rectangle);





/* Extending Interfaces
Interfaces can extend each other's definition.

Extending an interface means you are creating a new interface with the 
same properties as the original, plus something new. */

// interface Rectangle {
//     height: number;
//     width: number;
// }

// interface ColoredRectangle extends Rectangle {
//     color: string;
// }

// const rectangle: ColoredRectangle = {
//     height: 20,
//     width: 10,
//     color: 'red'
// }

// console.log(rectangle);





/* Create a Type Alias for a string, called carType:


type carType = string




Create an interface called myInterface, with the property myProp as a 
string:


interface myInterface {
    myProp: string
}




Extend the myInterface interface from last exercise, and add a property myExtProp as a number:


interface myExtInterface extends myInterface {
    myExtProp: number
}

*/