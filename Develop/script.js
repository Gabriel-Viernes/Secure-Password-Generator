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
  if(passLength < 8 || passLength > 128 || passLength===NaN) {
    alert(`Invalid format, password length must be in numbers and between 8 and 128. Please generate another password.`);
    return false;
  } else {
    return passLength;
  }
}

// chooses a random character 
// takes an queryArr from promptCritGen and adds charSets to a temporary array using criteria selected 
function randChar(input) {
  let lower = "abcdefghijklmnopqrstuvwxyz"
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numeral = "0123456789"
  let special =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  let inclCharset = [];
  let password;
  // 
  for (let i = 0; i < 4; i++) {
    if((input[i] === `Y`) || (input[i] === `y`)) {
      if(i == 0) {
        inclCharset.push(lower);
      }
      if(i == 1) {
        inclCharset.push(upper);
      }
      if(i == 2) {
        inclCharset.push(numeral);
      }
      if(i == 3) {
        inclCharset.push(special);
      }
    }
  }
  console.log(`chosen charset is ${inclCharset}`);
  for (let i = 0; i < input[i]; i++){
    // choose random string from inclCharset
    let tempCharset = inclCharset[Math.floor(Math.random() * inclCharset.length())]
    console.log(tempCharset);
    // choose random char from chosen string
    let chosenChar = tempCharset.charAt(Math.floor(Math.random(tempCharset.length())));
    console.log(`chosenChar: ${chosenChar}`);
    password = password + chosenChar;
    console.log(`password at this stage is: ${chosenChar}`);
  }
}


// creates an array with charset selections and chosen password length
// returns array with charset selections and chosen password length
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
  console.log(`queryarr = ${queryArr}`);
  return queryArr;
}

// generates the password
function generatePassword() {
  console.log("Password generation initialized")
  // prompt generator
  let criteria = promptCritGen();
  if(criteria === undefined) {
    console.log(`Password generation canceled`);
    alert(`Invalid selection, please answer using Y/N only`)
    return;
  } 
  console.log(`queryArr is:` + criteria);
  randChar(criteria);
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
