// Try playing around with modifying properties and adding ones to see what happens

/* TypeScript Object Types

TypeScript has a specific syntax for typing objects. */

// const car: { type: string, model: string, year: number } = {
//     type: 'Toyota',
//     model: 'Corolla',
//     year: 2009
// }

// console.log(car);





/* Type Inference
TypeScript can infer the types of properties based on their values. */

// const car = {
//     type: 'Toyota'
// }

// car.type = 'Ford';     // no error

// car.type = 2;          // Error: Type 'number' is not assignable to 
//                             type 'string'.

// console.log(car);





/* Optional Properties
Optional properties are properties that don't have to be defined in the 
object definition. */

// no error on optional property, remove it and see what happens

const car: { type: string, mileage?: number } = {
    type: 'Toyota'
}

car.mileage = 2000;

console.log(car);





/* Index Signatures
Index signatures can be used for objects without a defined list of 
properties. */

// const nameAgeMap: { [index: string]: number } = {};

// nameAgeMap.Jack = 23;    // no error

// nameAgeMap.Mark = 'Fifty';    // Error: Type 'string' is not 
//                                     assignable to type 'number'.

// console.log(nameAgeMap);








/* Add the correct types for the object below:


const car: { type:    string    , model:     string    , year:   number } = 
{
    type: "Toyota",
    model: "Corolla",
    year: 2009
}; 


Specify that the second property, called model, should be optional:

const car: { type: string,     model?: string } = {
    type: "Toyota",
};

*/