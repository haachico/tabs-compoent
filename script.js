const btns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btns-container");
const content = document.querySelectorAll(".text-content");

// btnContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".btn");
//   if (!clicked) return;

//   btns.forEach((b) => b.classList.remove("btn-active"));
//   content.forEach((c) => c.classList.remove("text-content-active"));
//   clicked.classList.add("btn-active");
//   document
//     .querySelector(`.text-content-${clicked.dataset.btn}`)
//     .classList.add("text-content-active");
// });

btnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn");
  if (!clicked) return;

  btns.forEach((b) => b.classList.remove("btn-active"));
  content.forEach((c) => c.classList.remove("text-content-active"));
  clicked.classList.add("btn-active");
  document
    .querySelector(`.text-content-${clicked.dataset.btn}`)
    .classList.add("text-content-active");
});
