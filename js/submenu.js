const d = document;
export default function secondmenu(){
    const $submenu1 = d.querySelector(".uno"),  
        $submenu2 = d.querySelector(".dos"),   
        $submenu3 = d.querySelector(".tres"),
        $item_one = d.querySelector(".item-one"),
        $item_two = d.querySelector(".item-two"),
        $item_three = d.querySelector(".item-three"),
        $item_four = d.querySelector(".item-four"),
        $img_slide = d.querySelector(".main-banner img"),
        $listmenu = d.querySelector(".list-menu"),
        $mainmenu = d.querySelector(".main-menu")      
        ;
        

       d.addEventListener("mouseover", (e)=>{     
          let evento = e.target;      
           if(evento === $item_one){
               $submenu1.removeAttribute("hidden");
               $submenu2.setAttribute("hidden", true);
               $submenu3.setAttribute("hidden", true);
               
               $item_one.classList.add("hover-item")


               d.querySelector(".item-one li").classList.add("hover-item-li")
               
                $item_two.classList.remove("hover-item")
                d.querySelector(".item-two li").classList.remove("hover-item-li")
            
                $item_three.classList.remove("hover-item")
                d.querySelector(".item-three li").classList.remove("hover-item-li")
/* 
                $item_four.classList.remove("hover-item")
                d.querySelector(".item-four li").classList.remove("hover-item-li") */
            }
          
           if(evento === $img_slide || 
            evento === $listmenu ||
             evento ===  $mainmenu ||
             evento === d.querySelector(".main-head") ||
             evento === d.querySelector(".item-four")         
             ){
             $submenu1.setAttribute("hidden", true);
             $submenu2.setAttribute("hidden", true);
             $submenu3.setAttribute("hidden", true);

             $item_one.classList.remove("hover-item")
             d.querySelector(".item-one li").classList.remove("hover-item-li")
         
             $item_two.classList.remove("hover-item")
             d.querySelector(".item-two li").classList.remove("hover-item-li")
         
             $item_three.classList.remove("hover-item")
             d.querySelector(".item-three li").classList.remove("hover-item-li")
         
           /*   $item_four.classList.remove("hover-item")
             d.querySelector(".item-four li").classList.remove("hover-item-li") */
         
            }
     
           if(evento === $item_two){
               $submenu2.removeAttribute("hidden");
               $submenu1.setAttribute("hidden", true);
               $submenu3.setAttribute("hidden", true);

               $item_two.classList.add("hover-item")
               d.querySelector(".item-two li").classList.add("hover-item-li")

               $item_one.classList.remove("hover-item")
               d.querySelector(".item-one li").classList.remove("hover-item-li")
            
                $item_three.classList.remove("hover-item")
                d.querySelector(".item-three li").classList.remove("hover-item-li")
/* 
                $item_four.classList.remove("hover-item")
                d.querySelector(".item-four li").classList.remove("hover-item-li")

                $item_four.classList.remove("hover-item")
                d.querySelector(".item-four li").classList.remove("hover-item-li") */
           }

           if(evento === $item_three){
            $submenu3.removeAttribute("hidden");
            $submenu1.setAttribute("hidden", true);
            $submenu2.setAttribute("hidden", true);
        

            $item_three.classList.add("hover-item")

            d.querySelector(".item-three li").classList.add("hover-item-li")

            $item_two.classList.remove("hover-item")
            d.querySelector(".item-two li").classList.remove("hover-item-li")
        
            $item_one.classList.remove("hover-item")
            d.querySelector(".item-one li").classList.remove("hover-item-li")

/*             $item_four.classList.remove("hover-item")
            d.querySelector(".item-four li").classList.remove("hover-item-li") */
            
        }

       /*      if(evento === $item_four){ 
                $item_four.classList.add("hover-item")              
                d.querySelector(".item-four li").classList.add("hover-item-li")
                 
                $item_two.classList.remove("hover-item")
                d.querySelector(".item-two li").classList.remove("hover-item-li")
            
                $item_one.classList.remove("hover-item")
                d.querySelector(".item-one li").classList.remove("hover-item-li")

                $item_three.classList.remove("hover-item")
                d.querySelector(".item-three li").classList.remove("hover-item-li")
            }
 */
       });          
    
}