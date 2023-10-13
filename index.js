const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".button");
modalButton.addEventListener("click", (event) => {
  body.classList.add("show-modal");
});

const closeButton = document.querySelector("button[data-action='close-modal']");
closeButton.addEventListener("click", (event) => {
  body.classList.remove("show-modal");
});

const backdrop = document.querySelector(".backdrop");
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    body.classList.remove("show-modal");
  }
});

const body = document.querySelector("body");
const color = document.querySelectorAll("[name=color]");
color.forEach((element) => {
  element.addEventListener("change", (event) => {
    body.style.background = event.currentTarget.value;
  });
});

const nameInput = document.querySelector("input#name-input");
const nameSpan = document.querySelector("span#name-output");
nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    nameSpan.textContent = "незнайомець";
  } else {
    nameSpan.textContent = event.currentTarget.value;
  }
});

const checkInput = document.querySelector("input#validation-input");
checkInput.addEventListener("change", (event) => {
  if (
    event.currentTarget.value.length ===
    Number(checkInput.getAttribute("data-length"))
  ) {
    debugger;
    checkInput.classList.remove("invalid");
    checkInput.classList.add("valid");
  } else {
    checkInput.classList.remove("valid");
    checkInput.classList.add("invalid");
  }
});

const changeInput = document.querySelector("input#font-size-control");
const changeSpan = document.querySelector("span#text");
changeInput.addEventListener("change", (event) => {
  console.log(event.currentTarget.value);
  changeSpan.style.fontSize = `${event.currentTarget.value}px`;
});
