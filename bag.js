export class Bag {
    bag = [];
    extracted = [];
    constructor() {
        for (let i = 1; i <= 90; i++) {
            this.bag.push(i);
        }
    }

    suffleBag() {
        this.bag.sort(() => Math.random() - 0.5);
    }

    getNumber() {
        if (this.bag.length === 0) {
            return null;
        }
        let number = this.bag.pop();
        this.extracted.push(number);
        return number;
    }

    getExtracted() {
        return this.extracted;
    }

    getBag() {
        return this.bag;
    }

    resetBag() {
        this.bag = [];
        this.extracted = [];
        for (let i = 1; i <= 90; i++) {
            this.bag.push(i);
        }
    }
}