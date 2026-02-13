document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const currentContent = currentItem.querySelector('.accordion-content');

            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== currentItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = 0;
                }
            });

            currentItem.classList.toggle('active');

            if (currentItem.classList.contains('active')) {
                currentContent.style.maxHeight = currentContent.scrollHeight + "px";
            } else {
                currentContent.style.maxHeight = 0;
            }
        });
    });
});
