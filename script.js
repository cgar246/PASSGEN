// Assignment code here
var length = document.querySelector("length")
var lowercase = document.querySelector("lowercase")
var uppercase = document.querySelector("uppercase")
var numbers = document.querySelector("numbers")
var symbols = document.querySelector("symbols")

const randomFunc = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  symbols: "!@#$%^&*,.?",
  numbers: "123456789",
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(
  _randomFunc) {
  var password = generatePassword(lowercase, uppercase, numbers, symbols) {
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
