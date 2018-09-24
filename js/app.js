
const cards = document.querySelectorAll('.memory-card');
console.log(cards);

function flipCard() {
   //instead of event.target I can use this key word
    this.classList.toggle('flip'); //this method add or remove class .flip

}

cards.forEach(card => card.addEventListener('click', flipCard));