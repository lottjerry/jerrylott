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
