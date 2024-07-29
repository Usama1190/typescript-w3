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
// let w: unknown = 23;

// w = 'usama';     // no error

// w = { runANonExistentMethod: () => {
//     console.log("I think therefore I am");
// } 
// } as { runANonExistentMethod: () => void }

    // How can we avoid the error for the code commented out below when 
    // we don't know the type? 
    // w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 

// if(typeof w === 'object' && w !== null) {
//     (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
// } 
// Although we have to cast multiple times we can do a check in the if 
// to secure our type and have a safer casting





// Type: never
// let x: never = true;
// Type 'boolean' is not assignable to type 'never'.ts(2322)





// Type: undefined and null
let y: undefined = undefined;
console.log(typeof y);         // undefined

let f: null = null;
console.log(typeof f);         // object
