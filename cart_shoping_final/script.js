let spanTotal = document.getElementById("total");
let count = 0; // Compteur de produits

ready();


function ready(){
    let produits=document.querySelector("#produits");
    let buttonAdd=produits.querySelectorAll(".shop-item-button");

    for(let i=0;i<buttonAdd.length;i++){
        let button=buttonAdd[i]
        button.addEventListener('click',(event)=>{
    


    var buttonClicked=event.target;
    let parentButton=buttonClicked.parentElement.parentElement;
    

    let priceElement=parentButton.getElementsByClassName("shop-item-price")[0].innerText;
    let titleElement=parentButton.getElementsByClassName("shop-item-title")[0].innerText;
    let srcImage=parentButton.getElementsByClassName("shop-item-image")[0].src

    let prix=parseFloat(priceElement.replace("$",""))
    

    AddToPanier(titleElement,prix,srcImage);

    updateCounter()


    


    

})
}
}

function AddToPanier(title,prix,image){
    let produitDiv=document.createElement("div");

    let shopItems=document.getElementById("cart-items");

    cartContent=`
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${image}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${prix}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" min=1>
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
    `
    
    produitDiv.innerHTML=cartContent;
    produitDiv.classList.add("cart-row")

    let titleVerfier=shopItems.getElementsByClassName("cart-item-title")
    // console.log(titleVerfier)
    for (let i=0;i<titleVerfier.length;i++){
        if(titleVerfier[i].innerText==title){
            alert("le produit exist dans panier");
            return
        }
    }
    shopItems.appendChild(produitDiv);
    
    produitDiv.getElementsByClassName("btn-danger")[0].addEventListener("clcik",remove())
    
    updateTotal()
    


}

function updateTotal(){
    let shopItems=document.getElementsByClassName("cart-items")[0];

    let total=0
    let  listProduit=shopItems.getElementsByClassName("cart-row")

    for (let i=0;i<listProduit.length;i++){
        let produit=listProduit[i];

        let priceProduit=produit.getElementsByClassName("cart-price")[0].innerText;
        
        let quantityInput=produit.getElementsByClassName("cart-quantity-input")[0]
        let price=parseFloat(priceProduit.replace("$",""))
        let quantity=quantityInput.value
        total+=quantity*price

        quantityInput.addEventListener("change",updateTotal)
        
        
        
    }
    total=Math.round(total*100)/100

    spanTotal.innerHTML="$"+total

}
updateTotal()


function remove(){
    let produits=document.getElementById("cart-items");

    let buttonRemov=produits.getElementsByClassName("btn-danger")

    for(i=0;i<buttonRemov.length;i++){
        let button=buttonRemov[i];
        button.addEventListener("click",(e)=>{
            let buttonClick=e.target
            buttonClick.parentElement.parentElement.remove()
            updateTotal()
            updateCounter()
        })
    }
}

let buttonPayemen=document.getElementById("chkede").addEventListener("click",cheked());
function cheked(){
    let buttonPayemen=document.getElementById("chkede");
    buttonPayemen.addEventListener("click",(e)=>{
        alert("pyment")
        let carts=document.getElementById("cart-items");
        while(carts.hasChildNodes()){
            carts.removeChild(carts.firstElementChild)
            updateTotal()
            updateCounter()
           
        }


    })
}

function updateCounter() {
    count = document.querySelectorAll(".cart-row").length;
    let span = document.getElementById("shopping");
    span.innerText = count-1
    
    
}





