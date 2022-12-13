export default class Card{

    constructor(suit,number, value, link) {
        this.suit = suit;
        this.number=number;
        this.value = value;
        this.link=link;
    }

    getSuit() {
        return this.suit;
    }

    getNumer() {
        return this.number;
    }

    getValue() {
        return this.value;
    }

    getLink() {
        return this.link;
    }
}