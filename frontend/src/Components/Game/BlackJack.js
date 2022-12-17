/* eslint-disable */
import Deck from './Deck';

let playerScore;
let dealerScore;
let whothewinner;
let amountChips =150;
let dealerDeck = [];
let playerDeck = [];
let deckParty = new Deck();

function setBet(bet) {

    dealerDeck = [];
    playerDeck = [];
 
    deckParty = new Deck();
    deckParty.createDeck();
    deckParty.shuffle();
    playerScore=0;
    dealerScore=0;
    whothewinner=null;
    startGame();
    
}



function startGame() {

    const c = deckParty.cardOnTop();
    playerDeck.push(c);
    const d = deckParty.cardOnTop();
    playerDeck.push(d);
    const e = deckParty.cardOnTop();
    dealerDeck.push(e);
    const f = deckParty.cardOnTop();
    dealerDeck.push(f);
    playerScore=verifyPlayerScore();
}


function hitACard() {
    const newCard = deckParty.cardOnTop();
    playerDeck.push(newCard);
    playerScore = verifyPlayerScore();
    if (playerScore>21) {
        winner();
    }
    return newCard;
}

function checkStay() {
    playerScore=verifyPlayerScore();
    dealerScore=verifyDealerScore();
    while ( dealerScore <17 && dealerScore<=playerScore) {
        const cardDealer = deckParty.cardOnTop()
        dealerDeck.push(cardDealer);
        dealerScore=verifyDealerScore();
    }
    winner();    
}

function winner() {
    dealerScore = verifyDealerScore();
    playerScore = verifyPlayerScore();

    if (playerScore > 21 && dealerScore <= 21) {
        whothewinner=1;
    } else if (playerScore <= 21 && dealerScore > 21) {
        whothewinner=2;
    } else if (dealerScore == playerScore) {
        whothewinner=3;
    } else if (dealerScore > playerScore) {
        whothewinner=1;
    } else {
        whothewinner=2;
    }
}


function verifyPlayerScore() {
    let score =0;
    let numberAS=0;
    for (let index = 0; index < playerDeck.length; index+=1) {
        if(playerDeck[index].getValue()==11) numberAS++;
        score += playerDeck[index].getValue(); 
    }
    for (let index = 0; index < numberAS; index++) {
        if (score >21) score=score-10;
        
    }
    return score;
}

function verifyDealerScore() {
    let score =0;
    let numberAS=0;
    for (let index = 0; index < dealerDeck.length; index+=1) {
        if(dealerDeck[index].getValue()==11) numberAS++;
        score += dealerDeck[index].getValue(); 
    }
    for (let index = 0; index < numberAS; index++) {
        if (score >21) score=score-10;
    }
    return score;
}


export {hitACard, setBet, checkStay, playerDeck, dealerDeck, whothewinner, playerScore, amountChips};