// TypeScript 5.x Updates



// Template Literal Types
/*
type Color = 'red' | 'green' | 'blue';

type HexColor<t extends Color> = `#${string}`;

// Usage
let myColor: HexColor<'blue'> = '#0000ff';

console.log(myColor);
*/





// Index Signature Labels
/*
type DynamicObject = { [key: string as `dynamic_${string}`]: string };

// Usage
let obj: DynamicObject = { dynamic_key: "value"};

console.log(obj);
*/