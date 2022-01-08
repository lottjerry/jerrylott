/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* Auto open SideNav on bigger screes and close on smaller */
function autoNav(){
  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        openNav();
    } else {
        closeNav();
     }
    })
}
