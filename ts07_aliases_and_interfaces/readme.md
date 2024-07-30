TypeScript Type Aliases and Interfaces



Topic
1. Type Aliases
2. Interfaces
3. Extending Interfaces



Create a Type Alias for a string, called carType:

type carType = string





Create an interface called myInterface, with the property myProp as a string:

interface myInterface {
  myProp: string
}




Extend the myInterface interface from last exercise, and add a property myExtProp as a number:

interface myExtInterface extends myInterface {
  myExtProp: number
}