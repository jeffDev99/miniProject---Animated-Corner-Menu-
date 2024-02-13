let $ = document;
let accountEl = $.querySelector("#account");
let infoEl = $.querySelector("#info");
let messageEl = $.querySelector("#message");
let contactEl = $.querySelector("#contact");
let toggleBtnEl = $.querySelector("#toggle-btn");
let isMenuOpen = false;

toggleBtnEl.addEventListener("click", () => {
  if (!isMenuOpen) {
    accountEl.style.transform = "translate(110px , -15px)";
    infoEl.style.transform = "translate(95px , 58px)";
    messageEl.style.transform = "translate(48px , 117px)";
    contactEl.style.transform = "translate(-25px , 131px)";
    toggleBtnEl.style.transform = "rotate(45deg)"
    isMenuOpen = true;
  } else {
    accountEl.style.transform = "translate(0 , 0)";
    infoEl.style.transform = "translate(0 , 0)";
    messageEl.style.transform = "translate(0 , 0)";
    contactEl.style.transform = "translate(0 , 0)";
    toggleBtnEl.style.transform = "rotate(0)"
    isMenuOpen = false;
  }
});
