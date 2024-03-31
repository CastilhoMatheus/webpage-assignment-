let slideIndex = 1; //initalize with slide 1
showSlides(slideIndex); //display slide 1

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("game-slides"); // create array of slides

  // if slide index is greater than the number of slides, set slide index to 1.
  // If slide index is less than 1, set slide index to the number of slides.
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // loop through all slides and make display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // displays the current slide
  slides[slideIndex - 1].style.display = "block";
}
