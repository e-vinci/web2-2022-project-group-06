export default class Card{
    constructor(suit,number, value, link) {
        this.suit = suit;
        this.number;
        this.value = value;
        this.link=link;
    }
    getSuit() {
        return this.suit;
    }
}