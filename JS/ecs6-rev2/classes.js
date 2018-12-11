class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name + 'LoL';
    }

    set name(value) {
        this._name = value;
    }
}

let p = new Person('Alberto');

console.log(p.name);

p.name = 'Sussumu';

console.log(p.name);


