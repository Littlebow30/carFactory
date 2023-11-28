function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDescription = () => {
        console.log(`The ${make} ${model} was made in ${year}!`);
    };
    function ElectricCar (make, model, year, range) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.range = `${range} miles`;
    }
    if (ElectricCar) {
        ElectricCar()
    }
    else {
        this.getDescription();
    }}

const honda = new Car('honda', 'civic', 1992);
const tesla = new Car ('tesla', 'model y', 2019, 300)

console.log(honda);
honda.getDescription();

