let boxbutton=document.getElementsByClassName("buttons");
let box_message=document.getElementById("message");

let succésmessage='<i class="fa-solid fa-circle-check"></i>  L \'opération est réussie';
let errormessage='<i class="fa-solid fa-circle-xmark"></i> S\'il vous plaît résoudre le problème';
let invalidemessage='<i class="fa-solid fa-circle-exclamation"></i> les donner incorect'

function notification(msg){
    let message=document.createElement("div");
    message.classList.add("message");
    message.innerHTML=msg;
    box_message.appendChild(message);

    if(msg.includes("réussie")){
        message.classList.add("réussie")
    }
    if(msg.includes("problème")){
        message.classList.add("problème")
    }
    if(msg.includes("incorect")){
        message.classList.add("incorect")
    }

    setTimeout(()=>{
        message.remove()
    },5000);
     
}