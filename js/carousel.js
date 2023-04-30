// Initialize intIndex to 0
let intIndex = 0;

// Function to show the image
function showImage(i) {
  // Add the value of i to intIndex
  intIndex += i;
  // Get all the image elements
  const images = document.getElementsByClassName("image");
  // Get all the dot elements
  const dots = document.getElementsByClassName("dot");
  // Loop through the images and dots to hide the images and deactivate the dots
  for (let n = 0; n < images.length; n++) {
    images[n].style.display = "none";
    dots[n].className = dots[n].className.replace(" active", "");
  }
  // Check if intIndex goes over the top of the array or below 0
  if (intIndex > images.length - 1) {
    intIndex = 0;
  } 
  if (intIndex < 0) {
    intIndex = images.length - 1;
  }
  // Set the current image to block and the current dot to active
  images[intIndex].style.display = "block";
  dots[intIndex].className += " active";
}

// Add event listeners to the next and prev buttons
document.querySelector(".next").addEventListener("click", function() {
  showImage(1);
});

document.querySelector(".prev").addEventListener("click", function() {
  showImage(-1);
});


// Call getCurrentYear function on window load
window.onload = function() {
  
  showImage(0);

};
