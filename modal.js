const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal(ev) {
  modal.classList.toggle("show-modal");
  ev.stopPropagation();
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);