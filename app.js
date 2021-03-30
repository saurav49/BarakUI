// Toast

const btnToast = document.querySelector(".btn-toast");
const toastClose = document.querySelector(".toast-close");
const toast = document.querySelector(".toast");


btnToast.addEventListener("click", () => {
    toast.style.display = "block";
});

toastClose.addEventListener("click", () => {
    toast.style.display = "none";
});

// Modal

// const btnClose = document.querySelector(".modal-close");
// const modalWindow = document.querySelector(".modal");
// const modalBtn = document.querySelector("#modal-btn");

// console.log("outside modal");

// modalBtn.addEventListener("click", () => {
//     console.log(`MODAL`);
//     modalBtn.style.display = "none";
//     modalWindow.style.display = "block";
// });


// btnClose.addEventListener("click", () => {
//     modalWindow.style.display = "none";
//     modalBtn.style.display = "block";
// });
