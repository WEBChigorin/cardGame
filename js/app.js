
//Variable
const cards = document.querySelectorAll('.memory-card');

//To check what the card was clicked on
let hasFlippedCard = false;
let firstCard, secondCard;



// EventListeners 
cards.forEach(card => card.addEventListener('click', flipCard));



//Functions

function flipCard() {
   //instead of event.target I can use this key word
    this.classList.add('flip'); 

    if(!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return; //it will stop it
    } 
        //second click
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch()
}

function checkForMatch() {
    //Do the cards march ?
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    //Using of ternary operator instead of if loop
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    setTimeout(() => {  // thi gives me a time to flip the card
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

