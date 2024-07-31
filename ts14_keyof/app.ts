// TypeScript keyof



interface Person {
    name: string;
    age: number;
}


/*`keyof Person` here creates a union type of "name" and "age", other 
strings will not be allowed */

function usama(person: Person, property: keyof Person) {
    console.log(`The property is ${property}, and person porperty is ${person[property]}`);
    
}

let person: Person = {
    name: 'Osama',
    age: 21
}

usama(person, 'name');
// Printing person property name: 'Osama'