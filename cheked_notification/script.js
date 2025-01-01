let box_message=document.getElementById("message");

let réussie='<i class="fa-solid fa-circle-check"></i> l \'opération est réussie';
let error='<i class="fa-solid fa-circle-xmark"></i> S\'il vous plaît résoudre le problème';
let invalide='<i class="fa-solid fa-circle-exclamation"></i> les données incorect';


function  notification(msg){
    let message=document.createElement("div");
    message.classList.add("message");
    message.innerHTML=msg;
    box_message.appendChild(message);

    if(msg.includes('problème')){
        message.classList.add("probléme");
        
    }
    if(msg.includes("incorect")){
        message.classList.add("incorect");
    }
    if(msg.includes("réussie")){
        message.classList.add("réussie")
    }

    setTimeout(()=>{
        message.remove();
    },5000);
}