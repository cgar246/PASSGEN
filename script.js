
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var symbols = ["!","@","#","$","%","^","&","*",",",".","?"]

//var randomFunc = ["lowercase", "uppercase", "numbers", "symbols"]
function generatePassword() {


var passwordLength = window.prompt("How many characters would you like to have? (Choose between 8 and 128)")

if (passwordLength > 8) {
  window.alert("You've selected 8 or more characters")
} 
else {
  window.alert("You've selected less than 8 characters")
  var passwordLength = window.prompt("Please select 8 to 128 characters");
}
if (passwordLength < 128) {
  window.alert("You've selected 8 or more characters")
} else {
  window.alert("You've selected more than 128 characters")
  var passwordLength = prompt("Please select 8 to 128 characters");
}

var passworduppercase = window.confirm("Would you like to have uppercase letters?")

if (passworduppercase) {
  window.alert("You have chosen uppercase letters")
} else {
  window.alert("You have denied uppercase letters")
}

var passwordlowercase = window.confirm("Would you like to have lowercase letters")

if (passwordlowercase) {
  window.alert("You have chosen lowercase letters")
} else {
  window.alert("You have denied lowercase letters")
}
var passwordnumbers = window.confirm("Would you like to have numbers")

if (passwordnumbers) {
  window.alert("You have chosen numbers letters")
} else {
  window.alert("You have denied numbers letters")
}

var passwordsymbols = window.confirm("Would you like to have symbols")

if (passwordsymbols) {
  window.alert("You have chosen symbols letters")
} else {
  window.alert("You have denied symbols letters")
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
