// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible password values
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\", ^ ", "_", "`", "{", "|", "}", "~"];


var passwordLength;
var passwordNumbers;
var passwordLowerCase;
var passwordUpperCase;
var passwordSymbols;


//for loop to verify the length of the password
function generatePassword () {
    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * characters.length);
      password += characters.substring(randomNumber, randomNumber + 1);

      return;
} 


//alerts ("Sorry, your password has to be longer than 8 and no longer than 128 characteristics")
function passwordLength () { 
  if (isNaN(passwordLength) === true) {
    alert("Password length must be provided as a number.");
    return 
  }
      
  else if (passwordLength < 8) {
    alert ("Password length must be at least 8 characters.");
    return;
  }
  else if (passwordLength > 128) {
    alert ("Password length must be less than 129 characters.");
    return; 
  }
  else {
    generatePassword();
  }
}

function charactersConfirmation () { 
  if (confirm ("Click OK to confirm including special characters in your password.")) {
    txt = "You pressed OK!"
  } 
  else {
    txt = "You pressed Cancel!"
  }
  document.getElementById("password").value = generatePassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);