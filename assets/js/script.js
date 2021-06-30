// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible password values
var characters = '1234567890abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz!"@#$%^&*()_-+=[]{};.,<>\|~';
var passwordLength = '';
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword () {
  prompt ("Enter in a desired number of characters.");

    if (passwordLength != null) {
      document.getElementById("password").value = password;
    }

    else if (passwordLength < 8) {
      promt ("Password length must be at least 8 characters.");
    }

    else function charactersConfirmation() {
      if (confirm("Click OK to confirm including special characters in your password.")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
      document.getElementById("password").value = password;
    }

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * characters.length);
      password += characters.substring(randomNumber, randomNumber+1);
  }

} //end generate password definition



document.getElementById("password").value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//alert ("Sorry, your password has to be no longer than 128 characteristics")