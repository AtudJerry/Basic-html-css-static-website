const button = document.getElementById("but")
const close = document.querySelector(".close")

button.addEventListener("click", () => {
    close.classList.toggle("dropdown-list");

})