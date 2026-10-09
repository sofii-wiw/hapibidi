document.addEventListener('DOMContentLoaded', () => {
    const blowButton = document.getElementById('blow-candle');
    const candle = document.querySelector('.candle');
    const confettiContainer = document.getElementById('confetti-container');

    blowButton.addEventListener('click', () => {
        if (candle) {
            candle.style.display = 'none';
        }
        if (confettiContainer) {
            confettiContainer.classList.add('active');
        }
        blowButton.disabled = true;
        setTimeout(() => {
            window.location.href = 'pic.html';
        }, 2500);
    });
});