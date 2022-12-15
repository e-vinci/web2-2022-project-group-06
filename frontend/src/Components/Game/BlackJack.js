
/* eslint-disable */
import Deck from './Deck';

let check = false;
var hitAvailable = true;
var playerScore=0;
var dealerScore=0;
var whothewinner=null;
var amountChips =150;

const dealerDeck = [];
const playerDeck = [];
const deckParty = new Deck();
deckParty.createDeck();
deckParty.shuffle();

function setBet(bet) {
    startGame();
    
}



function startGame() {

    check = false;

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
    if (hitAvailable==false) return;
    const newCard = deckParty.cardOnTop();
    playerDeck.push(newCard);
    playerScore = verifyPlayerScore();
    if (playerScore>21) {
        hitAvailable=false;
        winner();
    }
    console.log(newCard);
    return newCard;
}

function checkStay() {
    check=true;
    playerScore=verifyPlayerScore();
    dealerScore=verifyDealerScore();
    while ( dealerScore <17 && dealerScore<=playerScore) {
        const cardDealer = deckParty.cardOnTop()
        dealerDeck.push(cardDealer);
        console.log("passage1");
        console.log(dealerScore);
        dealerScore=verifyDealerScore();
    }
    winner();    
}

function winner() {
    dealerScore = verifyDealerScore();
    playerScore = verifyPlayerScore();

    if (playerScore > 21 && dealerScore <= 21) {
        console.log("dealer won");
        whothewinner=1;
    } else if (playerScore <= 21 && dealerScore > 21) {
        console.log("player won");
        whothewinner=2;
    } else if (dealerScore == playerScore) {
        console.log("draw no winner");
        whothewinner=3;
    } else if (dealerScore > playerScore) {
        console.log("dealer won");
        whothewinner=1;
    } else {
        console.log("player won");
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
    console.log(score);
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
        if (score >21) score-10;
        
    }
    return score;
}


export {hitACard, setBet, checkStay, playerDeck, dealerDeck, whothewinner, playerScore, amountChips};