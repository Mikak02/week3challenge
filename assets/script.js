// Assignment code here
var length = 8;
//figure out how to use charcode :-/
var passwordArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//default array includes lowercase already to meet acceptance criteria that one criteria is always present.
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "'", "(", ")", ",", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "_","`", "{", "}", "~", "|"];

//trying to give more clarification since it seems alerts can only be changed from ok/cancel by some black magic called jQuery
window.alert("Password Criteria: Password length must be 8 - 128 characters and in integer form. Select Ok to include criteria and Cancel to exclude criteria.");

function getCriteria() {
    //adding an original array fixes the problem of removing unselected criteria. thanks youtube
    var passwordArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
length = parseInt(window.prompt("Length of Password 8-128 characters"));
if(isNaN(length) || length < 8 || length > 128) {
    alert("Must be between 8 - 128 integers");
    return false; 
} 
//figure out how to get the generator to start over after a false return without having to reload page

if (confirm("Would you like uppercase letters?")); {
    passwordArray = passwordArray.concat(upperArray);
}

if (confirm("Would you like numbers?")); {
    passwordArray = passwordArray.concat(numberArray);
}
if (confirm("Would you like symbols?")); {
    passwordArray = passwordArray.concat(symbolsArray);
}
return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var correctPrompts = getCriteria();

   if(correctPrompts) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
} else {
    passwordText.value = "";
}
}

function generatePassword () {
    var password = "";
    for(var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * passwordArray.length);
        password = password + passwordArray[randomIndex];
    } 
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);