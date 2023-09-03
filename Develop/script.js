// Assignment code here
function getPassLength() {
  let getLength = prompt("Please enter, in numbers, your desired password length. Length must be between 8 and 128 characters.");
  let passLength = Number(getLength);
  if(passLength < 8 || passLength > 128 || passLength===NaN) {
    alert(`Invalid format, password length must be in numbers and between 8 and 128`);
    return false;
  } else {
    return passLength;
  }
}

function promptCritGen() {
  if(getPassLength === false) {
    return;
  }

}

function generatePassword() {
  console.log("Button clicked")
  // prompt generator
  console.log(`Password length selected: ${promptCritGen()}`);
  
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
