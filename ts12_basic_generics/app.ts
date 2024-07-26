// TypeScript Basic Generics

/* Functions
Generics with functions help make more generalized methods which more 
accurately represent the types used and returned. */

// function createPair<S, T>(a: S, b: T): [S, T] {
//     return [a, b];
// }

// console.log(createPair<string, number>('hello', 12));





/* Classes
Generics can be used to create generalized classes, like Map. */

// class NamedValue<T> {
//     private _value: T | undefined;

//     constructor(private name: string) {}

//     public setValue(value: T) {
//         this._value = value;
//     }

//     public getValue(): T | undefined{
//         return this._value;
//     }

//     public toString(): string {
//         return `${this.name}: ${this._value}`
//     }
// }

// const value = new NamedValue('Number');

// value.setValue(12);

// console.log(value.getValue());
// console.log(value.toString());





/* Type Aliases
Generics in type aliases allow creating types that are more reusable. */

// type Wrapperd<T> = { value: T }

// const usama: Wrapperd<string> = {
//     value: 'Israr'
// }

// console.log(usama);



// interface Wrapperd<T> { value: T }

// const usama: Wrapperd<string> = {
//     value: 'Israr'
// }

// console.log(usama);






/* Default Value
Generics can be assigned default values which apply if no other value 
is specified or inferred. */




// type Wrapperd<T = string> = { value: T }

// const usama: Wrapperd = {
//     value: 'Israr'
// }

// console.log(usama);






/* Extends
Constraints can be added to generics to limit what's allowed. The 
constraints make it possible to rely on a more specific type when using 
the generic type. */

// type Wrapperd<T extends string | boolean> = { value: T }

// const usama: Wrapperd<boolean> = {
//     value: true,
// }

// console.log(usama);