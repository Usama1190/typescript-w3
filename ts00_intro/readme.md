Before Introduction I learn few steps for TypeScript to run in terminal

1. First of all I create a file with the extension of .ts

2. Second step I open the terminal remember that the ts file lie in the same folder. I write the command tsc --init in the terminal. To see your folder added one file named 'tsconfig.json'.

3. Third step I open the tsconfig.json file and edited three lines of code. 

1st is edited line no 14. which is target='es2016' to update with target='ES2022' or the latest version. 

2nd is edited is line no 28. Which is module='common.js' to update with module='NodeNext'. This is the latest version. 

3rd and last is is edited is line no 30. Which is moduleResulotion='common.js' to update with moduleResulotion='NodeNext'.

4. Fouth step I open the terminal remember that the ts file lie in the same folder. I write the command npm init -y in the terminal. To see your folder added another file named 'package.json'.

5. Third step I open the package.json file and edited one line of code. In the JSON object after the line no 05. I click the enter key and write "type" which is the key of JSON object and the value its "module".

Now I will able to write the command tsc && node app.js in the terminal. Which will added one file app.js and show result in the command line.

tsc means TypeScript Compiler ( meri filename.ts file ko compile kardo ).



Introduction

TypeScript is JavaScript with added syntax for types.

________________________________________________________________________

What is TypeScript?
TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.


________________________________________________________________________

Why should I use TypeScript?
JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.

________________________________________________________________________


How do I use TypeScript?
A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.

The next section shows how to get the compiler setup for a local project.

Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!


TypeScript allows developers to add  "types"  to JavaScript.
JavaScript is a  "loosely"  typed language.




________________________________________________________________________

TypeScript Getting Started

TypeScript Compiler
TypeScript is transpiled into JavaScript using a compiler.

TypeScript being converted into JavaScript means it runs anywhere that JavaScript runs!


________________________________________________________________________

Installing the Compiler
TypeScript has an official compiler which can be installed through npm.

Learn more about npm, and how to get started here: What is npm?

Within your npm project, run the following command to install the compiler:

npm install typescript --save-dev
Which should give you an output similar to:

added 1 package, and audited 2 packages in 2s
found 0 vulnerabilities

The compiler is installed in the node_modules directory and can be run with: npx tsc.

npx tsc
Which should give you an output similar to:

Version 4.5.5
tsc: The TypeScript Compiler - Version 4.5.5
Followed by a list of all the Common Commands.

Configuring the compiler
By default the TypeScript compiler will print a help message when run in an empty project.

The compiler can be configured using a tsconfig.json file.

You can have TypeScript create tsconfig.json with the recommended settings with:

npx tsc --init
Which should give you an output similar to:

Created a new tsconfig.json with:
TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig.json
Here is an example of more things you could add to the tsconfig.json file:

{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}
You can open the file in an editor to add those options. This will configure the TypeScript compiler to transpile TypeScript files located in the src/ directory of your project, into JavaScript files in the build/ directory.

This is one way to quickly get started with TypeScript. There are many other options available such as a create-react-app template, a node starter project, and a webpack plugin.


Topic: Get Started
The TypeScript compiler can be configured with which file?
'tsconfig.json'