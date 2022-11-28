import card from './Card';
import deck from './Deck';

const numberPlayer = 2;
let dealerDeck = new Array;
let playerDeck = new Array;
let deckParty = new deck();

function setBet(bet) {

}

function startGame() {
    c = deckParty.cardOnTop();
    playerDeck.push(c);
    c = deckParty.cardOnTop();
    playerDeck.push(c);
    c = deckParty.cardOnTop();
    dealerDeck.push(c);
    c = deckParty.cardOnTop();
    dealerDeck.push(c);
}

function hitACard() {

}

