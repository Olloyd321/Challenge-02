// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1,2,3,4,5,6,7,8,9]
var symbols = ['!','@','#','$','%','^','&','*','(',')','-','=']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','X','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','x','z']

// this function grabs the arrays and randomizes the contents and returns that result
function getRandom(arr){
  var randomIndex = Math.floor(Math.random()*arr.length)
  var randomArray = arr[randomIndex]
  return randomArray
}


// A better name for this function would have been something like "user input" or "User choices" 
// as it requires input from the user

function passwordOption(){
  var length = parseInt(
    prompt('How many characters do you want in your password?')
  )
  if (Number.isNaN(length)){
    alert('Must be a integer')
    return null
  }
  if(length<8||length>128){
    alert('Must be between 8-128 characters')
    return null
  }


  var options = {
    length:length,
    wantSpecial:confirm('click OK to use special characters, or click CANCEL to skip.'),
    wantNumber:confirm('click OK to use numbers, or click CANCEL to skip.'),
    wantLower:confirm('click OK to use UpperCase, or click CANCEL to skip.'),
    wantUpper:confirm('click OK to use LowerCase, or click CANCEL to skip'),
  }
  return options
}

// this function will generate the password for the user
function generatePassword(){

  var choices = passwordOption()
  var endResult = []
  var possibleChoices = []
  var gaurenteedChoices = []
  
  if (!choices)return null

  if (choices.wantSpecial){
    possibleChoices = possibleChoices.concat(symbols)
    gaurenteedChoices.push(getRandom(symbols))
  }
  if (choices.wantNumber){
    possibleChoices = possibleChoices.concat(numbers)
    gaurenteedChoices.push(getRandom(numbers))
  }

  if (choices.wantLower){
    possibleChoices = possibleChoices.concat(lowerCase)
    gaurenteedChoices.push(getRandom(lowerCase))
  }

  if (choices.wantUpper){
    possibleChoices = possibleChoices.concat(upperCase)
    gaurenteedChoices.push(getRandom(upperCase))
  }
  for (var i=0;i<choices.length;i++){
    var possibleChoice = getRandom(possibleChoices)
    endResult.push(possibleChoice)
  }

  for (var i=0;i<gaurenteedChoices.length;i++){
    endResult[i]=gaurenteedChoices[i]
  }
  
  return endResult.join('') 
// the join basically seperates returned values by a space?
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
