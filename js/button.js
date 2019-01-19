// Set button to click.
//var button = document.getElementById( 'menu-toggle' );
var button = $("#nav-toggle");
var listItems = $("li.menu-item");
var imgCard =$(".img-card");
var imCardtext =$(".img-card-text");
var landingContact= $(".btn-about-me, .btn-footer");
var openContact =$(".menu-item-4 a");
var openPortfolio =$(".menu-item-2");
var scrolltoSkills =$(".menu-item-5 a");
var scrollToHome =$(".menu-item-1");

$.fn.slideFadeToggle  = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
}; 


$( document ).ready(function() {
    //toggle-menu
  button.click(function(){
    button.toggleClass("opened");
    listItems.toggleClass("list-showing");
    $('.menu-overlay').toggleClass("closed");
    $('.landing').toggleClass("fadeout-landing");
    imgCard.toggleClass("img-slideup");
    imCardtext.toggleClass("img-slideup");
    $('.footer').toggleClass("hide");
    $(".portfolio-heading").toggleClass("img-slideup");
    $(".slideshow-container1").removeClass("show");
    $(".slideshow-container2").removeClass("show");
    $(".slideshow-container3").removeClass("show");
    $(".close-modal").removeClass("show");

  }
  )
  //contact-show
  openContact.click(function(event){
    
    button.toggleClass("opened");
    listItems.toggleClass("list-showing");
    $('.menu-overlay').toggleClass("closed");
    imgCard.toggleClass("img-slideup")
    $(".contact-left").addClass("is-open");
    $('.footer').toggleClass("hide");
    $(".contact-right").addClass("is-open-right");
    $(".contact-right-wrapper").addClass("is-open-right"); 
    $("#scroll").addClass("blur");
    $('.landing').toggleClass("fadeout-landing");
    imCardtext.removeClass("img-slideup");
    $(".portfolio-heading").toggleClass("img-slideup");
    
    event.preventDefault();

  
  })

  //contact close
  $(".close-btn").click(function(event){
    $(".contact-left").removeClass("is-open");
    
    $(".contact-right-wrapper").removeClass("is-open-right"); 
    $("#scroll").removeClass("blur");
    $('.landing').removeClass("blur-landing");
    
 
    event.preventDefault();
  })

 //contact landing
 landingContact.click(function(event){
    
 
  $(".contact-left").addClass("is-open");
  
  $(".contact-right").addClass("is-open-right");
  $(".contact-right-wrapper").addClass("is-open-right"); 
  $("#scroll").addClass("blur");
  $('.landing').toggleClass("blur-landing");
  
  
  event.preventDefault();


})
openPortfolio.click(function(event){
  button.toggleClass("opened");
    listItems.toggleClass("list-showing");
    $('.menu-overlay').toggleClass("closed");
    imgCard.toggleClass("img-slideup")
    $('.footer').toggleClass("hide");
    $("#scroll").addClass("blur");
    $('.landing').toggleClass("fadeout-landing");
    imCardtext.removeClass("img-slideup");
    $(".portfolio-heading").toggleClass("img-slideup");
})
scrolltoSkills.click(function(event){
  
  button.toggleClass("opened");
    listItems.toggleClass("list-showing");
    $('.menu-overlay').toggleClass("closed");
    imgCard.toggleClass("img-slideup")
    $('.footer').toggleClass("hide");
    $("#scroll").addClass("blur");
    $('.landing').toggleClass("fadeout-landing");
    imCardtext.removeClass("img-slideup");
    $(".portfolio-heading").toggleClass("img-slideup");
})

scrollToHome.click(function(event){ 
  button.toggleClass("opened");
    listItems.toggleClass("list-showing");
    $('.menu-overlay').toggleClass("closed");
    imgCard.toggleClass("img-slideup")
    $('.footer').toggleClass("hide");
    $("#scroll").addClass("blur");
    $('.landing').toggleClass("fadeout-landing");
    imCardtext.removeClass("img-slideup");
    $(".portfolio-heading").toggleClass("img-slideup");
})
})

      
    
  



  











