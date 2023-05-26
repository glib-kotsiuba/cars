let drivers = [];
let users = [];
let cars = [];


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInformation() {
        return `${this.name}, ${this.age} y.o.`;
    }
};

class Auto {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }
    getDriver(driver) {
        if (driver.age >= 18) {
            this.driver = driver;
            drivers.push(this);
        } else {
            document.write(`${driver.name} can't use ${this.brand}<br>`);
        }
    }
    getInfo() {
        return `Car: ${this.brand} model ${this.model} ${this.year} ${this.number}; Driver's name ${this.driver.showInformation()}`;
    }
}
let alex = new Human(`Alex`, 30),
    john = new Human(`John`, 24),
    steve = new Human(`Steve`, 15),
    tesla = new Auto(`Tesla`, `Y`, 2023, `AA4020YV`),
    bmw = new Auto(`BMW`, `X`, 2022, `BH3099KC`),
    porshe = new Auto(`Porshe`, `911`, 2021, `AA0867KK`);

users.push(alex, john, steve);
cars.push(tesla, bmw, porshe);
tesla.getDriver(alex);
bmw.getDriver(john);

document.write(`Users: ${users[0].showInformation()}; ${users[1].showInformation()}; ${users[2].showInformation()};<br>`);
porshe.getDriver(steve)
document.write(`Drivers Info:<br>`)
for (let index = 0; index < drivers.length; index++) {
    document.write(`${drivers[index].getInfo()}<br>`)
}