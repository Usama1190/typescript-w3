TypeScript Object Types

Topic
1. Syntax
2. Type Inference
3. Index Signature



Add the correct types for the object below:

const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};




Specify that the second property, called model, should be optional:

const car: { type: string, model?: string } = {
  type: "Toyota"
};