// Define hooks
let generateBtn = document.getElementById("generate");

let copyBtn = document.getElementById("copy");

let instructionText = document.getElementsByClassName("instructions");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const numerals = "0123456789";
const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
   
// function atLeastOne(){
//   const checkboxes = Array.from(document.querySelectorAll(".checkbox"));
//   return checkboxes.reduce((acc, curr) => acc || curr.checked, false);
// }


function generatePassword(){
  let somethingChecked = document.getElementsByClassName("form-check-input");

  console.log(somethingChecked);

  let password = "", 
  charTypes = "";

  let inputLength = (document.getElementById(passwordLength)).value; //input from form 

//set the charTypes string based on their selections
if (somethingChecked.includes(lowerCaseCheck)){
  charTypes+=lowerCase;
  console.log("lowerCase added");
  }

if (selectedTypes.includes(2)){
  charTypes+=upperCase;
  }

if (selectedTypes.includes(3)){
  charTypes+=numerals;
  }

if (selectedTypes.includes(4)){
  charTypes+=specialChars;
  }

for (let i=0; i < inputLength; i++){
  password += charTypes[Math.floor(Math.random() * (charTypes.length))]; 
  console.log(password);
  }
}

// Write password to the #password input
function writePassword() {

  document.getElementById("newPassword").value = generatePassword();
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

function atLeastOne(){
  let thereIs = false;
  for (i=0; i < somethingChecked.length; i++){
    if (somethingChecked[i].checked){
      thereIs = true;
      break;
    }
  }
  return thereIs;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  if(atLeastOne()){
    writePassword(); 
    }
  
  else { //change instruction text to red 
  instructionText.classList.add("warn");
  }
});

// BONUS EVENT LISTENER
