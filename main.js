const originalButton = document.getElementById("original-button");
const mysteryButton = document.getElementById("mystery-button");

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num)
}

function clickChange() {
	const randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
  document.getElementById("click-color").innerHTML = "This color's rgb code is " + randomColor;
}

function scrollChange() {
	const randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
  document.getElementById("scroll-color").innerHTML = "This color's rgb code is " + randomColor;
}

originalButton.onclick = clickChange;
mysteryButton.onwheel = scrollChange;