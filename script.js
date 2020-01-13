// Define hooks
let generateBtn = document.getElementById("generate");

let copyBtn = document.getElementById("copy");

let instructionText = document.getElementsByClassName("instructions");

let somethingChecked = document.getElementsByClassName("form-check-input"); 

let resultsBox = document.getElementById("results");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const numerals = "0123456789";
const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
   
function generatePassword(){
  let password = "", 
      charTypes = "";

  let inputLength = document.getElementById("passwordLength").value; //input from form 

  //set the charTypes string based on their selections
  if (somethingChecked[0].checked){ //lowercase checked
    charTypes+=lowerCase;
    }

  if (somethingChecked[1].checked){ //uppercase checked
    charTypes+=upperCase; 
    }

  if (somethingChecked[2].checked){ //numbers checked
    charTypes+=numerals;
    }

  if (somethingChecked[3].checked){ //specials checked
    charTypes+=specialChars;
    }

  for (let i=0; i < inputLength; i++){
    password += charTypes[Math.floor(Math.random() * (charTypes.length))]; 
    }

  return password;
  }

// Write password to the #password input
function writePassword() {

  document.getElementById("newPassword").value = generatePassword();
  
  resultsBox.classList.remove("isHiding"); //show the results pane
}

function copyToClipboard() { //copy to clipboard
    document.getElementById('newPassword').select();
    document.execCommand('copy');
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
  if(atLeastOne() && document.getElementById("passwordLength").value){ //length is truthy
    writePassword(); 
    }
  
  else if (!atLeastOne()){ //change instruction text to red 
  instructionText[0].classList.add("warn");
  }
});

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", function(event){ //when the copy button is clicked
  event.preventDefault()
  copyToClipboard();
});
