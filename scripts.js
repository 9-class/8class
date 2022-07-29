let greeting = document.getElementById("greeting");
setInterval(() => {
  let g = new Date();
  if (g.getHours() < 12) {
    greeting.innerHTML = "good morning user";
  } else if (g.getHours() >= 12 && g.getHours() <= 18) {
    greeting.innerHTML = "good afternoon user";
  } else if (g.getHours() >= 18 && g.getHours() <= 20) {
    greeting.innerHTML = "good evening user";
  } else if (g.getHours() >= 20 && g.getHours() <= 24) {
    greeting.innerHTML = "good night user";
  } else if (g.gethours() >= 0 && g.getHours() <= 6) {
    greeting.innerHTML = "its a beautiful early morning";
  }
}, 1000);
