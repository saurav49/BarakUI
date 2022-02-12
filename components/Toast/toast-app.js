const btnToast = document.querySelector(".btn-toast");
const toastClose = document.querySelector(".toast-close");
const toast = document.querySelector(".toast");


btnToast.addEventListener("click", () => {
    toast.style.display = "block";
});

toastClose.addEventListener("click", () => {
    toast.style.display = "none";
})