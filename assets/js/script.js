// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible password values
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\", ^ ", "_", "`", "{", "|", "}", "~"];

// User's possible choices
var passwordLength;
var passwordNumbers;
var passwordLowerCase;
var passwordUpperCase;
var passwordSymbols;

// Object to monitor User's password desired parameters
var userPasswordParameters = {
 passwordLength: passwordLength,
 passwordNumbers: passwordNumbers,
 passwordLowerCase: passwordLowerCase,
 passwordUpperCase: passwordUpperCase,
 passwordSymbols: passwordSymbols,
}

// Confirms
passwordNumbers = confirm ("Click OK to include numbers in your password."),
passwordLowerCase = confirm ("Click OK to include lower case letters in your password."),
passwordUpperCase = confirm ("Click OK to include upper case letters in your password."),
passwordSymbols = confirm ("Click OK to include special characters in your password."),


function userOutput () { 
  var passwordLength = prompt("Your password must be between 8 and 128 characters. Please enter a whole number to set the length of your password.");
//alerts ("Sorry, your password has to be longer than 8 and no longer than 128 characteristics")
    if (isNaN(passwordLength) === true) {
      alert("Password length must be provided as a number.");
      return
    }   
    if (passwordLength < 7) {
      alert ("Password length must be at least 8 characters.");
      return
    }
    if (passwordLength > 129) {
      alert ("Password length must be less than 129 characters.");
      return
    }

  // Generating a password
function generatePassword() {
  generatePassword = userOptions();
  
    var password = [];
    var chosenChar = [];
    var charsInc = [];

  // function for random characters
  function randomChar(array) {
    var i = Math.floor(Math.random() * array.length);
    var element = array[i];
    return element;
}

  // different user Choices combinations
    if (userPasswordParameters.passwordSymbols) {
      console.log (symbols);
    }
  
    if (userPasswordParameters.passwordNumbers) {
      console.log (numbers);
    }
  
    if (userPasswordParameters.passwordUpperCase) {
      console.log (upperCase);
    }
  
    if (userPasswordParameters.passwordLowerCase) {
      console.log (lowerCase);
    }

  // loop to check length
  for (var i = 0; i < userOutputLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
    return element;
  };

  // loop to match the password with the length chosen 
    for (var i=0; i < chosenChar.length; i++) {
      password[i] = chosenChar[i];
    }
} 
    

/*
// confirms addition of different characters to the password
function charactersConfirmation () { 
  if (confirm ("Click OK to confirm including special characters in your password.")) {
    txt = "You pressed OK!"
  } 
  else {
    txt = "You pressed Cancel!"
  }
  document.getElementById("password").value = generatePassword;
  }
} */

//for loop to verify the length of the password

  /*for (var i = 0; i < userOutputLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
    return element;

    function generatePassword () {*/

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);