// checks promptCritGen's array for invalid user inputs
function yesNoCheck(x) {
  if((x === `Y`) || (x === `N`) || (x === `y`) || (x === `n`)) {
    return true;
  } else {
    return false;
  }
}

// asks user for desired password length and returns it
function getPassLength() {
  let getLength = prompt("Please enter, in numbers, your desired password length. Length must be between 8 and 128 characters.");
  let passLength = Number(getLength);
  if((passLength < 8) || (passLength > 128) || (Number.isNaN(passLength) === true)) {
    alert(`Invalid format, password length must be in numbers and between 8 and 128. Please generate another password.`);
    return false;
  } else {
    return passLength;
  }
}

// chooses a random character 
// takes array from promptCritGen and adds charSets to a temporary array using criteria selected 
function randChar(input) {
  let lower = "abcdefghijklmnopqrstuvwxyz"
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numeral = "0123456789"
  let special =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  let inclCharSet = [];
  let password;
  // adds character sets to array based on responses given by user
  for (let i = 0; i < 4; i++) {
    if((input[i] === `Y`) || (input[i] === `y`)) {
      if(i == 0) {
        inclCharSet.push(lower);
      }
      if(i == 1) {
        inclCharSet.push(upper);
      }
      if(i == 2) {
        inclCharSet.push(numeral);
      }
      if(i == 3) {
        inclCharSet.push(special);
      }
    }
  }
  if(inclCharSet.length === 0) {
    alert(`No criteria chosen, exiting...`)
    return false;
  }
  // sets the first index in password to avoid undefined
  let tempCharSet = inclCharSet[Math.floor(Math.random() * inclCharSet.length)]
  let chosenChar = tempCharSet.charAt(Math.floor(Math.random() * tempCharSet.length));
  password = chosenChar;
  for (let i = 1; i < input[4]; i++){
    // choose random character set from inclCharset
    tempCharSet = inclCharSet[Math.floor(Math.random() * inclCharSet.length)]
    // choose random char from chosen string
    chosenChar = tempCharSet.charAt(Math.floor(Math.random() * tempCharSet.length));
    password += chosenChar;
  }
  return password;
}
// creates an array with charset selections and chosen password length in following format [lowercase Response, uppercase res, number res, special res, password length]
// returns array with charset selections and chosen password length
function promptCritGen() {
  let tempLength = getPassLength();
  if(tempLength === false) {
    console.log(`Invalid length specified`)
    return undefined;
  }
  let lowerQuery = prompt("Would you like your password to include lowercase characters? Type Y/N");
  let upperQuery = prompt("Would you like your password to include uppercase characters? Type Y/N");
  let numQuery = prompt("Would you like your password to include numbers? Type Y/N");
  let specQuery = prompt("Would you like your password to include special characters? Type Y/N");
  let queryArr = [lowerQuery,upperQuery,numQuery,specQuery];
  // checks for invalid responses
  for (let i = 0; i < queryArr.length; i++) {
    if(yesNoCheck(queryArr[i]) === false) {
      return;
    }
  }
  queryArr.push(tempLength);
  return queryArr;
}
// generates the password
function generatePassword() {
  // asks user for desired password criteria
  let criteria = promptCritGen();
  if(criteria === undefined) {
    alert(`Invalid selection, please try again`)
    return;
  } 
  return randChar(criteria); 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password === false) {
    passwordText.textContent = "No criteria selected"
    return;
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
