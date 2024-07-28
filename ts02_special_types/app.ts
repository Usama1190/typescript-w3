// TypeScript Special Types



// Type: any

// Example without any

// let a = true;

// a = 'usama';   
// Error: type 'string' is not assignable to type 'boolean'.ts2322

// a.runANonExistentMethod();
// Error: Property 'runANonExistentMethod' does not exist on type 'boolean'.

// console.log(Math.round(a));
// Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)





// Example with any

// let a: any = true;

// a = 'string';    // no error as it can be 'any' type

// a.runANonExistentMethod();
// no type error in the editor, but will still throw an error if 
// commented in

// console.log(Math.round(a));
// no error as it can be 'any' type.





// Type: unknown