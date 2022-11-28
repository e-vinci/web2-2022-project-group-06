import card from './Card';
import deck from './Deck';

const btn1 = document.querySelector('#myBtn1');
const btn2 = document.querySelector('#myBtn2');

const numberPlayer = 2;
let slfj = new card();
let dealerDeck = new Array;
let playerDeck = new Array[card()];
let deckParty = new deck();
deckParty.shuffle();
playerDeck.push(deckParty[3]);

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
    btn1.addEventListener('click', hitACard);

}

function hitACard() {
    playerDeck.push(deckParty.cardOnTop());


}

function verifierScorePlayer() {
    let score =0;
    for (let index = 0; index < playerDeck.length; index++) {
        score += playerDeck[index];
        
    }
    return score;
}

