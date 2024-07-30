// TypeScript Basic Generics
;
const WrappedValue = { value: 12 };
// Default Values
/*
class NamedValue<T = string> {
    public _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}.`;
    }
}

let value = new NamedValue('myNumber');

value.setValue('usama');

console.log(value.toString());    // MyNumber: 12
*/
// Extends
function createLoggedPair(v1, v2) {
    console.log(`Creating pair: v1 = '${v1}', v2 = '${v2}'.`);
    return [v1, v2];
}
let returnValue = createLoggedPair('usama', 34);
console.log(returnValue);
returnValue.push('Samiya');
returnValue.push(45);
console.log(returnValue);
export {};
