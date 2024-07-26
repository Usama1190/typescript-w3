// TypeScript Classes
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.height * this.width;
    }
    Usama() {
        return `Hello Usama! ${this.width}, ${this.height}`;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    Usama() {
        return `Hello Usama! I am override ${this.width}, ${this.height}.`;
    }
}
const myRec = new Rectangle(13, 45);
console.log(myRec.getArea());
const mySqr = new Square(24);
console.log(mySqr.getArea());
export {};
