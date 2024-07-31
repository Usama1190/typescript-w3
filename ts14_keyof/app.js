// TypeScript keyof
function usama(property, value) {
    return { [property]: value };
}
let myObj = {
    prop1: 'Osama',
    prop2: 'Ahmed'
};
let myVar = usama(2, 'landcuriers');
console.log(myVar);
export {};
