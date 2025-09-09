let menu = document.getElementById("menu")
let enlace = document.getElementById("enlace")

menu.addEventListener("click", () => {
    menu.classList.toggle("hola")
    enlace.classList.toggle("ancho")
})
