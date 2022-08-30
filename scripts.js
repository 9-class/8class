/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
let check = ''
if (window.matchMedia("(max-width: 767px)").matches)
{
// The viewport is less than 768 pixels wide
check = "mobile device";
} else {
  check = "not a mobile device";
}
let cent = document.getElementById('centre')
if (check == "mobile device") {
  console.log(check)
  cent.style.textAlign = "center";
} else {
  console.log(check)
  cent.style.textAlign = "left";
}
