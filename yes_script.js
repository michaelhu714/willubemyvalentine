// Function to create a falling heart
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall speed
    heart.style.fontSize = Math.random() * 30 + 20 + 'px'; // Random size
    document.querySelector('.hearts-container').appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000); // Adjust based on animation duration
}

// Create hearts every 300ms
setInterval(createHeart, 300);