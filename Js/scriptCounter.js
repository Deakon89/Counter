let count= 0;
document.querySelector(".plus").onclick=function(){
    count+=1;
    document.querySelector(".view").innerHTML=count;
}
document.querySelector(".resetbtn").onclick=function(){
    count=0;
    document.querySelector(".view").innerHTML=count;
}
document.querySelector(".minus").onclick=function(){
    if(count!=0){
        count-=1;
        document.querySelector(".view").innerHTML=count;
    };  
}






