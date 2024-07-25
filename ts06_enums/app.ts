// TypeScript Enums

/* Numeric Enums - Default
By default, enums will initialize the first value to 0 and add 1 to 
each additional value: */

// enum CardinalDirection {
//     North,
//     East,
//     South,
//     West
// };

// let currectDirection = CardinalDirection.North;

// North is the first value so it logs 0
// console.log(currectDirection);

// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North'; 
// Error: "North" is not assignable to type 'CardinalDirections'.





/* Numeric Enums - Initialized
You can set the value of the first numeric enum and have it auto 
increment from that: */

// enum CardinalDirection {
//     North = 1,
//     East,
//     South,
//     West
// }

// logs 1 since we initialized the first value to something other than 0
// console.log(CardinalDirection.North);

// logs 4 as it continued on from the initial '1' value
// console.log(CardinalDirection.West);





/* Numeric Enums - Fully Initialized
You can assign unique number values for each enum value. Then the 
values will not incremented automatically: */

// enum StatusCode {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BedRequest = 400
// }

// logs 404
// console.log(StatusCode.NotFound);

// logs 200
// console.log(StatusCode.Success);






/* String Enums
Enums can also contain strings. This is more common than numeric enums, 
because of their readability and intent. */

// enum CardinalDirection {
//     North = 'North',
//     East = 'East', 
//     South = 'South',
//     West = 'West'
// }

// logs North
// console.log(CardinalDirection.North);

// logs West
// console.log(CardinalDirection.West);





/* Create an enum called myEnum, with 2 constants (myFirstConst, 
mySecondConst) with default values:


enum myEnum {
    myFirstConst,  
    mySecondConst
}; 



Create an enum called myEnum, with 2 constants (myFirstConst, 
mySecondConst) with the string values "first" and "second":


enum myEnum {
    myFirstConst = "first",
    mySecondConst = "secong"
};
*/