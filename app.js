// create arrays that contain the characters for the password
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["1234567890"];
var specialCharacters = ["!@#$%^&*()_+-=?><;"];

// create an html form to collect information about password content
// see index.html
// collect that true/false from each checkbox and make it a variable

var pwdContent = "";

// everything happens when the submit button is clicked
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var wantsLowercase = document.getElementById("lowercase").checked;
  var wantsUppercase = document.getElementById("uppercase").checked;
  var wantsNumbers = document.getElementById("numbers").checked;
  var wantsSpecial = document.getElementById("special-characters").checked;
  var pwdLength = document.getElementById("password-length").value;

  if (pwdLength < 8 || pwdLength > 128) {
    console.log(pwdLength);
    alert("Password length not acceptable. Please choose between 8 and 128.");
  } else if (
    wantsLowercase === false &&
    wantsUppercase === false &&
    wantsNumbers === false &&
    wantsSpecial === false
  ) {
    alert("Password must contain at least one type of character");
  } else {
    if (wantsUppercase === true) {
      pwdContent += lowerCase;
    }
    if (wantsUppercase === true) {
      pwdContent += upperCase;
    }
    if (wantsNumbers === true) {
      pwdContent += numbers;
    }
    if (wantsSpecial === true) {
      pwdContent += specialCharacters;
    }
    console.log("password contains", pwdContent);
    // use a for loop to pick a random character from pwdContent for pwdLength number of times
    var newPassword = "";
    for (var i = 0; i < pwdLength; i++) {
      var randPwdChar = Math.round(Math.random() * pwdContent.length);
      newPassword += pwdContent[randPwdChar];
      console.log(pwdContent[randPwdChar]);
    }
    console.log(newPassword);
  }
});

// if uppercase is true, then add uppercase letters
// if lowercase is true, then add lowercase letters
// if numbers is true, then add numbers
// if specialCharacters is true, then add special characters
// if the user selected no inputs, give an error
// generate a password using random included character types, until password is the correct length

// // access and print a random lower character
// var randLC = Math.round(Math.random() * lowerCase.length);
// console.log(lowerCase[randLC]);

// // access and print a random upper character
// var randUC = Math.round(Math.random() * upperCase.length);
// console.log(upperCase[randUC]);

// // access and print a random number
// var randNum = Math.round(Math.random() * numbers.length);
// console.log(numbers[randNum]);

// // access and print a random special character
// var randSC = Math.round(Math.random() * specialCharacters.length);
// console.log(specialCharacters[randSC]);
