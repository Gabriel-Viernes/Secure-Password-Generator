// var numbers = '1234567890';
// var symbols = '!@#$%^&*()_+-=`~';
// var letters = 'qwertyuiopasdfghjklzxcvbnm';
// var caps = 'QWERTYUIOPASDFGHJKLZXCVBNM';


// const getrandomArr = (arr) =>{
//   let randomIndex = Math.floor(Math.random() * arr.length);
//   let randomEl = arr[randomIndex];

//   return randomEl;
// }

// const generatePassword = () => {
//   const length = parseInt(prompt("how long unga gunga"));
//   if(Number.isNaN(length)|| length< 8 || length >128){
//     alert("wrong");
//     return null;
//   }

//   const wantNum = confirm('would you like numbers?')
//   const wantSym = confirm('want some symbols?')
//   const wantLet = confirm('want some letters?')
//   const wantCap = confirm('want some cap letters?')

//   while(!wantNum && !wantSym && !wantLet && !wantCap){
//     alert('wrong!!!  pick one');
//     return null
//   }

//   passOpp = {
//     length: length,
//     wantNum: wantNum,
//     wantSym: wantSym,
//     wantLet: wantLet,    
//     wantCap: wantCap,
//   }

//   const chosenOps = [
//     {
//       op: passOpp.wantNum,
//       char: numbers,
//     },
//     {
//       op: passOpp.wantSym,
//       char: symbols,
//     },
//     {
//       op: passOpp.wantLet,
//       char: letters,
//     },
//     {
//       op: passOpp.wantCap,
//       char: caps,
//     }
//   ]
 
//   password = [];
//   maybe = [];
 

// chosenOps.forEach((ops)=> {
//   if(ops.op){
//   maybe = maybe += ops.char; 
//   }
//   console.log(password,maybe,forSure)  
// });

// for (let i = 0; i < passOpp.length; i++){
//   let newNew = getrandomArr(maybe);

//   password.push(newNew);
// }

// return password; 
// }
// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// generate prompt to obtain user input for password length
// Function to prompt user for password length
function getPasswordLength() {
  var passLen = parseInt(prompt("Choose a password length of at least 8 characters long and no more than 128 characters."));
  
  // Input validation
  if (passLen < 8 || passLen > 128 || isNaN(passLen)) {
    alert("Please enter a number greater than 8 characters and less than 128 characters.");
    return getPasswordLength(); // Recurse to prompt again
  }
  
  return passLen;
}

// Functions to prompt user for character inclusion
function getCharacterInclusion(promptMessage) {
  var userResponse = prompt(promptMessage).toLowerCase();
  
  if (userResponse === "y") {
    return true;
  } else if (userResponse === "n") {
    return false;
  } else {
    alert("Invalid input. Please enter 'Y' or 'N'.");
    return getCharacterInclusion(promptMessage); // Recurse to prompt again
  }
}

function generatePassword() {
  var passLen = getPasswordLength();
  var includeLower = getCharacterInclusion("Would you like to include lowercase characters? Enter 'Y' for yes or 'N' for no");
  var includeUpper = getCharacterInclusion("Would you like to include uppercase characters? Enter 'Y' for yes or 'N' for no");
  var includeNum = getCharacterInclusion("Would you like to include numeric characters? Enter 'Y' for yes or 'N' for no");
  var includeSpec = getCharacterInclusion("Would you like to include special characters? Enter 'Y' for yes or 'N' for no");

  var symbols = '!@#$%^&*(){}[]<>=/,.';
  var allCharacters = '';

  if (includeLower) allCharacters += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUpper) allCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNum) allCharacters += '0123456789';
  if (includeSpec) allCharacters += symbols;

  var generatedPassword = '';
  for (var i = 0; i < passLen; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    generatedPassword += allCharacters[randomIndex];
  }

  return generatedPassword;
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