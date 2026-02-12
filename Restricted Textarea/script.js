document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('restrictedTextarea');
    const currentCountSpan = document.getElementById('currentCount');
    const maxCountSpan = document.getElementById('maxCount');
    const counterDiv = document.querySelector('.counter');
    const errorColor = document.querySelector('h1');

    const updateCounter = () => {
        const currentLength = textarea.value.length;
        const maxLength = textarea.getAttribute('maxlength');
        
        currentCountSpan.textContent = currentLength;
        
        if (currentLength >= maxLength) {

            counterDiv.classList.add('limit-reached');
            textarea.classList.add('error-border');
            errorColor.classList.add('error-color');
        } else {
            counterDiv.classList.remove('limit-reached');
            textarea.classList.remove('error-border');
            errorColor.classList.remove('error-color');
        }
    };

    textarea.addEventListener('input', updateCounter);
    

    updateCounter();
});
