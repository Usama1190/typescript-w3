TypeScript Classes



Topic
1. Members: Types
2. Members: Visibility
3. Parameter Properties
4. Readonly
5. Inheritance: Implements
6. Inheritance: Extends
7. Override
8. Abstract Classes





Specify that Person.name can only be accessed within the class, but that the method Person.getName() can be accessed anywhere:

class Person {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}