// Assignment code here
function yesNoCheck(x) {
  if((x === `Y`) || (x === `N`) || (x === `y`) || (x === `n`)) {
    return true;
  } else {
    return false;
  }
}

function getPassLength() {
  let getLength = prompt("Please enter, in numbers, your desired password length. Length must be between 8 and 128 characters.");
  let passLength = Number(getLength);
  if(passLength < 8 || passLength > 128 || passLength===NaN) {
    alert(`Invalid format, password length must be in numbers and between 8 and 128. Please generate another password.`);
    return false;
  } else {
    return passLength;
  }
}

function promptCritGen() {
  let i = getPassLength();
  console.log(`Chosen password length: ${i}`);
  if(i === false) {
    console.log(`Invalid length specified`)
    return;
  }
  let lowerQuery = prompt("Would you like your password to include lowercase characters? Type Y/N");
  console.log(`lowercase selection ${lowerQuery}`);
  let upperQuery = prompt("Would you like your password to include uppercase characters? Type Y/N");
  console.log(`uppercase selection ${upperQuery}`);
  let numQuery = prompt("Would you like your password to include numbers? Type Y/N");
  console.log(`number selection ${numQuery}`);
  let specQuery = prompt("Would you like your password to include special characters? Type Y/N");
  console.log(`special character selection ${specQuery}`);
  let queryArr = [lowerQuery,upperQuery,numQuery,specQuery];
  for (let i = 0; i < queryArr.length; i++) {
    if(yesNoCheck(queryArr[i]) === false) {

      console.log(`Invalid response detected, canceling...`);
      return;
    }
  }
  queryArr.push(i);
  return queryArr;
}

function generatePassword() {
  console.log("Password generation initialized")
  // prompt generator
  let queryArr = promptCritGen();
  if(queryArr === undefined) {
    console.log(`Password generation canceled`);
    alert(`Invalid selection, please answer using Y/N only`)
    return;
  }

  
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
