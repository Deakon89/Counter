let counter = document.getElementsByClassName("counter");

function setClock(){
    let data= new Date();
    let hour= data.getHours();
    let minutes= data.getMinutes();
    let seconds= data.getSeconds();

    if(hour<10){
        hour="0" + hour;
    }
    if(minutes<10){
        minutes="0" + minutes;
    }
    if(seconds<10){
        seconds="0" + seconds;
    }

    document.getElementById("clock").innerHTML= hour + ":" + minutes + ":" + seconds;
}
setInterval(setClock, 1000);