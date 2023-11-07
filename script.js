// VARIABLES STORE DIFFERENT REFERENCES TO PAGE 
// global access 
var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
// var outputParagraph = document.getElementById("outputText");

var outFirst = document.getElementById("firstN");
var outLast = document.getElementById("lastN");


//Name of user 
var inputElement = document.getElementById("myInput");


// lil, desk, light, super, house, baby, Peppa, pre, big, young, old
var firstNames = ["lil", "light", "desk", "super", "house", "baby", "peppa", "big", "young", "ten", "old"];
//Last: crave, metal, mop, shark, street, night, heart, grape, spike, savage, animal 
var lastNames = ["crave", "metal", "mop", "street", "shark", "night", "heart", "grape", "spike", "savage", "animal"];


//Calling functions: 
executeButton.addEventListener("click", function(){
	var userInput = inputElement.value; 
	writeName(userInput); 
	generateRes(); 
	restyle();

});





//Clicking generate button: 
function generateRes(){
	var randomFirst = Math.floor(Math.random() * firstNames.length);
	var randomLast = Math.floor(Math.random() * lastNames.length);

	//check console log to see what index we got: 
	console.log(randomFirst);
	console.log(randomLast);

	var myFirst = firstNames[randomFirst]; 
	var myLast = lastNames[randomLast];

	//change inner text of what WAS ON WEBSITE (EX: FIRST LAST)
	outFirst.innerText = myFirst; 
	outLast.innerText = myLast; 

}


//change to say: ___'s name: 
function writeName(incUserInput){
	var hiddenName = document.getElementById('name');
	hiddenName.style.display = 'block';
	hiddenName.innerText = incUserInput + "'s" + " name:" ; 

}



//restyling: color, font family, weight 
function restyle(){
	var myCols = ["#d287d6", "#267cd1", "#dbe254", "#e25462"]; 
	var myFonts = ["arial", "monospace", "fantasy", "serif"]; 
	var fontWeight = ["100", "300", "500", "700"]; 

	var selectedIndex1 = Math.floor(Math.random() * myCols.length);
	var selectedIndex2 = Math.floor(Math.random() * myFonts.length);
	var selectedIndex3 = Math.floor(Math.random() * fontWeight.length);

	//first 
	outFirst.style.color = myCols[selectedIndex1]; 
	outFirst.style.fontFamily = myFonts[selectedIndex2]; 
	outFirst.style.fontWeight = fontWeight[selectedIndex3]; 


	var selectedIndex4 = Math.floor(Math.random() * myCols.length);
	var selectedIndex5 = Math.floor(Math.random() * myFonts.length);
	var selectedIndex6 = Math.floor(Math.random() * fontWeight.length);

	//last
	outLast.style.color = myCols[selectedIndex4]; 
	outLast.style.fontFamily = myFonts[selectedIndex5]; 
	outLast.style.fontWeight = fontWeight[selectedIndex6]; 



}




//random last name:


//restyle css: