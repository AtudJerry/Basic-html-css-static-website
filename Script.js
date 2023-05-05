

const button = document.querySelector('.fa')
const closebutton = document.querySelector('.fa-times')
const close = document.querySelector(".close")

button.addEventListener("click", () => {
    
 close.classList.toggle("dropdown-list");

})
closebutton.addEventListener("click", () => {
    
    close.classList.toggle("dropdown-list");
   
   })

