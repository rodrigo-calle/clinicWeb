import hamburguerMenu from "./hamburguer.js";
import secondmenu from "./submenu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    secondmenu();
    hamburguerMenu(".panel-btn", ".panel", ".menu a");

})

