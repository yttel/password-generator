// Assignment Code
var generateBtn = document.querySelector("#generate");

// int desiredLength = input from text box (cleaned and checked)
// let selectedTypes = array containing which types they want

// let lowerCase = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z);
// let upperCase = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
// let numerals = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// let specialChars = new Array("!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@");
// let charTypes = new Array(lowerCase, upperCase, numerals, specialChars);

// let password = "";
// let random = 0;

//while password.length < desiredLength{
//  random = Math.floor(Math.random() * 3);   
//  if(selectedTypes.indexOf(random) >= 0){ 
//    password += charTypes[rand[Math.floor(Math.random() * (charTypes.length))]];
//  }
//}



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
