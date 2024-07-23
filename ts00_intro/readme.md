Before Introduction we learn few steps for TypeScript to run in terminal

1. First of all we create a file with the extension of .ts

2. Second step we open the terminal remember that the ts file lie in the same folder. We write the command tsc --init in the terminal. To see your folder added one file named 'tsconfig.json'.

3. Third step we open the tsconfig.json file and edited three lines of code. 

1st is edited line no 14. which is target='es2016' to update with target='ES2022' or the latest version. 

2nd is edited is line no 28. Which is module='common.js' to update with module='NodeNext'. This is the latest version. 

3rd and last is is edited is line no 30. Which is moduleResulotion='common.js' to update with moduleResulotion='NodeNext'.

4. Fouth step we open the terminal remember that the ts file lie in the same folder. We write the command npm init -y in the terminal. To see your folder added another file named 'package.json'.

5. Third step we open the package.json file and edited one line of code. In the JSON object after the line no 05. we click the enter key and write "type" which is the key of JSON object and the value its "module".


Introduction

TypeScript is JavaScript with added syntax for types.