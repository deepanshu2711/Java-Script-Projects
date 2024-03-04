
const btn = document.querySelector(".btn");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal")
const body = document.body

const container = document.querySelector(".container")

btn.addEventListener("click", () => {
    if (btn.classList.contains("hidden")) {
        btn.classList.remove("hidden")
    }
    else {
        btn.classList.add("hidden")
        body.style.backgroundImage = "url('images/dark.jpg')"
    }

    if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden")
    }
    else {
        modal.classList.add("hidden")
    }
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden")
    btn.classList.remove("hidden")
    body.style.backgroundImage = "url('images/2150712464.jpg')"
})