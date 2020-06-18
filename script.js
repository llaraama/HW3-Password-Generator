// Assignment Code
var generateBtn = document.querySelector("#generate");




var lowercase= "abcdefghijklmnop"
var numbers="0123456789";
var uuppercase= "ABCDEFGHIJKLMNOP"
var specialCharacters= " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";




function generatePassword(){
  var charactersNeeded =[]
  var finalPass = []
  var guaranteeChar=[]

  var length = prompt("how long do you want your password to be? It can be between 8 to 128 characters.")
  
  if(length < 8 ){
    alert("error your password needs to contain at least 8 characters");
  }
  else if(length > 128){
    alert("error your password should not contain more than 128");
  }else{

  var number = confirm("do you want numbers?")
  var capitalletters = confirm("do you want capital letters?")
  var lowercaseletters = confirm("do you want lowercase letters?")
  var special = confirm("do you want special characters?")
  }


  if(number){
    var num = numbers.split("")
    charactersNeeded = charactersNeeded.concat(num)
    var neededNum = num[Math.floor(Math.random()*num.length)]
    
    guaranteeChar.push(neededNum)

  }
  if(capitalletters){
    var capLtr = uuppercase.split("")
    charactersNeeded = charactersNeeded.concat(capLtr)
    var neededClet = capLtr[Math.floor(Math.random()*capLtr.length)]

    guaranteeChar.push(neededClet)
  }

  if(lowercaseletters){
    var lowCase = lowercase.split("")
    charactersNeeded = charactersNeeded.concat(lowCase)
    var neededLlet = lowCase[Math.floor(Math.random()*lowCase.length)]
    guaranteeChar.push(neededLlet)

  }
  
  if(special){
    var specChar = specialCharacters.split("")
    charactersNeeded = charactersNeeded.concat(specChar) 
    var neededSpec = specChar[Math.floor(Math.random()*specChar.length)]
    guaranteeChar.push(neededSpec)

  }
  
  for(var i = 0;i<length;i++){
  let random = charactersNeeded[Math.floor(Math.random()*charactersNeeded.length)]
  finalPass.push(random)
}

for(var t =0;t<guaranteeChar.length;t++){
  finalPass[t] = guaranteeChar[t]
}


// return password
var x = finalPass.join("")

return x

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




