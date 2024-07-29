// TypeScript Type Aliases and Interfaces



// Type Aliases
// try creating a new Car using the Aliase provided
/*
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel
}

const carYear = 2009;
const carType = 'Toyota';
const carModel = 'Corolla';

const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

console.log(car);

const car2: Car = {
    year: 2010,
    type: 'Honda',
    model: 'Civic'
}

console.log(car2);
*/





// Interfaces
// Try creating a new interface using it below
/*
interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
}

console.log(rectangle);


const newRectangle: Rectangle = {
    height: 40,
    width: 20
}

console.log(newRectangle);
*/




// Extending Interfaces
// Try creating a new interface and extending it like below
/*
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const rectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: 'red'
}

console.log(rectangle);
*/