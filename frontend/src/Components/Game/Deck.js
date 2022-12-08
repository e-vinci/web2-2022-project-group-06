/* eslint-disable */
import Card from './Card';

export default class Deck {

    constructor() {
        this.deck = [];
        this.index = 0;
    }

    createDeck() {

        // CLUBS

        const clubsone = new Card('clubs', 1, 11, null);
        this.deck.push(clubsone);
        const clubstwo = new Card('clubs', 2, 2, null);
        this.deck.push(clubstwo);
        const clubstree = new Card('clubs', 3, 3, null);
        this.deck.push(clubstree);
        const clubsfour = new Card('clubs', 4, 4, null);
        this.deck.push(clubsfour);
        const clubsfive = new Card('clubs', 5, 5, null);
        this.deck.push(clubsfive);
        const clubssix = new Card('clubs', 6, 6, null);
        this.deck.push(clubssix);
        const clubsseven = new Card('clubs', 7, 7, null);
        this.deck.push(clubsseven);
        const clubseight = new Card('clubs', 8, 8, null);
        this.deck.push(clubseight);
        const clubsnine = new Card('clubs', 9, 9, null);
        this.deck.push(clubsnine);
        const clubsten = new Card('clubs', 10, 10, null);
        this.deck.push(clubsten);
        const clubsjack = new Card('clubs', 11, 10, null);
        this.deck.push(clubsjack);
        const clubsqueen = new Card('clubs', 12, 10, null);
        this.deck.push(clubsqueen);
        const clubsking = new Card('clubs', 13, 10, null);
        this.deck.push(clubsking);

        // DIAMONDS

        const dimondsone = new Card('dimonds', 1, 11, null);
        this.deck.push(dimondsone);
        const dimondstwo = new Card('dimonds', 2, 2, null);
        this.deck.push(dimondstwo);
        const dimondstree = new Card('dimonds', 3, 3, null);
        this.deck.push(dimondstree);
        const dimondsfour = new Card('dimonds', 4, 4, null);
        this.deck.push(dimondsfour);
        const dimondsfive = new Card('dimonds', 5, 5, null);
        this.deck.push(dimondsfive);
        const dimondssix = new Card('cdimonds', 6, 6, null);
        this.deck.push(dimondssix);
        const dimondsseven = new Card('dimonds', 7, 7, null);
        this.deck.push(dimondsseven);
        const dimondseight = new Card('dimonds', 8, 8, null);
        this.deck.push(dimondseight);
        const dimondsnine = new Card('dimonds', 9, 9, null);
        this.deck.push(dimondsnine);
        const dimondsten = new Card('dimonds', 10, 10, null);
        this.deck.push(dimondsten);
        const dimondsjack = new Card('dimonds', 11, 10, null);
        this.deck.push(dimondsjack);
        const dimondsqueen = new Card('dimonds', 12, 10, null);
        this.deck.push(dimondsqueen);
        const dimondsking = new Card('dimonds', 13, 10, null);
        this.deck.push(dimondsking);

        // HEARTS

        const heartsone = new Card('hearts', 1, 11, null);
        this.deck.push(heartsone);
        const heartstwo = new Card('hearts', 2, 2, null);
        this.deck.push(heartstwo);
        const heartstree = new Card('hearts', 3, 3, null);
        this.deck.push(heartstree);
        const heartsfour = new Card('hearts', 4, 4, null);
        this.deck.push(heartsfour);
        const heartsfive = new Card('hearts', 5, 5, null);
        this.deck.push(heartsfive);
        const heartssix = new Card('hearts', 6, 6, null);
        this.deck.push(heartssix);
        const heartsseven = new Card('hearts', 7, 7, null);
        this.deck.push(heartsseven);
        const heartseight = new Card('hearts', 8, 8, null);
        this.deck.push(heartseight);
        const heartsnine = new Card('hearts', 9, 9, null);
        this.deck.push(heartsnine);
        const heartsten = new Card('hearts', 10, 10, null);
        this.deck.push(heartsten);
        const heartsjack = new Card('hearts', 11, 10, null);
        this.deck.push(heartsjack);
        const heartsqueen = new Card('hearts', 12, 10, null);
        this.deck.push(heartsqueen);
        const heartsking = new Card('hearts', 13, 10, null);
        this.deck.push(heartsking);

        // SPADES

        const spadesone = new Card('spades', 1, 11, null);
        this.deck.push(spadesone);
        const spadestwo = new Card('spades', 2, 2, null);
        this.deck.push(spadestwo);
        const spadestree = new Card('spades', 3, 3, null);
        this.deck.push(spadestree);
        const spadesfour = new Card('spades', 4, 4, null);
        this.deck.push(spadesfour);
        const spadesfive = new Card('spades', 5, 5, null);
        this.deck.push(spadesfive);
        const spadessix = new Card('spades', 6, 6, null);
        this.deck.push(spadessix);
        const spadesseven = new Card('spades', 7, 7, null);
        this.deck.push(spadesseven);
        const spadeseight = new Card('spades', 8, 8, null);
        this.deck.push(spadeseight);
        const spadesnine = new Card('spades', 9, 9, null);
        this.deck.push(spadesnine);
        const spadesten = new Card('spades', 10, 10, null);
        this.deck.push(spadesten);
        const spadesjack = new Card('spades', 11, 10, null);
        this.deck.push(spadesjack);
        const spadesqueen = new Card('spades', 12, 10, null);
        this.deck.push(spadesqueen);
        const spadesking = new Card('spades', 13, 10, null);
        this.deck.push(spadesking);
    }

    cardOnTop() {
        const onTop = this.deck[this.index];
        this.index += 1;
        return onTop;
    }

    shuffle() {
        this.deck.sort(() => Math.random() - 0.5);
    }

    getIndex() {
        return this.index;
    }

    getDeck() {
        return this.deck;
    }
}
