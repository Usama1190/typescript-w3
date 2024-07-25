// TypeScript Enums
/* Numeric Enums - Default
By default, enums will initialize the first value to 0 and add 1 to
each additional value: */
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 0] = "North";
    CardinalDirection[CardinalDirection["East"] = 1] = "East";
    CardinalDirection[CardinalDirection["South"] = 2] = "South";
    CardinalDirection[CardinalDirection["West"] = 3] = "West";
})(CardinalDirection || (CardinalDirection = {}));
;
let currectDirection = CardinalDirection.North;
console.log(currectDirection);
export {};
