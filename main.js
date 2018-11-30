// Get the HTML element with the id "click-button"
const clickButton = document.getElementById("click-button");

// Get the HTML element with the id "scroll-button" 
const scrollButton = document.getElementById("scroll-button");

// This random number function creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num)
}

// The two functions below are separate so each button's new background color rgb code can be displayed
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

clickButton.onclick = clickChange;
scrollButton.onwheel = scrollChange;