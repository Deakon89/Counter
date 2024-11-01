const divC= document.querySelector(".container");


    let divCounter= document.createElement("div");
    let divH= document.createElement("h1");
    let divPlus= document.createElement("button");
    let divReset= document.createElement("button");
    let divMinus= document.createElement("button");
    
     divH.innerHTML= 0;
     divPlus.innerHTML= "+";
     divReset.innerHTML= "Reset";
     divMinus.innerHTML= "-";

    divC.appendChild(divCounter);
    divCounter.appendChild(divH);
    divCounter.appendChild(divPlus);
    divCounter.appendChild(divReset);
    divCounter.appendChild(divMinus);

    divCounter.classList.add("counter");
    divH.classList.add("view");
    divPlus.classList.add("plus");
    divReset.classList.add("resetbtn");
    divMinus.classList.add("minus");





