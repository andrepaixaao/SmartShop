
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "123" && password == "123"){
alert ("Login successfully");
window.location = "indexLogin.html"; 
return false;
}
}
