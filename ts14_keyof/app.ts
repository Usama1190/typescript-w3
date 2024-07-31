// TypeScript keyof


/*
interface Person {
    name: string;
    age: number;
}
*/

/*`keyof Person` here creates a union type of "name" and "age", other 
strings will not be allowed */
/*
function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`The property is ${property}, and person porperty is ${person[property]}`);
    
}

let person: Person = {
    name: 'Osama',
    age: 21
}

printPersonProperty(person, 'name');
// Printing person property name: 'Osama'*/




/*
interface Sami {
    child1: string;
    child2: string;
}


function pickChildren(usama: Sami, property: keyof Sami) {
    console.log(`My family have one wife and two childrens. ${usama.child2} First child name is ${usama[property]}`);
    
}

let usama: Sami = {
    child1: 'Ali',
    child2: 'Ahmed'
}

pickChildren(usama, 'child1');
*/





// keyof with index signatures
/*
type StringMap = { [key: string]: unknown };

// `keyof StringMap` resolves to string here
function usama(property: keyof StringMap, value: string): StringMap {
    return { [property]: value };
}

let myObj: StringMap = {
    prop1: 'Osama',
    prop2: 'Ahmed'
}

let myVar = usama(2, 'landcuriers')
console.log(myVar);
*/