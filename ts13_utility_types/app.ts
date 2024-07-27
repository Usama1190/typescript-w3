// TypeScript Utility Types

/* Partial
Partial changes all the properties in an object to be optional. */

// interface objInter {
//     x: number;
//     y: number;
// }

// let usama: Partial<objInter> = {};
// // `Partial` allows x and y to be optional

// usama.y = 23;

// console.log(usama);





/* Required
Required changes all the properties in an object to be required. */

// interface usa {
//     name: string;
//     age: number;
//     cnic?: number;
// }

// let usama: Required<usa> = {
//     name: 'sami',
//     age: 22,
//     cnic: 4220170707342
// }





/* Record
Record is a shortcut to defining an object type with a specific key 
type and value type. */

// const name: Record<string, number> = {
//     'Usama': 24,
//     'Alice': 22
// }

// console.log(name);





/* Omit
Omit removes keys from an object type. */