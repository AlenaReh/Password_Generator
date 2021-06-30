// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible password values
var password = { 
numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", "\", ^ ", "_", "`", "{", "|", "}", "~"],
}



  // Generating a password
  function generatePassword() { 
    var userPasswordParameters = userInput();
  }
      
  //alerts
  function userInput () { 
    // User's possible choices
      var passwordLength;
      var passwordNumbers;
      var passwordLowerCase;
      var passwordUpperCase;
      var passwordSymbols;


      // Confirms
      passwordNumbers = confirm ("Click OK to include numbers in your password.");
      passwordLowerCase = confirm ("Click OK to include lower case letters in your password.");
      passwordUpperCase = confirm ("Click OK to include upper case letters in your password.");
      passwordSymbols = confirm ("Click OK to include special characters in your password.");
          var passwordLength = prompt ("Your password must be a whole number between 8 and 128 characters.");
          console.log ('This is user input password length');
          console.log (passwordLength);

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
    
 
/*
  // function for random characters ??????????
  function randomChar(array) {
    var i = Math.floor(Math.random() * array.length);
    var element = array[i];
    return element;
} */

  // different user Choices combinations concat??????
    if (userPasswordParameters.passwordSymbols) {
      console.log (password.symbols);
    }
  
    if (userPasswordParameters.passwordNumbers) {
      console.log (password.numbers);
    }
  
    if (userPasswordParameters.passwordUpperCase) {
      console.log (password.upperCase);
    }
  
    if (userPasswordParameters.passwordLowerCase) {
      console.log (password.lowerCase);
    }
  }
/*
  // loop to check length?????
  for (var i = 0; i < userInputLength; i++) {
    var randomNumber = Math.floor(Math.random() * password.length);
    password += characters.substring(randomNumber, randomNumber + 1);
    return element;
  };

  // loop to match the password with the length chosen 
    
} */
    

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


// Add an event listener to generate button
generateBtn.addEventListener("click", writePassword);