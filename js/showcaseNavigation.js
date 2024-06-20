document.addEventListener("DOMContentLoaded", function() {
    const rightButton = document.getElementById('right-button');
    const leftButton = document.getElementById('left-button')
    const imageContainer = document.querySelector('.image-container');
    let shiftPercentage = 0; // Track the cumulative shift percentage

    rightButton.addEventListener('click', function() {
        shiftPercentage += 25; // Shift the view by 100% of the container width to the left

        if(shiftPercentage >= 100){
            shiftPercentage = 0;
        }

        // Apply a smooth transition
        imageContainer.style.transition = 'transform 0.5s ease-in-out';
        imageContainer.style.transform = `translateX(-${shiftPercentage}%)`;

        // Check if we have completed a full cycle of images
        if (shiftPercentage === 100 * (imageContainer.children.length - 1)) {
            imageContainer.addEventListener('transitionend', function() {
                // Reset the container position without animation
                imageContainer.style.transition = 'none';
                imageContainer.style.transform = 'translateX(0)';

                // Reorder the images by moving the first image to the end
                const firstImage = imageContainer.removeChild(imageContainer.firstElementChild);
                imageContainer.appendChild(firstImage);

                // Reset shift percentage
                shiftPercentage = 0;
            }, { once: true }); // Ensure the listener is only triggered once per cycle
        }
    });

    leftButton.addEventListener('click', function() {
        shiftPercentage -= 25; // Shift the view by 100% of the container width to the left

        if(shiftPercentage < 0){
            shiftPercentage = 75; //shifts to 75% because 0 is first image, 75 is last. 
        }

        // Apply a smooth transition
        imageContainer.style.transition = 'transform 0.5s ease-in-out';
        imageContainer.style.transform = `translateX(-${shiftPercentage}%)`;

        // Check if we have completed a full cycle of images
        if (shiftPercentage === 100 * (imageContainer.children.length - 1)) {
            imageContainer.addEventListener('transitionend', function() {
                // Reset the container position without animation
                imageContainer.style.transition = 'none';
                imageContainer.style.transform = 'translateX(0)';

                // Reorder the images by moving the first image to the end
                const firstImage = imageContainer.removeChild(imageContainer.firstElementChild);
                imageContainer.appendChild(firstImage);

                // Reset shift percentage
                shiftPercentage = 0;
            }, { once: true }); // Ensure the listener is only triggered once per cycle
        }
    });
});
