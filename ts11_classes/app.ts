// TypeScript Classes

/* Members: Types
The members of a class (properties & methods) are typed using type 
annotations, similar to variables. */

// class Person {
//     myName: string;
// }

// const person = new Person();
// person.myName = 'Usama';

// console.log(person);





/* Members: Visibility
Class members also be given special modifiers which affect visibility. */

// class Person {
//     private name: string;

//     public constructor(name: string) {
//         this.name = name;
//     }

//     public getName():string {
//         return this.name;
//     }
// }

// const person = new Person('Usama');

// console.log(person.getName());

// person.name isn't accessible from outside the class since its private.





/* Parameter Properties
TypeScript provides a convenient way to define class members in the 
constructor, by adding a visibility modifiers to the parameter. */
