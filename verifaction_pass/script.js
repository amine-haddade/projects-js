// ========>>>>>> ma methode

function test(){
    let pass=document.getElementById('pass').value;
    let confirm=document.getElementById('confirm').value;
    let message=document.getElementById('message');
//     if(pass!=confirm){
//         document.getElementById('message').style.display="block";
//         confirm.style.borderBlockColor="red";
//     }
//     else if(pass==confirm){
//         document.getElementById('message').style.display="none";
//         confirm.style.borderBlockColor="blue";
//     }
    if(pass.length!=0){
        if(pass==confirm){
            message.style.display="block";
            message.style.color="blue";
            message.innerText="pass match";
            
        }
        else{
            message.style.display="block";
            message.style.color="red";
            message.innerText="la vérifecation de password non valid";
        }
        
    }
    else{
        alert("password can't by empty");
        message.innerText="pass not match";
    }
}