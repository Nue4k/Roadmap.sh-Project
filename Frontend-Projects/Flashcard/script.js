const flashcards = document.querySelectorAll('.flashcard');
const progressBarFill = document.querySelector('.progress-bar-fill');
const progressBarText = document.querySelector('.progress-bar-text');
const prevButton = document.querySelectorAll('button')[0];
const showAnswerButton = document.querySelectorAll('button')[1];
const nextButton = document.querySelectorAll('button')[2];

let currentCardIndex = 0;
const totalCards = flashcards.length;

function updateUI() {
    flashcards.forEach((card, index) => {
        if (index === currentCardIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
            card.classList.remove('flip');
        }
    });

    prevButton.disabled = currentCardIndex === 0;
    nextButton.disabled = currentCardIndex === totalCards - 1;
    
    prevButton.style.opacity = currentCardIndex === 0 ? '0.5' : '1';
    nextButton.style.opacity = currentCardIndex === totalCards - 1 ? '0.5' : '1';
    prevButton.style.cursor = currentCardIndex === 0 ? 'not-allowed' : 'pointer';
    nextButton.style.cursor = currentCardIndex === totalCards - 1 ? 'not-allowed' : 'pointer';

    const currentCardNum = currentCardIndex + 1;
    const progressPercentage = (currentCardNum / totalCards) * 100;
    
    progressBarFill.style.width = `${progressPercentage}%`;
    progressBarText.textContent = `${Math.round(progressPercentage)}%`;
}

function nextCard() {
    if (currentCardIndex < totalCards - 1) {
        currentCardIndex++;
        updateUI();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateUI();
    }
}

function toggleFlip() {
    const currentCard = flashcards[currentCardIndex];
    currentCard.classList.toggle('flip');
}

nextButton.addEventListener('click', nextCard);
prevButton.addEventListener('click', prevCard);
showAnswerButton.addEventListener('click', toggleFlip);

flashcards.forEach(card => {
    card.addEventListener('click', toggleFlip);
});

updateUI();
