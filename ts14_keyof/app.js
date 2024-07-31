// TypeScript keyof
/*`keyof Person` here creates a union type of "name" and "age", other
strings will not be allowed */
function usama(person, property) {
    console.log(`The property is ${property}, and person porperty is ${person[property]}`);
}
let person = {
    name: 'Osama',
    age: 21
};
usama(person, 'name');
export {};
