import card from './Card';

export default class Deck {
    index
    deck
    constructor() {
        this.deck = new Array;
        this.index = 0;
    }

    createDeck() {

        //CLUBS

        const clubsone = new card('clubs', 1, 11, null);
        this.deck.push(clubsone);
        const clubstwo = new card('clubs', 2, 2, null);
        deck.push(clubstwo);
        const clubstree = new card('clubs', 3, 3, null);
        deck.push(clubstree);
        const clubsfour = new card('clubs', 4, 4, null);
        deck.push(clubsfour);
        const clubsfive = new card('clubs', 5, 5, null);
        deck.push(clubsfive);
        const clubssix = new card('clubs', 6, 6, null);
        deck.push(clubssix);
        const clubsseven = new card('clubs', 7, 7, null);
        deck.push(clubsseven);
        const clubseight = new card('clubs', 8, 8, null);
        deck.push(clubseight);
        const clubsnine = new card('clubs', 9, 9, null);
        deck.push(clubsnine);
        const clubsten = new card('clubs', 10, 10, null);
        deck.push(clubsten);
        const clubsjack = new card('clubs', 11, 10, null);
        deck.push(clubsjack);
        const clubsqueen = new card('clubs', 12, 10, null);
        deck.push(clubsqueen);
        const clubsking = new card('clubs', 13, 10, null);
        deck.push(clubsking);

        //DIAMONDS

        const dimondsone = new card('dimonds', 1, 11, null);
        deck.push(dimondsone);
        const dimondstwo = new card('dimonds', 2, 2, null);
        deck.push(dimondstwo);
        const dimondstree = new card('dimonds', 3, 3, null);
        deck.push(dimondstree);
        const dimondsfour = new card('dimonds', 4, 4, null);
        deck.push(dimondsfour);
        const dimondsfive = new card('dimonds', 5, 5, null);
        deck.push(dimondsfive);
        const dimondssix = new card('cdimonds', 6, 6, null);
        deck.push(dimondssix);
        const dimondsseven = new card('dimonds', 7, 7, null);
        deck.push(dimondsseven);
        const dimondseight = new card('dimonds', 8, 8, null);
        deck.push(dimondseight);
        const dimondsnine = new card('dimonds', 9, 9, null);
        deck.push(dimondsnine);
        const dimondsten = new card('dimonds', 10, 10, null);
        deck.push(dimondsten);
        const dimondsjack = new card('dimonds', 11, 10, null);
        deck.push(dimondsjack);
        const dimondsqueen = new card('dimonds', 12, 10, null);
        deck.push(dimondsqueen);
        const dimondsking = new card('dimonds', 13, 10, null);
        deck.push(dimondsking);

        //HEARTS

        const heartsone = new card('hearts', 1, 11, null);
        deck.push(heartsone);
        const heartstwo = new card('hearts', 2, 2, null);
        deck.push(heartstwo);
        const heartstree = new card('hearts', 3, 3, null);
        deck.push(heartstree);
        const heartsfour = new card('hearts', 4, 4, null);
        deck.push(heartsfour);
        const heartsfive = new card('hearts', 5, 5, null);
        deck.push(heartsfive);
        const heartssix = new card('hearts', 6, 6, null);
        deck.push(heartssix);
        const heartsseven = new card('hearts', 7, 7, null);
        deck.push(heartsseven);
        const heartseight = new card('hearts', 8, 8, null);
        deck.push(heartseight);
        const heartsnine = new card('hearts', 9, 9, null);
        deck.push(heartsnine);
        const heartsten = new card('hearts', 10, 10, null);
        deck.push(heartsten);
        const heartsjack = new card('hearts', 11, 10, null);
        deck.push(heartsjack);
        const heartsqueen = new card('hearts', 12, 10, null);
        deck.push(heartsqueen);
        const heartsking = new card('hearts', 13, 10, null);
        deck.push(heartsking);

        //SPADES

        const spadesone = new card('spades', 1, 11, null);
        deck.push(spadesone);
        const spadestwo = new card('spades', 2, 2, null);
        deck.push(spadestwo);
        const spadestree = new card('spades', 3, 3, null);
        deck.push(spadestree);
        const spadesfour = new card('spades', 4, 4, null);
        deck.push(spadesfour);
        const spadesfive = new card('spades', 5, 5, null);
        deck.push(spadesfive);
        const spadessix = new card('spades', 6, 6, null);
        deck.push(spadessix);
        const spadesseven = new card('spades', 7, 7, null);
        deck.push(spadesseven);
        const spadeseight = new card('spades', 8, 8, null);
        deck.push(spadeseight);
        const spadesnine = new card('spades', 9, 9, null);
        deck.push(spadesnine);
        const spadesten = new card('spades', 10, 10, null);
        deck.push(spadesten);
        const spadesjack = new card('spades', 11, 10, null);
        deck.push(spadesjack);
        const spadesqueen = new card('spades', 12, 10, null);
        deck.push(spadesqueen);
        const spadesking = new card('spades', 13, 10, null);
        deck.push(spadesking);
    }

    cardOnTop() {
        onTop = this.deck[index];
        index ++;
        return onTop;
    }

    shuffle() {
        this.deck.sort(() => Math.random() - 0.5);
    }

    getIndex() {
        return this.index;
    }
}
