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
