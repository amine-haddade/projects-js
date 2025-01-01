const quantité=document.querySelector(".panier span");

const panier=document.getElementById("panier_chop");

const total_prix=document.getElementById("total");

let total=0;

function addToPanier(event) {

    const button = event.target;

    const parentDiv=button.closest(".produit");


    if(!parentDiv){
        console.error("product non existe");
    }

    let newDiv=document.createElement("div");
    newDiv.classList.add("panier_produit");
    
    panier.appendChild(newDiv);


    // prend name et prix

    let nameElement=parentDiv.querySelector(".libele_produit").innerText;
    let prixElement=parseFloat(parentDiv.querySelector(".price").innerText);


    // ajouter les information de chaque produit dans new div de panier 

    let newName=document.createElement("h4");
    newName.innerHTML=nameElement;
    newName.classList.add("name");
    newDiv.appendChild(newName);

    
    
    let newprix=document.createElement("h4");
    newprix.innerHTML=prixElement;
    newprix.classList.add("price");
    newDiv.appendChild(newprix);


    let delet_button=document.createElement("button");
    delet_button.classList.add("fa", "fa-trash");
    newDiv.appendChild(delet_button);
    delet_button.addEventListener("click",() =>{
        panier.removeChild(newDiv);
        AddCountSpan(-1)
        AddtotalCount(-prixElement);

    })
    AddCountSpan(1)
    AddtotalCount(prixElement);
    
    panier.appendChild(newDiv);




    function AddCountSpan(value){
        const count=parseInt(quantité.innerText);
        quantité.innerText=count+value;
       
    }


    function AddtotalCount(value){
        const total_value=parseInt(total_prix.innerText);

        total_prix.innerText=total_value+value;
       
        

    }

    save()


}

const add=document.getElementsByClassName("add_to_cart");
for(let ele of add){
    ele.addEventListener("click",addToPanier);
}


function save(){
   localStorage.setItem("panier_save",panier.innerHTML);
   localStorage.setItem("quntité_panier",quantité.innerHTML)
}
function afficher(){
    panier.innerHTML=localStorage.getItem("panier_save");
    quantité.innerHTML=localStorage.getItem("quntité_panier");
}

document.addEventListener("DOMContentLoaded", () => {
    afficher();  // Restore the cart's state
});


