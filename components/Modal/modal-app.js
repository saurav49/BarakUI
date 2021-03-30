const btnClose = document.querySelector(".modal-close");
const modalWindow = document.querySelector(".modal");
const modalBtn = document.querySelector("#modal-btn");

modalBtn.addEventListener("click", () => {
    modalBtn.style.display = "none";
    modalWindow.style.display = "block";
});


btnClose.addEventListener("click", () => {
    modalWindow.style.display = "none";
    modalBtn.style.display = "block";
});
