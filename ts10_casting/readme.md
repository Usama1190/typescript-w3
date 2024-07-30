TypeScript Casting



Topic
1. Casting with as
2. Casting with <>
3. Force Casting



Cast the "unknown" variable myVar as a string, using the as keyword:

let myVar: unknown = "Hello world!";
console.log((myVar as string).length);




Cast the "unknown" variable myVar as a string, using < >:

let myVar: unknown = "Hello world!";
console.log((<string>myVar).length);