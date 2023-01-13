// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1,2,3,4,5,6,7,8,9]
var symbols = ['!','@','#']
var upperCase = ['A','B','C','D']
var lowerCase = ['a','b','c','d']

function getRandom(){
  
}

function passwordOption(){

}

function genreatePassword(){

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
