import {
  donateBtn,
  friendFeedBtn,
  emailInput,
  submitInput,
} from "./modules/querySelectors.js";

import { isValidEmail } from "./modules/isValidEmail.js";

friendFeedBtn.addEventListener("click", () =>
  window.open("../desktop_donate/index.html")
);

donateBtn.addEventListener("click", () =>
  window.open("../desktop_donate/index.html")
);

emailInput.addEventListener("input", (event) => {
  emailInput.value = event.target.value;

  isValidEmail(emailInput.value)
    ? submitInput.setAttribute("disabled", true)
    : submitInput.removeAttribute("disabled");
});
