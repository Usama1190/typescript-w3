TypeScript Utility Types



Topic
1. Partial
2. Required
3. Record
4. Omit
5. Pick
6. Exclude
7. ReturnType
8. Parameters
9. Readonly




Declare an object kindPerson from the Person interface, where all the properties are optional:

interface Person {
  age: number;
  firstName: string;
  lastName: string;
}
            
let kindPerson: Partial<Person> = {};





Declare an object kindPerson from the Person interface, where all the properties are required.

interface Person {
  age: number;
  firstName: string;
  lastName?: string;
}
            
let kindPerson: Required<Person> = {
  age: 1800,
  firstName: "Santa",
  lastName: "Claus"
};





Complete the sentence:

Record<string, number> is equivalent to { [key: string]: number }