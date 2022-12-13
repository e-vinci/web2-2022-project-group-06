
/* eslint-disable */
import Deck from './Deck';

let check = false;
var hitAvailable = true;
let splitAvailable = false;
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
    if (playerDeck[0]==playerDeck[1]) splitAvailable=true;
    const e = deckParty.cardOnTop();
    dealerDeck.push(e);
    const f = deckParty.cardOnTop();
    dealerDeck.push(f);
    /** 
    
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
*/
}
// startGame();

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
    const newCardDealer=[]
    while ( dealerScore <17 && dealerScore<playerScore) {
        const cardDealer = deckParty.cardOnTop()
        dealerDeck.push(cardDealer);
        newCardDealer.push(cardDealer);
        dealerScore=verifyDealerScore;
    }
    winner();
    return newCardDealer;
    
}

function winner() {
    dealerScore = verifyDealerScore();
    playerScore = verifyPlayerScore();

    if (playerScore > 21 && dealerScore < 21) {
        console.log("dealer won");
    }
    if (playerScore < 21 && dealerScore > 21) {
        console.log("player won");
    }
    if (dealerScore >= playerScore) {
        console.log("dealer won");
    } else {
        console.log("player won");
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


export {hitACard, setBet, startGame, checkStay, hitAvailable, playerDeck, check,splitAvailable, dealerDeck};