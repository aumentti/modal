const openModalBtn = document.getElementById("open-modal-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const modalBackdrop = document.getElementById("modal-backdrop")

openModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "flex"
  document.body.style.overflow = 'hidden'
})

closeModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none"
})