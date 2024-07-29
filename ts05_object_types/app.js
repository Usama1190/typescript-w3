// TypeScript Object Types
/* Try playing around with modifying porperties and adding ones to see
what happens  */
// const car: { type: string, model: string, year: number } = {
//     type: 'Toyota',
//     model: 'Corolla',
//     year: 2009
// }
// console.log(car);
// Type Inference
// const car = {
//     type: 'Toyota'
// }
// car.type = 'Ford';     // no error
// car.type = 23;
// Error: Type 'number' is not assignable to type 'string'.ts(2322)
// console.log(car);
// Optional Properties     ( without )
// const car: { type: string, mileage: number } = {
// type: 'Toyoyta'
/* Property 'mileage' is missing in type '{ type: string; }' but
required in type '{ type: string; mileage: number; }'.ts(2741) */
// }
// With optional Properties
const car = {
    type: 'Toyota'
};
car.mileage = 2000;
console.log(car);
export {};
