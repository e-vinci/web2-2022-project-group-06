/* eslint-disable */
import Deck from './Deck';

let check = false;

// const numberPlayer = 2;

const dealerDeck = [];
const playerDeck = [];
const deckParty = new Deck();
deckParty.createDeck();

// deckParty.shuffle();

function setBet(bet) {

}


setBet(3);


function startGame() {

    let playerScore = 0;
    let dealerScore = 0;
    check = false;

    const c = deckParty.cardOnTop();
    playerDeck.push(c);
    const d = deckParty.cardOnTop();
    playerDeck.push(d);
    const e = deckParty.cardOnTop();
    dealerDeck.push(e);
    const f = deckParty.cardOnTop();
    dealerDeck.push(f);
    
    while ( playerScore <=21 && dealerScore <= 21 && check===false) {
        playerScore = verifyPlayerScore();
        dealerScore = verifyDealerScore();


    }

    if (playerScore < dealerScore) {
        console.log("le dealer a gagné");
    } else {
        console.log("le joueur a gagné");
    }

}
// startGame();

function hitACard() {
    console.log(deckParty.getDeck());
    playerDeck.push(deckParty.cardOnTop());
    console.log("ICIICIICCIC");
    console.log(playerDeck[0].getSuit());
    console.log(playerDeck[0].getValue());
}


function verifyPlayerScore() {
    let score =0;
    for (let index = 0; index < playerDeck.length; index+=1) {
        score += playerDeck[index].getValue(); 
    }
    return score;
}

function verifyDealerScore() {
    let score =0;
    for (let index = 0; index < playerDeck.length; index+=1) {
        score += dealerDeck[index].getValue(); 
    }
    return score;
}

export default hitACard;
