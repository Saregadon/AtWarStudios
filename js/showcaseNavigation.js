document.addEventListener("DOMContentLoaded", function() {
    const rightButton = document.getElementById('right-button');
    const leftButton = document.getElementById('left-button')
    //const imageContainer = document.querySelector('.image-container');

    rightButton.addEventListener('click', function() {
        document.getElementById('img').style.zIndex += 1;
    });

    leftButton.addEventListener('click', function() {
        document.getElementById('img').style.zIndex -= 1;
    });
});

//adds images and initializates them to the website
function Images() {
    let img = document.querySelector('.image-container-showcase img');
    let imageContainer = [
        //new images to be pushed to the array for z-index to be updated
        "C:\Users\Sareg\Documents\AtWarStudiosWebsite\img\Landscape\ian-schneider-TamMbr4okv4-unsplash.jpg",
        "C:\Users\Sareg\Documents\AtWarStudiosWebsite\img\Portrait\Congrats!-002.jpg",
        "C:\Users\Sareg\Documents\AtWarStudiosWebsite\img\Portrait\Congrats!-005.jpg",
        "C:\Users\Sareg\Documents\AtWarStudiosWebsite\img\Portrait\Congrats!-018.jpg"
    ]

    for(let i = 0; i < imageContainer.length; i++){
        let newImage = new Image();

        //splits filename for alternate naming convention
        var file_name_array = splitImgName(imageContainer[i]);

        newImage.src = imageContainer[i];
        newImage.alt = file_name_array;
        newImage.width = 100;
        newImage.height = 100;

        //image margins
        newImage.style.marginRight = "10px";
        newImage.style.marginLeft = "10px";
    }

    newImage.setAttribute('id', 'myImage')
}

//splits fullpath to get filename
function splitImgName (str) {
    return str.split('\\').pop().split('/').pop();
}