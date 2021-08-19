
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


var passwordLength = window.prompt("How many characters would you like to have? (Choose between 8 and 128)");

if (passwordLength > 8) {
  window.alert("Password must be at least 8 to 128 characters.")
  var passwordLength = window.prompt("Please select 8 to 128 character");
} 

if (passwordLength < 128) {
  window.alert("Password must be at least 8 to 128 characters.")
  var passwordLength = window.prompt("Please select 8 to 128 characters")
}

var passworduppercase = window.confirm("Would you like to have uppercase letters")

var passwordlowercase = window.confirm("Would you like to have lowercase letters")

var passwordnumbers = window.confirm("Would you like to have numbers")

var passwordsymbols = window.confirm("Would you like to have symbols")

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
