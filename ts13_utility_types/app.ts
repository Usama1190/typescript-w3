// TypeScript Utility Types



// Partial
/*
interface Point {
    x: number;
    y: number;
}

const myObj: Partial<Point> = {};
// `Partial` allows x and y to be optional

myObj.x = 10;

console.log(myObj);
*/




// Required
/*
interface Car {
    make: string;
    model: string;
    mileage?: number
}

const myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000    // Required forces mileage to be defined
}

console.log(myCar);
*/





// Record
/*
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Usama': 23
}

console.log(nameAgeMap);
*/






// Omit
/*
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Usama'
    // `Omit` has removed age and location from the type and they can't
    // be defined here
}

console.log(bob);
*/





// Pick
/*
interface Person {
    name: string;
    age: number;
    location?: string;
}

const personOne: Pick<Person, 'name'> = {
    name: 'Usama'
    // Pick has only kept name, so age and location were removed from the
    // type and can't be defined here.
}

console.log(personOne);
*/





// Exclude
/*
type Primitive = number | boolean | string;

const value: Exclude<Primitive, string> = true;
// a string cannot be used here since exculde remove it from the type

console.log(typeof value);
*/






// ReturnType
/*
type PointGenerator = () => { x: number; y: number; };

const myFunc: ReturnType<PointGenerator> = {
    x: 12,
    y: 23
};
*/





// Parameters
/*
type PointPrinter = ( p: { x: number; y: number; } ) => void;

const point: Parameters<PointPrinter>[0] = {
    x: 12,
    y: 34
}

console.log(point);
*/





// Readonly
/*
interface Person {
    name: string;
    age: number;
}

const person: Readonly<Person> = {
    name: 'usama',
    age: 23
}

person.name = 'John';
// Error: Cannot assign to 'name' because it is a read-only property.ts(2540)

console.log(person);
*/





// 