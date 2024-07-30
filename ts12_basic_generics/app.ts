// TypeScript Basic Generics



// Functions
/*
function usama<U, S>(var1: U, var2: S): string {
    return `My first var is: ${var1}, and second var is: ${var2}.`;
}

let returnValue: string = usama<string, string>('Usama', 'Israr');

console.log(returnValue);
*/


/*
function createPair<S, T>(v1: S, v2: T) {
    return [v1, v2];
}

console.log(createPair<string, number>('hello', 23));  // ['hello', 23]
*/





// Classes
/*
class NamedValue<T> {
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

let value = new NamedValue<number>('myNumber');

value.setValue(12);

console.log(value.toString());    // MyNumber: 12
*/






// Type Aliase
/*
type Wrapped<T> = T;

const myVar: Wrapped<string> = 'Usama'; */

/*
type Wrapped<T> = { value: T };

const WrappedValue: Wrapped<number> = { value: 12 };
*/


interface Wrapped<T> { value: T };

const WrappedValue: Wrapped<number> = { value: 12 };





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
function createLoggedPair<S extends string | number, 
        T extends string | number>(v1: S, v2: T): [S, T] {

    console.log(`Creating pair: v1 = '${v1}', v2 = '${v2}'.`);

    return [v1, v2];
    
}

let returnValue = createLoggedPair<string, number>('usama', 34);

console.log(returnValue);
