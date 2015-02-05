function sizechange() {
    // Original height of the image in pixels
    var img_height = 300;

    // Get the current zoom value of the range control
    var step = document.getElementById('zoomController').valueAsNumber;

    // Calculate the percentage increase/decrease
    var heightChange = img_height * (step / 100);

    //Set the new height to the image tag
    img_height = img_height + heightChange;
    document.getElementById('image').height = img_height;

    // Display the current zoom value to the user
    document.getElementById('currentSize').innerText = step + '%';
}