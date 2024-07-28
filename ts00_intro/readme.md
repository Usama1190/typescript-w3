Before Introduction I learn few steps for TypeScript to run in terminal

1. First of all I create a file with the extension of .ts

2. Second step I open the terminal remember that the ts file lie in the same folder. I write the command tsc --init in the terminal. To see your folder added one file named 'tsconfig.json'.

3. Third step I open the tsconfig.json file and edited three lines of code. 

1st is edited line no 14. which is target='es2016' to update with target='ES2022' or the latest version. 

2nd is edited is line no 28. Which is module='common.js' to update with module='NodeNext'. This is the latest version. 

3rd and last is is edited is line no 30. Which is moduleResulotion='common.js' to update with moduleResulotion='NodeNext'.

4. Fourth step I open the terminal remember that the ts file lie in the same folder. I write the command npm init -y in the terminal. To see your folder added another file named 'package.json'.

5. Third step I open the package.json file and edited one line of code. In the JSON object after the line no 05. I click the enter key and write "type" which is the key of JSON object and the value its "module".

Now I will able to write the command tsc && node app.js in the terminal. Which will added one file app.js and show result in the command line.

tsc means TypeScript Compiler ( meri filename.ts file ko compile kardo ).


_________________________________________________________________________

TypeScript Tutorial in W3schools Website: https://www.w3schools.com


Topic: Introduction
TypeScript allows developers to add  'types'  to JavaScript.
JavaScript is a  'loosely'  typed language.



Topic: Get Started
The TypeScript compiler can be configured with which file?
'tsconfig.json'


_________________________________________________________________________
