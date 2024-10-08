TypeScript Exercises / Practice All Topics



1. Complete the sentence:

TypeScript allows developers to add `types` to JavaScript.




2. Complete the sentence:

JavaScript is a `loosely` typed language.




3. The TypeScript compiler can be configured with which file?

`tsconfig.json`




4. There are two main ways TypeScript assigns a type:

`Explicit`
`Implicit`




5. Create a "firstName" variable, string type using Implicit type:

`let firstName = "Dylan";`




6. Create a "firstName" variable, string type using Explicit type:

`let firstName: string = "Dylan";`




7. Create an empty "myVar" variable, and disable type checking:

`let myVar: any;`




8. Create an empty "myVar" variable, and specify it should be an unknown type:

`let myVar: unknown;`




9. Prevent the array from being changed:

`const names: readonly string[] = ["Dylan"];`




10. The order of value types does not matter for Tuples:

`false`




11. Define ourTuple as string and boolean, in that order:

`let ourTuple: [string, boolean];`




12. Add the correct types for the object below:

const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};




13. Specify that the second property, called model, should be optional:

const car: { type: string, model?: string } = {
  type: "Toyota"
};




14. Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with default values:

enum myEnum {
    myFirstConst,
    mySecondConst
};




15. Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with the string values "first" and "second":

enum myEnum {
    myFirstConst = "first",
    mySecondConst = "second"
};




16. Create a Type Alias for a string, called carType:

`type carType = string`




17. Create an interface called myInterface, with the property myProp as a string:

interface myInterface {
    myProp: string
}




18. Extend the myInterface interface from last exercise, and add a property myExtProp as a number:


interface myExtInterface extends myInterface {
    myExtProp: number
}




19. Specify that the paramater "myVar" for the function can be either string or number:


function myFunc(myVar: string | number) {
  console.log(myVar)
}




20. Create a function that returns the string "Learning is Fun!", with the return type explicitly defined:


function myFunc(): string {
  return "Learning is Fun!";
}




21. Create a function that specifically does not return a value:


function myFunc(): void {
  console.log("Learning is Fun!");
}




22. Create a function with 2 parameters (myVar1 and myVar2), that are both strings:


function myFunc(myVar1: string, myVar2: string) {
  return(myVar1 + myVar2);
}




23. Create a function with 2 parameters (myVar1 and myVar2,in that order), that are both strings.

Specify that myVar2 should be optional:


function myFunc(myVar1: string, myVar2?: string) {
  return(myVar1 + (myVar2 || ""));
}




24. Cast the "unknown" variable myVar as a string, using the as keyword:


let myVar: unknown = "Hello world!";
console.log((myVar as string).length);




25. Cast the "unknown" variable myVar as a string, using < >:


let myVar: unknown = "Hello world!";
console.log((<string>myVar).length);




26. Specify that Person.name can only be accessed within the class, but that the method Person.getName() can be accessed anywhere:


class Person {
  private name: string;
  
  public constructor(name: string) {
    this.name = name;
  }

 
  public getName(): string {
    return this.name;
  }
}




27. Complete the Generic:


function createPair<typeX, typeY>(x: typeX, y: typeY): [typeX, typeY] {
  return [x, y];
}
console.log(createPair<string, number>('Meaning', 42));




28. Declare an object kindPerson from the Person interface, where all the properties are optional:


interface Person {
  age: number;
  firstName: string;
  lastName: string;
}
            
let kindPerson: Partial<Person> = {};




29. Declare an object kindPerson from the Person interface, where all the properties are required.


interface Person {
  age: number;
  firstName: string;
  lastName?: string;
}
            
let kindPerson: Required<Person> = {
  age: 1800,
  firstName: "Santa",
  lastName: "Claus"
};




30. Complete the sentence:


Record<string, number> is equivalent to { [key: string]: number }