document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tabButton');
    const tabContents = document.querySelectorAll('.tabContent');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    const cookieContainer = document.querySelector('.cookieContainer');
    const acceptButton = cookieContainer.querySelector('button');

    //cookie consent//
    acceptButton.addEventListener('click', () => {
        cookieContainer.style.display = 'none';
    });
});
