
function ScrollHandler(pageId) {
  var page = document.getElementById(pageId);
  var pageStart = page.offsetTop;
  var pageJump = false;
  var viewStart;
  var duration = 1000;
  var scrolled = document.getElementById("scroll");

  function scrollToPage() {
    pageJump = true;

    // Calculate how far to scroll
    var startLocation = viewStart;
    var endLocation = pageStart;
    var distance = endLocation - startLocation;

    var runAnimation;

    // Set the animation variables to 0/undefined.
    var timeLapsed = 0;
    var percentage, position;

    var easing = function(progress) {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1; // acceleration until halfway, then deceleration
    };

    function stopAnimationIfRequired(pos) {
      if (pos == endLocation) {
        cancelAnimationFrame(runAnimation);
        setTimeout(function() {
          pageJump = false;
        }, 500);
      }
    }

    var animate = function() {
      timeLapsed += 16;
      percentage = timeLapsed / duration;
      if (percentage > 1) {
        percentage = 1;
        position = endLocation;
      } else {
        position = startLocation + distance * easing(percentage);
      }
      scrolled.scrollTop = position;
      runAnimation = requestAnimationFrame(animate);
      stopAnimationIfRequired(position);
     //console.log("position=" + scrolled.scrollTop + "(" + percentage + ")");

    };
    // Loop the animation function
    runAnimation = requestAnimationFrame(animate);
  }
  

  window.addEventListener("wheel", function(event) {
    viewStart = scrolled.scrollTop;
    if (!pageJump) {
      var pageHeight = page.scrollHeight;
      var pageStopPortion = pageHeight / 2;
      var viewHeight = window.innerHeight;

      var viewEnd = viewStart + viewHeight;
      var pageStartPart = viewEnd - pageStart;
      var pageEndPart = pageStart + pageHeight - viewStart;

      var canJumpDown = pageStartPart >= 0;
      var stopJumpDown = pageStartPart > pageStopPortion;

      var canJumpUp = pageEndPart >= 0;
      var stopJumpUp = pageEndPart > pageStopPortion;

      var scrollingForward = event.deltaY > 0;
      if (
        (scrollingForward && canJumpDown && !stopJumpDown) ||
        (!scrollingForward && canJumpUp && !stopJumpUp)
      ) {
        event.preventDefault();
        scrollToPage();
      }
      false; //
    } else {
      event.preventDefault();
    }
    

  });
}
new ScrollHandler("one");
new ScrollHandler("two");
new ScrollHandler("three");
new ScrollHandler("four");
new ScrollHandler("five");


//scrolling sidebarpoints


 

//scrolling to Portfolio/Second section

    
 /* */
var pages = document.getElementById("two");
  var pageStarts = pages.offsetTop;
  var pageJumps = false;
  var viewStarts;
  var duration = 1000;
  var scrolled = document.getElementById("scroll");


function clickToPage() {
  pageJump = true;

  // Calculate how far to scroll
  var startLocations = viewStarts;
  var endLocations = pageStarts;
  var distances = endLocations - startLocations;

  var runAnimation;

  // Set the animation variables to 0/undefined.
  var timeLapsed = 0;
  var percentage, position;

  var easing = function(progress) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1; // acceleration until halfway, then deceleration
  };

  function stopAnimationIfRequired(pos) {
    if (pos == endLocations) {
      cancelAnimationFrame(runAnimation);
      setTimeout(function() {
        pageJump = false;
      }, 500);
    }
  }

  var animate = function() {
    timeLapsed += 16;
    percentage = timeLapsed / duration;
    if (percentage > 1) {
      percentage = 1;
      position = endLocations;
    } else {
      position = startLocations + distances * easing(percentage);
    }
    scrolled.scrollTop = position;
    runAnimation = requestAnimationFrame(animate);
    stopAnimationIfRequired(position);
    console.log("position=" + scrolled.scrollTop + "(" + percentage + ")");

  };
  // Loop the animation function
  runAnimation = requestAnimationFrame(animate);
}
$(".btn-portfolio").click(function(event){
  viewStarts = scrolled.scrollTop;
  event.preventDefault();
  clickToPage();
})

$(".scroll-icon").click(function(event){
  viewStarts = scrolled.scrollTop;
  event.preventDefault();
  clickToPage();
})

$(".menu-item-2 a").click(function(event){
  duration=1500;
  viewStarts = scrolled.scrollTop;
  event.preventDefault();
  
    button.toggleClass("opened");
    listItems.toggleClass("list-showing");
    $('.menu-overlay').toggleClass("closed");
    $('.landing').toggleClass("fadeout-landing");
    imgCard.toggleClass("img-slideup");
    imCardtext.toggleClass("img-slideup");
    $('.footer').toggleClass("hide");
    $(".portfolio-heading").toggleClass("img-slideup");
  clickToPage();
  
})




//expremient


$(".menu-item-5 a").click(function(event){

  var pages = document.getElementById("five");
  var pageStarts = pages.offsetTop;
  var pageJumps = false;
  var viewStarts;
  var duration = 2500;
  var scrolled = document.getElementById("scroll");


function clickToPage() {
  pageJump = true;

  // Calculate how far to scroll
  var startLocations = viewStarts;
  var endLocations = pageStarts;
  var distances = endLocations - startLocations;

  var runAnimation;

  // Set the animation variables to 0/undefined.
  var timeLapsed = 0;
  var percentage, position;

  var easing = function(progress) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1; // acceleration until halfway, then deceleration
  };

  function stopAnimationIfRequired(pos) {
    if (pos == endLocations) {
      cancelAnimationFrame(runAnimation);
      setTimeout(function() {
        pageJump = false;
      }, 500);
    }
  }

  var animate = function() {
    timeLapsed += 16;
    percentage = timeLapsed / duration;
    if (percentage > 1) {
      percentage = 1;
      position = endLocations;
    } else {
      position = startLocations + distances * easing(percentage);
    }
    scrolled.scrollTop = position;
    runAnimation = requestAnimationFrame(animate);
    stopAnimationIfRequired(position);
    console.log("position=" + scrolled.scrollTop + "(" + percentage + ")");

  };
  // Loop the animation function
  runAnimation = requestAnimationFrame(animate);
}


  viewStarts = scrolled.scrollTop;
  event.preventDefault();
  
    button.toggleClass("opened");
    listItems.toggleClass("list-showing");
    $('.menu-overlay').toggleClass("closed");
    $('.landing').toggleClass("fadeout-landing");
    imgCard.toggleClass("img-slideup");
    imCardtext.toggleClass("img-slideup");
    $('.footer').toggleClass("hide");
    $(".portfolio-heading").toggleClass("img-slideup");
  clickToPage();
  
})


/* 
//RELOAD ON RESIZE WINDOW
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache  
  }, 100);
});*/

