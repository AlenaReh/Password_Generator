// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible password values
var characters = '1234567890abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz!"@#$%^&*()_-+=[]{};.,<>\|~';
var passwordLength = '';
var password = '';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function generatePassword () {
    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * characters.length);
      password += characters.substring(randomNumber, randomNumber + 1);
  }
    passwordText.value = password;
} 

document.getElementById("password").value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//alert ("Sorry, your password has to be no longer than 128 characteristics")
function passwordLength () { 
  if (passworLength = false) {
    alert ("Password length must be provided as a number");
  }
  else if (passwordLength < 8) {
    alert ("Password length must be at least 8 characters.");
  }
  else if (passwordLength > 129) {
    alert ("Password length must be less than 129 characters.");
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
  document.getElementById("password").value = password;
  }
}