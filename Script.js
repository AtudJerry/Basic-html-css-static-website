const button = document.getElementById("but")
const dropdownList = document.querySelector(".dropdown-list")

button.addEventListener("click", () => {
    dropdownList.classList.toggle("close");

})