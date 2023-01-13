// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1,2,3,4,5,6,7,8,9]
var symbols = ['!','@','#']
var upperCase = ['A','B','C','D']
var lowerCase = ['a','b','c','d']

function getRandom(arr){
  var randomIndex = Math.floor(Math.random()*arr.length)
  var randomArray = arr[randomIndex]  
}

function passwordOption(){
  var length = parseInt(
    prompt('How long do you want your password to be?')
  )
  if (Number.isNaN(length)){
    alert('Must be a integer')
    return null
  }
  if(length<8||length>128){
    alert('Must be between 8-128 characters')
    return null
  }
  var wantSpecial = confirm('click OK to confirm special characters.')
  var wantNumber = confirm('click OK to confirm number.')
  var wantUpper = confirm('click OK to confirm UpperCase.')
  var wantLower = confirm('click OK to confirm LowerCase')

  var options = {
    length:length,
    wantSpecial:wantSpecial,
    wantLower:wantLower,
    wantUpper:wantUpper,
  }
  return options
}

function generatePassword(){

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
