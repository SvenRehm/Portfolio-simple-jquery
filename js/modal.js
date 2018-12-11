
var slideIndex = 1;
showSlides1(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides1(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides1(slideIndex = n);
}


function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
 
  slides[slideIndex-1].style.display = "block"; 

 
}


//second MODAL
var slideIndex = 1;
showSlides2(slideIndex);
// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}


function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
 
  slides[slideIndex-1].style.display = "block"; 

 
}
//third MODAL
var slideIndex = 1;
showSlides3(slideIndex);
// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex = n);
}


function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
 
  slides[slideIndex-1].style.display = "block"; 

 
}


$(".img-card").eq(0).click(function(event){
  $(".slideshow-container1").addClass("show");
  $(".close-modal").addClass("show");
  event.preventDefault();
})
$(".img-card").eq(1).click(function(event){
  $(".slideshow-container2").addClass("show");
  $(".close-modal").addClass("show");
  event.preventDefault();
})
$(".img-card").eq(2).click(function(event){
  $(".slideshow-container3").addClass("show");
  $(".close-modal").addClass("show");
  event.preventDefault();
})


$(".close-modal").click(function(event){
  $(".slideshow-container1").removeClass("show");
  $(".slideshow-container2").removeClass("show");
  $(".slideshow-container3").removeClass("show");
  $(".close-modal").removeClass("show");

  event.preventDefault();
})


