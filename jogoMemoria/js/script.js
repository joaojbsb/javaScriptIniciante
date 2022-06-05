const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let nAttempts = document.querySelector('.attempts');
let attempts = 0;

function flipCard(){
    if (lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
};

function checkForMath() {
    attempts = attempts + 1;
    console.log(attempts);
    console.log(nAttempts)
    nAttempts.innerHTML = "Número de Tentativas = " + attempts;
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();

};

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
};

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
};

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

( //função para embaralhar as cartas, dentro de parentese e com parensetes no final ela é invocada toda vez no inicio
function shuffle(){
    cards.forEach((card) => {
       let randomPosition = Math.floor(Math.random() * 12);
       card.style.order = randomPosition;
    })
}
)();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})