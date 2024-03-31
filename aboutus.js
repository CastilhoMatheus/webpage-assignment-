let container = document.getElementById("container");
let button = document.getElementById("aboutme-btn");

let toggle = 0;

button.addEventListener("click", () => {
  if (toggle === 0) {
    container.style.display = "flex";
    toggle = 1;
  } else {
    container.style.display = "none";
    toggle = 0;
  }
});
