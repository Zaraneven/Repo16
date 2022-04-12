class Car{
    constructor(manufacturer, model, production) {
        this.manufacturer = "BMW";
        this.model = "BMW X3";
        this.production = 2003;
    }
}
const bmw = new Car("BMW", "BMW X3", 2003);

console.log(bmw.manufacturer);
console.log(bmw.model);
console.log(bmw.production);
module.exports = Car;