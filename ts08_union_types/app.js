// TypeScript Union Types
/* Union | (OR)
Using the | we are saying our parameter is a string or number: */
function statusCode(code) {
    console.log(`My status code is ${code}.`);
}
statusCode(404);
statusCode('404');
export {};
