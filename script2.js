
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var checkbox = document.querySelector("#checkbox");


function generatePassword() {
    //Ask user how long password length should be
    var askPwdLength = prompt("How long do you want your password to be? Your password MUST be 8 to 128 characters.");

    //User can't input anything less than 8 and greater than 128 characters long
    if (askPwdLength >= 8 && askPwdLength <= 128) {
        alert("Your password will have " + askPwdLength + " characters");
        console.log(askPwdLength);


    var special= confirm ("Do you want special charaters in your password?");
    var number = confirm ("Do you want numbers in your password?");
    var lowCase= confirm ("Do you want to include lowercase characters in your password?");
    var upperCase= confirm ("Do you want Upper case letters in your password?");

    var bankpass = ""
    var password = ""
    
    if (upperCase) {
        bankpass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (lowCase) {
        bankpass += "abcdefghijklmnopqrstuvwxyz"
    }

    if (special) {
        bankpass += "!@#$%^&*(),.<>:;'{}=+"
    }

    if (number) {
        bankpass += "1234567890"
    }

    for (i = 0; i < askPwdLength; i++) {
        console.log("i" + i);
        password += bankpass.charAt(Math.floor(Math.random()* bankpass.length));
        console.log("password" + password)
        console.log("bankpass" + bankpass)

    }

    return (password);

    } else {
    alert("Your password needs to be 8-128 characters long. Try again.");
    // var askPwdLength = prompt("How long do you want your password to be? Your password MUST be 8 to 128 characters.");
    } }

    //Write password in input

    function writePassword(){
        var password = generatePassword();
        var passwordText= document.querySelector("#password");

        passwordText.value = password;

        copyBtn.removeAttribute("disabled");
        copyBtn.focus();
}

function copyToClipboard() {
    var password = document.getElementById("password");
    password.select();
    password.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + password.value);

    }


    generateBtn.addEventListener("click", writePassword);