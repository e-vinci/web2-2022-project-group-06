/* eslint-disable */
import Deck from './Deck';

let check = false;
let hit = true;
let playerScore=0;
let dealerScore=0;

// const numberPlayer = 2;

const dealerDeck = [];
const playerDeck = [];
const deckParty = new Deck();
deckParty.createDeck();
deckParty.shuffle();


// deckParty.shuffle();

function setBet(bet) {
    startGame();
    console.log(playerDeck);


}



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
    
    while ( dealerScore <17) {
        playerScore = verifyPlayerScore();
        dealerScore += verifyDealerScore();
        dealerDeck.push(deckParty.cardOnTop());


    }

    if (playerScore < dealerScore) {
        console.log("le dealer a gagné");
    } else {
        console.log("le joueur a gagné");
    }

}
// startGame();

function hitACard() {
    if (hit=false) return;
    console.log(deckParty.getDeck());
    const newCard = deckParty.cardOnTop();
    playerDeck.push(newCard);
    if (verifyPlayerScore>21) {
        hit=false;
    }
    console.log(newCard);
    return newCard;
}

function checkStay() {
    check=true;
    hit=false;

    
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


export {hitACard, setBet, startGame, checkStay};
