/* Type: any
any is a type that disables type checking and effectively allows all
types to be used.

The example below does not use any and will throw an error: */
// let u = true;
// u = 'string';  
// Error: Type 'string' is not assignable to type 'boolean'.
// u.runANonExistentMethod(); 
// Error: Property 'runANonExistentMethod' does not exist on type 
// 'boolean'.
// console.log(Math.round(u)); 
// Error: Argument of type 'boolean' is not assignable to parameter of 
// type 'number'.
// Setting any to the special type any disables type checking:
let v = true;
v = 'string'; // no error as it can be "any" type
// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in
console.log(Math.round(v)); // no error as it can be "any" type
/* Type: unknown
unknown is a similar, but safer alternative to any.

TypeScript will prevent unknown types from being used, as shown in the
below example: */
let w = true;
w = 'string'; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we 
// don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if 
// to secure our type and have a safer casting
// Type: never
// never effectively throws an error whenever it is defined.
// let x: never = true; 
// Error: Type 'boolean' is not assignable to type 'never'.
/* Type: undefined & null
undefined and null are types that refer to the JavaScript primitives
undefined and null respectively. */
let y = undefined;
console.log(typeof y); // undefined
let z = null;
console.log(typeof z); // object
export {};
