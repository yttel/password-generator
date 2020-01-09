// Assignment Code
var generateBtn = document.querySelector("#generate");

// let debug = true; //make true when debugging
// int inputLength = input from text box (cleaned and checked)
// let selectedTypes = array containing which types they want
// let debug = true;

// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const upperCase = lowerCase.toUpperCase();
// const numerals = "0123456789";
// const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// let charTypes = concat of the type(s) they select
// let password, charTypes = "";

//set the charTypes string based on their selections
//if (selectedTypes.includes(lowerCaseCheck)){
//  charTypes+=lowerCase;
//}
//if (selectedTypes.includes(upperCaseCheck)){
//  charTypes+=upperCase;
//}//if (selectedTypes.includes(numeralCheck)){
//  charTypes+=numerals;
//}//if (selectedTypes.includes(specialCharsCheck)){
//  charTypes+=specialChars;
//}
//for (let i=0; i < inputLength; i++){
//    password += charTypes[Math.floor(Math.random() * (charTypes.length))]; 
//  }
//return password;
//}


// function atLeastOne(){
//   const checkboxes = Array.from(document.querySelectorAll(".checkbox"));
//   return checkboxes.reduce((acc, curr) => acc || curr.checked, false);
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
