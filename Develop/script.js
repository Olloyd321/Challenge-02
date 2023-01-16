// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1,2,3,4,5,6,7,8,9]
var symbols = ['!','@','#','$','%','^','&','*',]
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','X','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','x','z']

// this function grabs the arrays and randomizes the contents and returns that result
function getRandom(arr){
  var randomIndex = Math.floor(Math.random()*arr.length)
  var randomArray = arr[randomIndex]
  return randomArray  
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
    wantNumber:wantNumber,
    wantLower:wantLower,
    wantUpper:wantUpper,
  }
  return options
}

// this function will generate the password for the user
function generatePassword(){
  var choices = passwordOption()
  console.log(choices)
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
  console.log(endResult)
  return endResult.join('')

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
