var numSquares = 6;
var colors = generateRandomColor(numSquares);
var cD = document.querySelector("#cD");
var square = document.querySelectorAll(".square");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var playAgain = document.querySelector("#playAgain");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var pC = pickColor();
cD.textContent = pC.toUpperCase();

easyBtn.addEventListener("click", function(){	
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pC = pickColor();
	cD.textContent = pC.toUpperCase();
	for (var i = 0 ; i < square.length; i++) {
		if(colors[i]){
			square[i].style.background = colors[i];
		}else{
			square[i].style.display = "none";
		}
	}
	message.textContent = " ";
});

hardBtn.addEventListener("click", function(){	
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pC = pickColor();
	cD.textContent = pC.toUpperCase();
	for (var i = 0 ; i < square.length; i++) {
		square[i].style.background = colors[i];
		square[i].style.display = "block";
		message.textContent = " ";
	}
});

resetButton.addEventListener("click", function(){	
	colors = generateRandomColor(numSquares);
	pC = pickColor();
	cD.textContent = pC.toUpperCase();
	for (var i = 0 ; i < square.length; i++) {
		square[i].style.background = colors[i];
		h1.style.background = "steelblue";
		playAgain.textContent = "NEW COLORS";
		message.textContent = " ";
	}
});

for (var i = 0 ; i < square.length; i++) {

	square[i].style.background = colors[i];

square[i].addEventListener("click", function(){	

	var cC = this.style.background;
	console.log(cC, pC);
	if (cC === pC) {
  		message.textContent = "You are correct!";
  		changeAllColor(cC);
  		h1.style.background = cC;
  		playAgain.textContent = "PLAY AGAIN?"

 	}else{
 		this.style.background = "#232323";
 		message.textContent = "Try again"
 	}
})
}

function changeAllColor(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length ) 
	return colors[random];
}

function generateRandomColor(number){
	var arr = [];

	for (var i = 0; i < number; i++) {
		arr.push(generateColor());
	}
	return arr
}

function generateColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}