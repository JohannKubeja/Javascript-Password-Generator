//Assignment code here

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = 12;                                                                                        // Recommended password length
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";                                                  //Added the charecters as different types
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-="
  var password = "";

  passwordLength = prompt("Please enter a password length between 8 and 128 characters:");       // Alert box for passwords length

  if (passwordLength === null || passwordLength === "") {                                // Has the user has pressed cancel
    return;
  }

  passwordLength = parseInt(passwordLength);                                       // Convert password length to integer

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {                   //Checks for the password length that the user wants
    alert("Please enter a valid number between 8 and 128");
    return;
  }

  var includeLowercase = confirm("Do you want to include lowercase characters?");       //Checks for if user wants lower cases
  var includeUppercase = confirm("Do you want to include uppercase characters?");        //Checks for if user wanter upper cases
  var includeNumeric = confirm("Do you want to include numeric characters?");         //Checks if the user wants numbers
  var includeSpecial = confirm("Do you want to include special characters?");      // Checks if the user wants special characters

  var charset = "";

  if (includeLowercase) {                                                                 // functions for each prompt screen
    charset += lowercaseChars;
  }

  if (includeUppercase) {
    charset += uppercaseChars;
  }

  if (includeNumeric) {
    charset += numericChars;
  }

  if (includeSpecial) {
    charset += specialChars;
  }

  if (charset === "") {
    alert("Please select at least one character type");
    return;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 