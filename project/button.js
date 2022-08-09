var id = document.getElementById("id");
var password = document.getElementById("password");
var login = document.getElementById("login");
var verify = document.getElementById("verify");
password.addEventListener("keyup", checkButton);
id.addEventListener("keyup", checkButton);
verify.addEventListener("keyup", checkButton);

function checkButton() {
  id.value.length > 0 && password.value.length > 0 && verify.value.length > 0
    ? (login.disabled = false)
    : (login.disabled = true);
}
