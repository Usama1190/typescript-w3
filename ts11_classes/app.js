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
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person('Usama');
console.log(person.getName());
export {};
