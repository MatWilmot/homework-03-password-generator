// create arrays that contain the characters for the password
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["1234567890"];
var specialCharacters = ["!@#$%^&*()_+-=?><;"];

// everything happens when the submit button is clicked
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var wantsLowercase = document.getElementById("lowercase").checked;
  var wantsUppercase = document.getElementById("uppercase").checked;
  var wantsNumbers = document.getElementById("numbers").checked;
  var wantsSpecial = document.getElementById("special-characters").checked;
  var pwdLength = document.getElementById("password-length").value;
  var pwdContent = "";

  // use conditional to determine whether or not to run the password generation
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
    // use 4 conditionals to add arrays to empty array for final password to be chosen from
    if (wantsLowercase === true) {
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

    // use a for loop to pick a random character from pwdContent for pwdLength number of
    // times and add it to newPassword
    var newPassword = "";
    for (var i = 0; i < pwdLength; i++) {
      var randPwdChar = Math.floor(Math.random() * pwdContent.length);
      newPassword += pwdContent[randPwdChar];
    }

    // print the password to an html element.
    document.getElementById("password").innerHTML = newPassword;
    document.getElementById("password-length").value = "";
  }
});
