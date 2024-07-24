/* TypeScript Arrays

TypeScript has a specific syntax for typing arrays.  */

// const names: string[] = [];

// names.push('Usama');   // no error

// names.push(3);      // Error: Argument of type 'number' is not 
//                       assignable to parameter of type 'string'.

// console.log(names);





/* Readonly
The readonly keyword can prevent arrays from being changed.  */

// const names: readonly string[] = ['Usama'];

// names.push('Ali');     // Error: Property 'push' does not exist on 
//                              type 'readonly string[]'.

// try removing the readonly modifier and see if it works
// console.log(names);





/* Type Inference
TypeScript can infer the type of an array if it has values. */

const numbers = [1, 2, 3];     // inferred to the type number[]

numbers.push(4);    // no error

// comment line below out to see the successful assignment

// numbers.push('2');    // Error: Argument of type 'string' is not 
//                          assignable to parameter of type 'number'.

console.log(numbers);

let head: number = numbers[0];     // no error

console.log(head);



// Prevent the array from being changed:
// const names:  'readonly'  string[] = ["Dylan"];