const imageContainer = document.querySelector('.image-container');
const rightButton = document.getElementById('right-button');

rightButton.addEventListener('click', () => {
    const images = imageContainer.querySelectorAll('img');
    const firstImage = images[0];
    const imageWidth = firstImage.clientWidth; // Ensure this is calculated after images are loaded

    imageContainer.style.transition = 'transform 0.3s ease-in-out';
    imageContainer.style.transform = `translateX(-${imageWidth}px)`;

    setTimeout(() => {
        imageContainer.appendChild(firstImage); // Move the first image to the end
        imageContainer.style.transition = 'none'; // Disable transition for instant reset
        imageContainer.style.transform = 'translateX(0)'; // Reset position
    }, 300);
});
