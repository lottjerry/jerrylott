/* Set the width of the side navigation to 300px */
function openNav() {
  document.getElementById("side-nav").style.width = "300px";
  document.getElementById("open-btn").style.display="none";
  document.getElementById("close-btn").style.display="inline";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("side-nav").style.width = "0";
  document.getElementById("close-btn").style.display="none";
  document.getElementById("open-btn").style.display="inline";
}

/* Auto close side navigation on mobile devices */
function closeNavMobile(){
  if (window.matchMedia("(min-width: 1200px)").matches) {
    openNav();
  } else {
    closeNav();
  }
} 
/* Auto open SideNav on bigger screes and close on smaller */
function autoNav(){
  document.getElementById("close-btn").style.display="none";
  document.getElementById("open-btn").style.display="inline";
  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        openNav();
    } else {
        closeNav();
     }
    })
}

/* When the user scrolls down from the top of the document, show the button */
window.onscroll = function() {scrollTo()};

function scrollTo() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}


function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Hides the overflow then the side nav is open in mobile */
function noOverflow() {
  document.body.style.overflow="hidden";
}

function overFlow() {
  document.body.style.overflow="visible";
  document.body.style.backgroundColor = "transparent";
}
