let labels = document.querySelectorAll("label");
let promoTitle = document.getElementById("promoTitle");

document.getElementById("profile").addEventListener("click", () => {
  labels.forEach((label) => {
    if (label.className === "promo") {
      label.style.display = "block";
    } else {
      label.style.color = "Red";
      label.style.textDecoration = "line-through";
    }
  });
  promoTitle.style.display = "block";
  promoTitle.style.margin = "200px 0";
});
