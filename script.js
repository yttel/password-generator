let generateBtn = document.getElementById("generate");

let copyBtn = document.getElementById("copy");

let instructionText = document.getElementsByClassName("instructions");

let somethingChecked = document.getElementsByClassName("form-check-input"); 

let resultsBox = document.getElementById("resultsPane");

let allOfIt = document.getElementById("allTheThings");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = lowerCase.toUpperCase();
const numerals = "0123456789";
const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const allTypes = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  // fill in rest of these
}
   
function generatePassword(){
  let password = "", 
      charTypes = "";

  let inputLength = document.getElementById("passwordLength").value; //input from form 

  // console.log(allTypes[somethingChecked[0].getAttribute("data-charString")]);

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
  
  let child2 = allOfIt.children[2];

  document.getElementById("newPassword").value = generatePassword();
  
  // // create two columns - info left, results right
  addRemoveClass(allOfIt.children[0], "remove","col-sm-3");
  addRemoveClass(child2, "remove","col-sm-3");
  addRemoveClass(child2, "add", "col-sm-6");
  
  //show the results pane
  resultsBox.classList.remove("isHiding");
}

function addRemoveClass(element, command, className){
  if (command === "add"){
    element.classList.add(className);
  }
  else if(command === "remove"){
    element.classList.remove(className);
  }
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
  let pwLength = document.getElementById("passwordLength").value;

  if (!atLeastOne()){ //change instruction text to red 
    instructionText[0].classList.add("warn");
  }
  else if(pwLength < 8 || pwLength > 128) { //length isn't in range
    alert("Desired length must be a number between 8 and 128!");
  }

  else { // at least one checked and length ok
    writePassword(); 
  }
});

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", function(event){ //when the copy button is clicked
  event.preventDefault()
  copyToClipboard();
});
