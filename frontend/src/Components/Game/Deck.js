/* eslint-disable */
import Card from './Card';

export default class Deck {

    constructor() {
        this.deck = [];
        this.index = 0;
    }

    createDeck() {

        // CLUBS

        const clubsone = new Card('clubs', 1, 11, 'Cards/cardClubsA.png');
        this.deck.push(clubsone);
        const clubstwo = new Card('clubs', 2, 2, 'Cards/cardClubs2.png');
        this.deck.push(clubstwo);
        const clubstree = new Card('clubs', 3, 3, 'Cards/cardClubs3.png');
        this.deck.push(clubstree);
        const clubsfour = new Card('clubs', 4, 4, 'Cards/cardClubs4.png');
        this.deck.push(clubsfour);
        const clubsfive = new Card('clubs', 5, 5, 'Cards/cardClubs5.png');
        this.deck.push(clubsfive);
        const clubssix = new Card('clubs', 6, 6, 'Cards/cardClubs6.png');
        this.deck.push(clubssix);
        const clubsseven = new Card('clubs', 7, 7, 'Cards/cardClubs7.png');
        this.deck.push(clubsseven);
        const clubseight = new Card('clubs', 8, 8, 'Cards/cardClubs8.png');
        this.deck.push(clubseight);
        const clubsnine = new Card('clubs', 9, 9, 'Cards/cardClubs9.png');
        this.deck.push(clubsnine);
        const clubsten = new Card('clubs', 10, 10, 'Cards/cardClubs10.png');
        this.deck.push(clubsten);
        const clubsjack = new Card('clubs', 11, 10, 'Cards/cardClubsJ.png');
        this.deck.push(clubsjack);
        const clubsqueen = new Card('clubs', 12, 10, 'Cards/cardClubsQ.png');
        this.deck.push(clubsqueen);
        const clubsking = new Card('clubs', 13, 10, 'Cards/cardClubsK.png');
        this.deck.push(clubsking);

        // DIAMONDS

        const dimondsone = new Card('dimonds', 1, 11, 'Cards/cardDiamondsA.png');
        this.deck.push(dimondsone);
        const dimondstwo = new Card('dimonds', 2, 2, 'Cards/cardDiamonds2.png');
        this.deck.push(dimondstwo);
        const dimondstree = new Card('dimonds', 3, 3, 'Cards/cardDiamonds3.png');
        this.deck.push(dimondstree);
        const dimondsfour = new Card('dimonds', 4, 4, 'Cards/cardDiamonds4.png');
        this.deck.push(dimondsfour);
        const dimondsfive = new Card('dimonds', 5, 5, 'Cards/cardDiamonds5.png');
        this.deck.push(dimondsfive);
        const dimondssix = new Card('cdimonds', 6, 6, 'Cards/cardDiamonds6.png');
        this.deck.push(dimondssix);
        const dimondsseven = new Card('dimonds', 7, 7, 'Cards/cardDiamonds7.png');
        this.deck.push(dimondsseven);
        const dimondseight = new Card('dimonds', 8, 8, 'Cards/cardDiamonds8.png');
        this.deck.push(dimondseight);
        const dimondsnine = new Card('dimonds', 9, 9, 'Cards/cardDiamonds9.png');
        this.deck.push(dimondsnine);
        const dimondsten = new Card('dimonds', 10, 10, 'Cards/cardDiamonds10.png');
        this.deck.push(dimondsten);
        const dimondsjack = new Card('dimonds', 11, 10, 'Cards/cardDiamondsJ.png');
        this.deck.push(dimondsjack);
        const dimondsqueen = new Card('dimonds', 12, 10, 'Cards/cardDiamondsQ.png');
        this.deck.push(dimondsqueen);
        const dimondsking = new Card('dimonds', 13, 10, 'Cards/cardDiamondsK.png');
        this.deck.push(dimondsking);

        // HEARTS

        const heartsone = new Card('hearts', 1, 11, 'Cards/cardHeartsA.png');
        this.deck.push(heartsone);
        const heartstwo = new Card('hearts', 2, 2, 'Cards/cardHearts2.png');
        this.deck.push(heartstwo);
        const heartstree = new Card('hearts', 3, 3, 'Cards/cardHearts3.png');
        this.deck.push(heartstree);
        const heartsfour = new Card('hearts', 4, 4, 'Cards/cardHearts4.png');
        this.deck.push(heartsfour);
        const heartsfive = new Card('hearts', 5, 5, 'Cards/cardHearts5.png');
        this.deck.push(heartsfive);
        const heartssix = new Card('hearts', 6, 6, 'Cards/cardHearts6.png');
        this.deck.push(heartssix);
        const heartsseven = new Card('hearts', 7, 7, 'Cards/cardHearts7.png');
        this.deck.push(heartsseven);
        const heartseight = new Card('hearts', 8, 8, 'Cards/cardHearts8.png');
        this.deck.push(heartseight);
        const heartsnine = new Card('hearts', 9, 9, 'Cards/cardHearts9.png');
        this.deck.push(heartsnine);
        const heartsten = new Card('hearts', 10, 10, 'Cards/cardHearts10.png');
        this.deck.push(heartsten);
        const heartsjack = new Card('hearts', 11, 10, 'Cards/cardHeartsJ.png');
        this.deck.push(heartsjack);
        const heartsqueen = new Card('hearts', 12, 10, 'Cards/cardHeartsQ.png');
        this.deck.push(heartsqueen);
        const heartsking = new Card('hearts', 13, 10, 'Cards/cardHeartsK.png');
        this.deck.push(heartsking);

        // SPADES

        const spadesone = new Card('spades', 1, 11, 'Cards/cardSpadesA.png');
        this.deck.push(spadesone);
        const spadestwo = new Card('spades', 2, 2, 'Cards/cardSpades2.png');
        this.deck.push(spadestwo);
        const spadestree = new Card('spades', 3, 3, 'Cards/cardSpades3.png');
        this.deck.push(spadestree);
        const spadesfour = new Card('spades', 4, 4, 'Cards/cardSpades4.png');
        this.deck.push(spadesfour);
        const spadesfive = new Card('spades', 5, 5, 'Cards/cardSpades5.png');
        this.deck.push(spadesfive);
        const spadessix = new Card('spades', 6, 6, 'Cards/cardSpades6.png');
        this.deck.push(spadessix);
        const spadesseven = new Card('spades', 7, 7, 'Cards/cardSpades7.png');
        this.deck.push(spadesseven);
        const spadeseight = new Card('spades', 8, 8, 'Cards/cardSpades8.png');
        this.deck.push(spadeseight);
        const spadesnine = new Card('spades', 9, 9, 'Cards/cardSpades9.png');
        this.deck.push(spadesnine);
        const spadesten = new Card('spades', 10, 10, 'Cards/cardSpades10.png');
        this.deck.push(spadesten);
        const spadesjack = new Card('spades', 11, 10, 'Cards/cardSpadesJ.png');
        this.deck.push(spadesjack);
        const spadesqueen = new Card('spades', 12, 10, 'Cards/cardSpadesQ.png');
        this.deck.push(spadesqueen);
        const spadesking = new Card('spades', 13, 10, 'Cards/cardSpadesK.png');
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
