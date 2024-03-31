const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");

document.getElementById("submit").addEventListener("click", () => {
  if (!fname.value || !lname.value || !email.value || !message.value) {
    alert("Please fill out all fields");
  } else {
    alert("Form submitted!");
  }
});
