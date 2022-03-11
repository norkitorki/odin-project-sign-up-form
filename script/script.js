const password        = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

function checkPasswordEquality() {
  let span = document.querySelector("#password-confirm + span");

  let message = (password.value === passwordConfirm.value) ? "" : "*Passwords do not match.";
  span.textContent = message;
  passwordConfirm.setCustomValidity(message);
};

password.oninput = checkPasswordEquality;
passwordConfirm.oninput = checkPasswordEquality;