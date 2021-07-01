// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible password values
var password = { 
numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", "\", ^ ", "_", "`", "{", "|", "}", "~"],
}

// Generating a password function with empty arrays.
function generatePassword() { 
  var userPasswordParameters = userInput();
  var userPassword = [];
  var userCharacters = [];
  var charactersInc = [];
}
    
//alerts
function userInput () { 
  var passwordLength = parseInt(prompt ("Please provide a desired number of characters for generating a password."));
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
        
      
    //Initial alerts
    if (isNaN(passwordLength) === true) {
      alert("Password length must be provided as a number. Try again!");
      return
    }   
    if (passwordLength >= 8) {
      alert ("Password length must be at least 8 characters.");
      return
    }
    if (passwordLength <= 128) {
      alert ("Password length must be less than 128 characters.");
      return
    }
    
    //  When user doesn't select neither of the parameters for the pasword
    if (!passwordNumbers && !passwordLowerCase && !passwordUpperCase && !passwordSymbols) {
      alert("Please select at least one character type to generate the password.");
      return
    }

    // loop to check the length. Iy should keep checking whenever > than 0.
    for (var i = 0; i < userInput.passwordLength; i++) {
      var possibleCharacters = randomChar(userCharacters);
      password.push(userCharacters);
    };

// different user Choices combinations concat??????
    function userInput () { 
      if (passwordSymbols) {
        charactersInc = charactersInc.concat(password.symbols);
        userCharacters.push(randomChar(password.symbols));
      }
  
      if (passwordNumbers) {
        charactersInc = charactersInc.concat(password.numbers);
        userCharacters.push(randomChar(password.numbers));
      }
  
      if (passwordUpperCase) {
        charactersInc = charactersInc.concat(password.upperCase);
        userCharacters.push(randomChar(password.upperCase));
      }
  
      if (passwordLowerCase) {
        charactersInc = charactersInc.concat(password.lowerCase);
        userCharacters.push(randomChar(password.lowerCase));
      }

      // loop to match the password with the chosen length.
      
    for (var i=0; i < userCharacters.length; i++) {
      userPassword[i] = userCharacters[i];
    }
  }
        // function for random characters ??????????
        function userCharacters(array) {
          var i = Math.floor(Math.random() * array.length);
          var element = array[i];
          return element;
      } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add an event listener to generate button
generateBtn.addEventListener("click", writePassword);


