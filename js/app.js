
const cards = document.querySelectorAll('.memory-card');

//To check what the card was clicked on
let hasFlippedCard = false;
let firstCard, secondCard;




function flipCard() {
   //instead of event.target I can use this key word
    this.classList.add('flip'); 

    if(!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard.dataset.framework); //displays the value of an attribute
        console.log(secondCard.dataset.framework);

        //Do the cards march ?
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            //It's a match!
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            //if it's not a match
            setTimeout(() => {  // thi gives me a time to flip the card
                firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}



cards.forEach(card => card.addEventListener('click', flipCard));