
let btnMode= document.getElementById("LDmode");
let classMode= document.querySelector(".counter");

btnMode.addEventListener("click",()=>{
    if(classMode.classList.contains("counter")){
        classMode.classList.add("counter-sleep");
        classMode.classList.remove("counter");
    }

    else if(classMode.classList.contains("counter-sleep")){
        classMode.classList.add("counter");
        classMode.classList.remove("counter-sleep");
    }
  

});

btnMode.addEventListener("click",()=>{
    if(classMode.classList.contains("counter")){
        document.body.style.backgroundColor="#f0f0f0";
    
    }

    else if(classMode.classList.contains("counter-sleep")){
        document.body.style.backgroundColor="black";
    }
  

});


   
    
