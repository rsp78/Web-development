let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.getElementById("random")
 
 
//sets the color for each <input type="color">
function setGradient() {
	let xyGradient = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
 
	body.style.background = xyGradient;
	randomBtn.style.background = xyGradient;
 
	css.textContent = body.style.background + ";";
 
}
// calls setGradient function on page load
window.onload = setGradient();
 
// function for random values
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
 
//function to generate random gradient(s) rgb 0-255
function getRandomGradient() {
	let r1 = getRandomInt(256);
	let g1 = getRandomInt(256);
	let b1 = getRandomInt(256);
	let r2 = getRandomInt(256);
	let g2 = getRandomInt(256);
	let b2 = getRandomInt(256);
	let randomGradient = "linear-gradient(to right,rgb(" 
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))"; 
 
	body.style.background = randomGradient;
	randomBtn.style.background = randomGradient;
	
	css.textContent = body.style.background + ";";
}
 
 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomGradient);