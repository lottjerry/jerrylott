/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("open").style.display="none";
  document.getElementById("close").style.display="inline"
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("close").style.display="none";
  document.getElementById("open").style.display="inline"
}

/* Auto open SideNav on bigger screes and close on smaller */
function autoNav(){
  document.getElementById("open").style.display="inline"
  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        openNav();
    } else {
        closeNav();
     }
    })
}
