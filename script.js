// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = "";
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+","=", ";", "<", ">", ".", "?", "/"];
var confLowerCase;
var confUpperCase;
var confNumeric;
var confSpecialChar;

// Write password to the #password input
//WritePassword function starts here. Prompt answers are defined here.
function writePassword() {
  //define the length of the password. 
      var passLength = prompt("Type the length of your new password. Choose a length between 8 and 128 characters: ", 8); //set default value 8; agregar parseInt para cambiar string a number
  console.log(passLength);
  while(passLength < 8 || passLength > 128){
    var passLength = prompt("Type the length of your new password. Choose a length between 8 and 128 characters: ", 8); //agregar parseInt para cambiar string a number
  }
  
  if (passLength >= 8 && passLength <= 128) {
    alert("Alright! Now confirm if your password should include lowercase, uppercase, numeric, and/or special characters. Press OK to continue. ");
  }
  //Define type of characters for the password. At least one must be agreed.
  var confLowerCase = window.confirm("Should your password have Lower Case Letters?")
        console.log(confLowerCase);
  var confUpperCase = window.confirm("Should your password have Upper Case Letters?")
        console.log(confUpperCase);
  var confNumeric = window.confirm("Should your password have Numeric Values?")
        console.log(confNumeric);
  var confSpecialChar = window.confirm("Should your password have Special Character?")
      console.log(confSpecialChar);
while(confLowerCase === false && confUpperCase === false && confNumeric === false && confSpecialChar === false) {
      alert("You must accept at least one type of character.");
      var confLowerCase = window.confirm("Should your password have Lower Case Letters?")
        console.log(confLowerCase);
      var confUpperCase = window.confirm("Should your password have Upper Case Letters?")
        console.log(confUpperCase);
      var confNumeric = window.confirm("Should your password have Numeric Values?")
        console.log(confNumeric);
      var confSpecialChar = window.confirm("Should your password have Special Character?")
      console.log(confSpecialChar);
}
// Create new variable with the characters that display true.  
      var base = [];
        if (confLowerCase) {
            var base = base.concat(lowerCase);
        }
        if (confUpperCase) {
            var base = base.concat(upperCase);
        }
        if (confNumeric) {
            var base = base.concat(numeric);
        }
        if (confSpecialChar) {
            var base = base.concat(specialChar);
        }
  console.log(base);

//Here starts the funtion generatePassword
var password = generatePassword();
function generatePassword() {
      var password = "";
    for (var i = 0; i < passLength; i++){
      password = password + base[Math.floor(Math.random() * base.length)];
      console.log(password);
    }
    return password;
    
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Add event listener to generate button. This will activate function writePassword
generateBtn.addEventListener("click", writePassword);
