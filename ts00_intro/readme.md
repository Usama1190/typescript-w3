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
