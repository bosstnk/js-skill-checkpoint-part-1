// Question #3
let userPassword = "ssfsd";
// เริ่มเขียนโค้ดตรงนี้]
function checkPasswordStrength(password){
    if (userPassword.length < 6) {
        return "Weak"
    } else if (userPassword.length <= 10) {
        return "Medium"
    } else {return "Strong"}
}

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword));
userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword));
userPassword = "abcde"
console.log(checkPasswordStrength(userPassword));