TypeScript Functions


Topic
1. Return Type
2. Void Return Type
3. Parameters
4. Optional Parameters
5. Default Parameters
6. Named Parameters
7. Rest Parameters
8. Type Alias





Create a function that returns the string "Learning is Fun!", with the return type explicitly defined:

function myFunc(): string {
  return "Learning is Fun!";
}





Create a function that specifically does not return a value:

function myFunc(): void {
  console.log("Learning is Fun!");
}





Create a function with 2 parameters (myVar1 and myVar2), that are both strings:


function myFunc( myVar1: string, myVar2: string) {
  return(myVar1 + myVar2);
}





Create a function with 2 parameters (myVar1 and myVar2,in that order), that are both strings.

Specify that myVar2 should be optional:

function myFunc( myVar1: string, myVar2?: string) {
  return(myVar1 + (myVar2 || ""));
}