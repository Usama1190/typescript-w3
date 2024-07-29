// TypeScript Enums
// Numeric Enum - Default
// enum CardinalDirection {
//     North,
//     East,
//     South,
//     West
// }
// let currentDirection = CardinalDirection.North;
// North is the first value so it logs '0'
// console.log(currentDirection);
// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North';
// Error: Type '"North"' is not assignable to type 'CardinalDirection'.ts(2322)
// Numeric Enum - Initialized
// enum CardinalDirection {
//     North = 1,
//     East,
//     South,
//     West
// }
// logs 1 since we initialized the first value to something other than '0'
// console.log(CardinalDirection.North);
// logs 4 as it continued on from the initial '1' value
// console.log(CardinalDirection.West);
// Numeric Enum - Fully Initialized
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BedRequest = 400
// }
// logs 404
// console.log(StatusCodes.NotFound);
// logs 200
// console.log(StatusCodes.Success);
// String Enums
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection["North"] = "North";
    CardinalDirection["East"] = "East";
    CardinalDirection["South"] = "South";
    CardinalDirection["West"] = "West";
})(CardinalDirection || (CardinalDirection = {}));
// logs North
console.log(CardinalDirection.North);
// logs South
console.log(CardinalDirection.South);
export {};
