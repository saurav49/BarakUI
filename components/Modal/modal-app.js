const btnClose = document.querySelector(".modal-style-close-btn");
const modalWindow = document.querySelector(".modal-style-content");
const modalBtn = document.querySelector("#modal-btn");
const modalContainer = document.querySelector(".modal-style ");

modalBtn.addEventListener("click", () => {
  modalBtn.style.display = "none";
  modalContainer.style.display = "block";
  modalWindow.style.display = "block";
});

btnClose.addEventListener("click", () => {
  modalWindow.style.display = "none";
  modalBtn.style.display = "block";
  modalContainer.style.display = "none";
});
