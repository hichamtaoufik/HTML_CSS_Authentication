const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  let valid = true;

  if (username.value.trim() === "") {
    alert("Username is required!");
    valid = false;
  }

  if (password.value.trim() === "") {
    alert("Password is required!");
    valid = false;
  }

  if (!valid) {
    event.preventDefault(); // منع الفورم من الإرسال إذا كاين خطأ
  }
});
