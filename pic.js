document.addEventListener('DOMContentLoaded', () => {
    const giftButton = document.getElementById('gift-button');
    const giftItems = document.querySelector('.gift-items');
    if (!giftButton || !giftItems) return;
    giftButton.addEventListener('click', () => {

        const isActive = giftItems.classList.toggle('active');

        if (isActive) {
            giftButton.textContent = '.';
        } else {
            giftButton.textContent = '.';
        }
    });
});