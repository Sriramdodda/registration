const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    errorMsg.textContent = "Passwords do not match!";
  } else {
    errorMsg.textContent = "";
    alert("Registration successful!");
    form.submit();
  }
});
