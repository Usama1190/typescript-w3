TypeScript Basic Generics




Topic
1. Functions
2. Classes
3. Type Aliases
4. Default Value
5. Extends




Complete the Generic:


function createPair<typeX , typeY>(x: typeX, y: typeY): [typeX, typeY] {
  return [x, y];
}

console.log(createPair<string, number>('Meaning', 42));