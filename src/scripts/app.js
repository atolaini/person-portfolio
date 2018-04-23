let x = document.getElementsByClassName('mySlides');
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  //Scroll Reveal effects

  window.sr = ScrollReveal();
  sr.reveal('.navBar__nav',{
    origin: 'bottom',
    duration: 1000,
    distance: '100px',
    opacity: 0,
    easing: 'ease',
    
  });

  sr.reveal('.homeSection__content--heading',{
    origin: 'right',
    duration: 1000,
    distance: '500px',
    opacity: 0,
    easing: 'ease-out',
    reset: 'true'
  });

  sr.reveal('.homeSection__content--subHeading',{
    duration: 1000,
    delay: 900,
    //distance: '500px',
    opacity: 0,
    easing: 'ease-out',
    reset: 'true'
  });

  sr.reveal('.aboutSection__text', {
    viewFactor: 0.85,
    duration: 1200
  })

  // sr.reveal('.skillsSection', {
  //   origin: 'bottom',
  //   distance: '300px',
  //   viewFactor: 0.2,
  //   duration: 1200,
  // })

  sr.reveal('.gridItem--3', {
    duration: 2000,
    delay: 300,
    easing: 'ease',
    //reset: 'true',
    viewFactor: .2,
    opacity: 0
  })

  sr.reveal('.gridItem--2', {
    duration: 1000,
    easing: 'ease',
    //reset: 'true',
    viewFactor: .2,
    opacity: 0
  })

  sr.reveal('.gridItem--1', {
    duration: 1000,
    delay: 700,
    easing: 'ease',
    //reset: 'true',
    viewFactor: .2,
    opacity: 0
  })

  
  
 


 
  


  