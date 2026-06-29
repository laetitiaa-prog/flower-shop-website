// Function to change the image when clicked
function changeImage(imageId) {
    var image = document.getElementById(imageId);
    
    // Define the new images to show when clicked (example)
    var newImage = '';
    
    if (imageId === 'image1') {
        newImage = 'fff.jpg'; // New image for image1
    } else if (imageId === 'image2') {
        newImage = 'lfll.jpg'; // New image for image2
    } else if (imageId === 'image3') {
        newImage = 'foll.jpg'; // New image for image3
    }
    
    // Change the src of the clicked image
    image.src = newImage;
}
