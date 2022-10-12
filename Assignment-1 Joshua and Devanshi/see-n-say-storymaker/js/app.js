// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.querySelector('#speakButton');
var speakButtonOne = document.querySelector('#buttonOne');
var speakButtonTwo = document.querySelector('#buttonTwo');
var speakButtonThree = document.querySelector('#buttonThree');
var speakButtonThree = document.querySelector('#buttonThree');
var speakButtonFour = document.querySelector('#buttonFour');
var speakButtonFive = document.querySelector('#buttonFive');
var randomSentenceButton = document.querySelector('#randButton');
var resetButton = document.querySelector('#reset');
var resetButton = document.querySelector('#textOutput');

var result = document.querySelector(".result");

const buttonOne = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"];
const buttonTwo =["sat on","ate","danced with","saw","doesn't like","kissed"];
const buttonThree = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
const buttonFour = ["goat","monkey","fish","cow","frog","bug","worm"];
const buttonFive =["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}
	let selectionOne = randomValueFromArray(buttonOne);
	let selectionTwo = randomValueFromArray(buttonTwo);
	let selectionThree = randomValueFromArray(buttonThree);
	let selectionFour = randomValueFromArray(buttonFour);
	let selectionFive = randomValueFromArray(buttonFive);

	
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
speakButtonOne.onclick = function(){
	selectionOne = randomValueFromArray(buttonOne);
	textToSpeak += ' ' + selectionOne;
	speakNow(selectionOne);
}
speakButtonTwo.onclick = function(){
	selectionTwo = randomValueFromArray(buttonTwo);
	textToSpeak += ' ' + selectionTwo;
	speakNow(selectionTwo);
}
speakButtonThree.onclick = function(){
	selectionThree = randomValueFromArray(buttonThree);
	textToSpeak += ' ' + selectionThree;
	speakNow(selectionThree);
}
speakButtonFour.onclick = function(){
	selectionFour = randomValueFromArray(buttonFour);
	textToSpeak += ' ' + selectionFour;
	speakNow(selectionFour);
}
speakButtonFive.onclick = function(){
	selectionFive = randomValueFromArray(buttonFive);
	textToSpeak += ' ' + selectionFive;
	speakNow(selectionFive);
}
randomSentenceButton.onclick = function() {
	textToSpeak = '';
	textToSpeak =  randomValueFromArray(buttonOne) + ' ' +  randomValueFromArray(buttonTwo) + ' ' +  randomValueFromArray(buttonThree) + ' ' +  randomValueFromArray(buttonFour) + ' ' +  randomValueFromArray(buttonFive)
	speakNow(textToSpeak);
}
resetButton.onclick = function() {
	textToSpeak = '';
}