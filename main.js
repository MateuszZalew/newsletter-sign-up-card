const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("span.error");
const firstCard = document.querySelector(".first__card");
const secondCard = document.querySelector(".second__card");
const secondCardBtn = document.querySelector(".second__card button");

email.addEventListener("input", () => {
  if (!email.validity.valid) {
    email.className = "input--error";
    emailError.className = "error active";
  } else {
    email.classList.remove("input--error");
    emailError.classList.remove("active");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!email.validity.valid) {
    email.className = "input--error";
    emailError.className = "error active";
  } else {
    this.reset();
    email.classList.remove("input--error");
    emailError.classList.remove("active");
    firstCard.style.display = "none";
    secondCard.style.display = "flex";
  }
});

secondCardBtn.addEventListener("click", () => {
  firstCard.style.display = "grid";
  secondCard.style.display = "none";
});
