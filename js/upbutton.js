// Get the button:
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
    transform: "rotate(0deg)"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);