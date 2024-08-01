"use strict";
// TypeScript Null & Undefined
// Types
/*
let value: string | undefined | null = null;
console.log(typeof value);

value = 'Usama';
console.log(typeof value);

value = undefined;
console.log(typeof value);
*/
// Optional Chaining
/*
interface House {
    sqft: number;
    yard?: {
        sqft: number;
    }
}

function printYardSize(usama: House) {
    const yardSize = usama.yard?.sqft;

    if(yardSize === undefined) {
        console.log('No yard!');
        
    }
    else {
        console.log(`Yard is ${yardSize} sqft`);
        
    }
}

const house: House = {
    sqft: 1000
}

printYardSize(house);    // prints `No yard`
*/
/*
interface Home {
    squr: number;
    yard?: {
        squr: number;
    }
}

function myHoues(home: Home) {
    const myVar = home?.yard;

    if(myVar === undefined) {
        console.log('No Yard!');
        
    }
    else {
        console.log(`My House yard is: ${myVar.squr}`);
        
    }
}

const home: Home = {
    squr: 500,
    yard: {
        squr: 1999
    }
}

myHoues(home);
*/
// Nullish Coalescence
/*
function printMileage(mileage: number | null | undefined) {
    console.log(mileage ?? 'Not Available!');
    
}
*/
// printMileage(null);    // Prints `Mileage: Not Available`
// printMileage(0);       // Prints `Mileage: 0`
// Null Assertion
function getValue() {
    return 'Osama';
}
let value = getValue();
console.log('value length: ' + value.length);
