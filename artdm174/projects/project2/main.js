/*
Author: Josh T
File Name: main.js for Project 2
*/


    
  function init()
  {
    //create shortcut vars
    
    //get the back button and make it visible
    const backBtn = document.querySelector(".backBtn");
    backBtn.style.display = "inline-block";
    
    //get the next button and make it visible
    const nextBtn = document.querySelector(".nextBtn");
    nextBtn.style.display = "inline-block";
    
    //get the figure around all the images, the images themselves and the figcaption
    const frame = document.getElementById("breakfast");
    const slides = frame.querySelectorAll("img");
    const caption = document.getElementById("caption");
    
    //with JS active, hide all images
    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    
    // show the first slide
    slides[0].style.display = "block";
    
    //give this first slide a class of current so that the change slide function can execute
    slides[0].setAttribute("class", "current");
    
    //set the caption to the first slide's caption
    caption.innerHTML = slides[0].alt;
    
    //have the slides automatically advance every 5 seconds
    timer = window.setInterval(changeSlide, 5000);
    
    // make next button active
    nextBtn.addEventListener("click", changeSlide);
    
    // make back button active
    backBtn.addEventListener("click", changeSlide);
    
    
    
   }  // end init
    
  //this function changes the current slide, shifting the carousel forward
  function changeSlide(e) 
  {
    
      //get the figure around all the images, the images themselves and the figcaption
      const frame = document.getElementById("breakfast");
      const slides = frame.querySelectorAll("img");
      const caption = document.getElementById("caption");
    
      //shortcut vars
    
      //find the slide that is currently displayed
      let showing = document.querySelector(".current");
  
      //get the slide that should be before that
      let nextUp = showing.previousElementSibling;
    
      //if this function was called using the next button or the automatic timer,
      if(!e || e.target.getAttribute("class") === "nextBtn")
      {
        //get the slide that should be after that
        nextUp = showing.nextElementSibling;
      }
    
      // deactivate current image
    
      //hide the current image
      showing.style.display = "none";
    
      //remove it's current class and reset it to slide
      showing.setAttribute("class", "slide");
    
      //if the next slide variable is null,
      if (nextUp === null) {
        //reset it to the last slide
        nextUp = slides[slides.length - 1];
      }
  
      //if the next slide variable has something that isn't a slide,
      if (nextUp.getAttribute("class") != "slide") {
          //reset it to the first slide
          nextUp = slides[0];
      }
    
      // activate next image.
  
    
      //display the next image
      nextUp.style.display = "block";
    
      //set the class of this element to current
      nextUp.setAttribute("class", "current");
    
      //update the caption
      caption.innerHTML = nextUp.alt;
  
      //reset the timer
      clearInterval(timer);
      timer = window.setInterval(changeSlide, 5000);
    
    }
    
//call the init function once the DOM loads
document.addEventListener('DOMContentLoaded', init);