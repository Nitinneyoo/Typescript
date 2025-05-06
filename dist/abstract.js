"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Circle is rendering");
    }
}
let shape = new Circle(5, "red");
shape.render();
//# sourceMappingURL=abstract.js.map