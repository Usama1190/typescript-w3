// TypeScript Classes
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    ;
}
const rectangle = new Rectangle(20, 10);
console.log(rectangle);
console.log(rectangle.getArea());
export {};
