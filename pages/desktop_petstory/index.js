document
  .querySelector(".friend-feed-button")
  .addEventListener("click", () => window.open("../desktop_donate/index.html"));

document
  .querySelector(".donate-button")
  .addEventListener("click", () => window.open("../desktop_donate/index.html"));

const isValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;

  return re.test(email);
};

let em = document.querySelector("#email");
let submitEmailBtn = document.querySelector(".submit");

em.addEventListener("input", (event) => {
  em.value = event.target.value;

  isValidEmail(em.value)
    ? submitEmailBtn.setAttribute("disabled", true)
    : submitEmailBtn.removeAttribute("disabled");
});
