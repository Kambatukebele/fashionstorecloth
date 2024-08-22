const MENU = document.querySelector(".MENU");

const CLOSE_MENU = document.querySelector('.CLOSE_MENU');
const HAMBURGER_MENU = document.querySelector(".HAMBURGER_MENU")
HAMBURGER_MENU.addEventListener("click", () =>{
   HAMBURGER_MENU.classList.remove("block");
    HAMBURGER_MENU.classList.add("hidden");
    MENU.classList.remove("-translate-x-[1200px]")
    MENU.classList.add("-translate-x-0")
    // MENU.classList.remove("hidden")
    // MENU.classList.add("block")
    CLOSE_MENU.classList.remove("hidden")
    CLOSE_MENU.classList.add("block")
});
CLOSE_MENU.addEventListener("click", () =>{
    if (CLOSE_MENU.classList.contains("block")) {
        CLOSE_MENU.classList.remove("block");
        CLOSE_MENU.classList.add("hidden");
        MENU.classList.add("-translate-x-[1200px]")
        MENU.classList.remove("-translate-x-0")
        HAMBURGER_MENU.classList.remove("hidden")
        HAMBURGER_MENU.classList.add("block")
    }
})