const ham = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
ham.addEventListener("click", ()=>{
    ham.classList.toggle("active")
    navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    ham.classList.add("active")
    navMenu.classList.remove("active")
}))

