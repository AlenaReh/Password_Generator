// Assignment Code
//VARIABLES 

var generateBtn = document.querySelector("#generate");

// Possible password values
var password = { 
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  symbols: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "]", "\", ^ ", "_", "`", "{", "|", "}", "~"],
}

//////////////////////// FUNCTIONS 

// Generating a password function with empty arrays.
function generatePassword() { 
  var userPasswordParameters = userInput();
  // console.log("userPasswordParameters", userPasswordParameters);
 return userPasswordParameters; 
}

// function for random characters
function randomChar(array) {
    var i = Math.floor(Math.random() * array.length);
    var element = array[i];
    // console.log("random element" , element);
    return element;
} 

//Main logic to return the pasasword based on user inputs 
function userInput () { 

    var passwordLength = parseInt(prompt ("Please provide a desired number of characters for generating a password."));
    // User's possible choices
    var passwordNumbers;
    var passwordLowerCase;
    var passwordUpperCase;
    var passwordSymbols;

    //Additional Varaibles 
    var userPassword = [];
    var userCharacters = [];
    var charactersInc = [];

  
    //Initial alerts
    if (isNaN(passwordLength) === true) {
      alert("Password length must be provided as a number. Try again!");
      return ;
      
    } 
    console.log(typeof passwordLength);
    if( typeof passwordLength === 'string') {
      alert ("Password length must be provided as a number. Try again!");
      return ;
    }
    if (passwordLength <= 8) {
      alert ("Password length must be at least 8 characters.");
      return ; 
    }
    if (passwordLength >= 128) {
      alert ("Password length must be less than 128 characters.");
      return ;
    }

     // Confirms
     passwordNumbers = confirm ("Click OK to include numbers in your password.");
     passwordLowerCase = confirm ("Click OK to include lower case letters in your password.");
     passwordUpperCase = confirm ("Click OK to include upper case letters in your password.");
     passwordSymbols = confirm ("Click OK to include special characters in your password.");

    //  Alert for when a user doesn't select neither of the parameters for the password
    if (!passwordNumbers && !passwordLowerCase && !passwordUpperCase && !passwordSymbols) {
      alert("Please select at least one character type to generate the password.");
      return
    }

      //Collecting all of the characters
      if (passwordSymbols) {
        charactersInc = charactersInc.concat(password.symbols);
        userCharacters.push(randomChar(charactersInc));
      }
  
      if (passwordNumbers) {
        charactersInc = charactersInc.concat(password.numbers);
        userCharacters.push(randomChar(charactersInc));
      }
  
      if (passwordUpperCase) {
        charactersInc = charactersInc.concat(password.upperCase);
        userCharacters.push(randomChar(password.upperCase));
      }
  
      if (passwordLowerCase) {
        charactersInc = charactersInc.concat(password.lowerCase);
        userCharacters.push(randomChar(password.lowerCase));
      }
      // console.log(charactersInc); 

      // Loop to match the password with the chosen length.
      for (var i = 0; i < passwordLength; i++) {
        var possibleCharacters = randomChar(charactersInc);
        userPassword.push(possibleCharacters);
      }
      return  userPassword.join(""); 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add an event listener to generate button
generateBtn.addEventListener("click", writePassword);


