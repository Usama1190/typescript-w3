// TypeScript Casting

/* Casting with as
A straightforward way to cast a variable is using the as keyword, which 
will directly change the type of the given variable. */

// let x: unknown = 'hello';

// console.log((x as string).length);






/* Casting with <>
Using <> works the same as casting with as. */

// let x: unknown = 'hello';

// console.log((<string>x).length);





/* Force casting
To override type errors that TypeScript may throw when casting, first 
cast to unknown, then to the target type. */

let x = 'hello';

// console.log(((x as unknown) as number).length);
// x is not actually a number so this will return undefined





/* Cast the "unknown" variable myVar as a string, using the as keyword:


let myVar: unknown = "Hello world!";
console.log((myVar as string).length); 




Cast the "unknown" variable myVar as a string, using < >:


let myVar: unknown = "Hello world!";
console.log((<string>myVar).length);
*/