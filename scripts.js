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
if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  let check = document.write("mobile device");
}else{
  // false for not mobile device
  let check = document.write("not mobile device");
}
let cent = document.getElementById('centre')
if (check == "mobile device") {
  console.log(check)
  cent.style.textAlign = "center";
} else {
  cent.style.textAlign = "left";
}
