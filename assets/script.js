// Assignment code here

var length = window.prompt("Length of Password 8-128");

window.alert("Password Criteria: click Ok to include and Cancel to exclude");

var lowercase = window.confirm("Would you like lowercase letters?");
var strin

var uppercase = window.confirm("Would you like uppercase letters?");

var numbers = window.confirm("Would you like numbers?");

var symbols = window.confirm("Would you like symbols?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);