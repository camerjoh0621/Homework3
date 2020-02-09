// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var useUppercase;
var useLowercase;
var useNumbers;
var useSymbols;




// Write password to the #password input
function promptPassword() {
  // Create prompts and attach to variable so we can use later
  passwordLength = prompt('Create password length by entering a number between 8 and 126');
  useUppercase = confirm('Use uppercase letters in password? Yes/No');
  useLowercase = confirm('Use lowercase letters in password? Yes/No');
  useNumbers = confirm('Use numbers in password? Yes/No');
  useSymbols = confirm('Use symbols in password? Yes/No');

  generatePassword();
}

function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordString = " ";

  for (var i = 0; i <= passwordLength; i++) {
    if (useUppercase) {

      if (passwordLength !== 0) {
        passwordString = passwordString.concat(getRandomUpper())
        passwordLength--
      }
      else {
        writePassword(passwordString);
        return 
      }
    }

    if (useLowercase) {
      if (passwordLength !== 0) {
        passwordString = passwordString.concat(getRandomLower())
        passwordLength--
      }
      else {
        writePassword(passwordString);
        return 
      }
    }
    if (useNumbers) {
      if (passwordLength !== 0) {
        passwordString = passwordString.concat(getRandomNumber())
        passwordLength--
      }
      else {
        writePassword(passwordString);
        return 
      }

    }
    if (useSymbols) {
      if (passwordLength !== 0) {
        passwordString = passwordString.concat(getRandomSymbol())
        passwordLength--
      }
      else {
        writePassword(passwordString);
        return 
      }
    }
  }
  return passwordString
}





/*
  var length = passwordLength;
  var uppercase = useUppercase;
  var lowercase = useLowercase;
  var numbers = useNumbers;
  var symbols = useSymbols;
  */

// Add event listener to generate button
generateBtn.addEventListener("click", promptPassword);



// Functions that create random values for each criteria for the password

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]<>/';
  return symbols[Math.floor(Math.random() * symbols.length)]
}



