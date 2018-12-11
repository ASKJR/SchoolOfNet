export class Person {
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

export const pi = Math.PI.toFixed(2);