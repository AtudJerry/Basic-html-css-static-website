const button = document.getElementById("but")
const lis = document.querySelector(".dropdown-list")

button.addEventListener("click", function (){
    lis.classList.toggle("close");

})