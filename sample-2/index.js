var imageSelectors = document.querySelectorAll('.imageSelector')
var slides = document.getElementsByClassName("slider-img");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));

}

function currentSlide(n) {
  console.log(imageSelectors)

  showSlides((slideIndex = n));
}

function showSlides(n) {


  var i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  imageSelectors[slideIndex - 1].checked = true
  slides[slideIndex - 1].style.display = "block";
}


