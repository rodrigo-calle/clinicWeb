export default function showZone(){
    const d = document;
    const show = d.querySelector(".more-zone");
    const zone = d.querySelector(".cobertura");
    const cover = d.querySelector("#cobertura");

    d.addEventListener("click", (e) =>{
        if(e.target === show ){
            zone.classList.remove("menu-visibility")
            cover.classList.remove("menu-visibility")
        }
        
        if(e.target === cover){
            zone.classList.add("menu-visibility") 
            cover.classList.add("menu-visibility")
        }
    })
}