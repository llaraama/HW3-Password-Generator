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

  var length = prompt("how long of a password do you want? It can be between 8 to 128 characters.")
  
  if(length < 8 ){
    alert("error your password need to contain at least 8 characters");
  }
  else if(length > 128){
    alert("error your password should not contain more than 128");
  }

  var number = confirm("do you want numbers")
  var capitalletters = confirm("do you want numbers")
  var lowercaseletters = confirm("do you want numbers")
  var special = confirm()



  if(number){
let num = numbers.split("")
charactersNeeded = charactersNeeded.concat(num)
let neededNum = num[Math.floor(Math.random()*num.length)]

guaranteeChar.push(neededNum)


console.log(charactersNeeded)
  }
  if(capitalletters){

    let capLtr = uuppercase.split("")
charactersNeeded = charactersNeeded.concat(capLtr)
console.log(charactersNeeded)
  }
  if(lowercaseletters){

    let lowCase = lowercase.split("")
charactersNeeded = charactersNeeded.concat(lowCase)
console.log(charactersNeeded)
  }
  
  if(special){

    let specChar = specialCharacters.split("")
charactersNeeded = charactersNeeded.concat(specChar)
console.log(charactersNeeded)
  }

for(var i = 0;i<length;i++){
  let random = charactersNeeded[Math.floor(Math.random()*charactersNeeded.length)]
  finalPass.push(random)
  
}

for(var t =0;t<guaranteeChar.length;t++){
  finalPass[t] = guaranteeChar[t]
}

var x = finalPass.join("")

return x

}



// return password





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




