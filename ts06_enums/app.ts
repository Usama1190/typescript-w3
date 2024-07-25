// TypeScript Enums

/* Numeric Enums - Default
By default, enums will initialize the first value to 0 and add 1 to 
each additional value: */

enum CardinalDirection {
    North,
    East,
    South,
    West
};

let currectDirection = CardinalDirection.North;

console.log(currectDirection);
