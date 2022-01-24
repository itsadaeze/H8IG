function validate() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value
if(username == "") {
    alert("Username Required");
} else if(password.length < 8 || password.length > 15) {
    alert("passwords should not be less than 8 or greater than 15 characters")
} else if(password == "") {
    alert("Password required")
}else {
    alert("login sucessful")
}
}