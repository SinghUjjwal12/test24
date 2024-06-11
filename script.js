document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
  });

  document.querySelector('.round').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.querySelector('.arrow').classList.toggle('bounceAlpha');
  });
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

const arrowContainer = document.querySelector('.arrow-container');
const sections = document.querySelectorAll('.subsequent-components');

arrowContainer.addEventListener('click', function() {
  const currentSectionIndex = getCurrentSectionIndex();
  const nextSectionIndex = currentSectionIndex < sections.length - 1 ? currentSectionIndex + 1 : 0;
  const nextSection = sections[nextSectionIndex];

  window.scrollTo({
    top: nextSection.offsetTop,
    behavior: 'smooth'
  });

  arrowContainer.classList.add('hide');
});

window.addEventListener('scroll', function() {
  if (window.scrollY !== 0) {
    arrowContainer.classList.add('hide');
  } else {
    arrowContainer.classList.remove('hide');
  }
});

function getCurrentSectionIndex() {
  let currentIndex = 0;
  const viewportHeight = window.innerHeight;
  const offset = viewportHeight * 0.5; // Adjust this value as needed

  for (let i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop - offset <= window.scrollY) {
      currentIndex = i;
    }
  }

  return currentIndex;
}entIndex;


/**************on scroll hide social media*******/


window.onscroll = function() {
var mediaDiv = document.querySelector(".media");
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    mediaDiv.style.display = "none";
} else {
    mediaDiv.style.display = "block";
}
};




