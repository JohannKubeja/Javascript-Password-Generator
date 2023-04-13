// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = 12;                                                                                        // Recommended password length
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  var password = "";

  passwordLength = prompt("Please enter a password length between 8 and 128 characters:");       // Alert box for passwords length

  if (passwordLength === null || passwordLength === "") {                                // Has the user has pressed cancel
    return;
  }

  passwordLength = parseInt(passwordLength);                                       // Convert password length to integer

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {       // Check if the password length is not a number or not between 8 and 128
    alert("Please enter a valid number between 8 and 128");
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