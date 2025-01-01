
ready()

function ready(){
    var buttonaddToCart=document.getElementsByClassName('shop-item-button');
    for (var i=0;i<buttonaddToCart.length; i++){
        var button=buttonaddToCart[i];
        button.addEventListener('click', AddToPanier);
           
        
    }
}
/*
cette function get collection de tous les button add to cart dans les produits de page
dans boocle for crée une variable button dans chaque itération prend button de produit
if click dans ce button appliquer une fonction pour metter le produi dans le cat shop

*/


function AddToPanier(event) {


    var button_clicked = event.target;// l'élément click 

    var shopItem=button_clicked.parentElement.parentElement// sibler parent element de div produit
    

    var title=shopItem.getElementsByClassName('shop-item-title')[0].innerText;//Prenez le nom du produit

    var price=shopItem.getElementsByClassName('shop-item-price')[0].innerText.replace("$","")// prenez le prix de produit 
   

    var srcImage=shopItem.getElementsByClassName("shop-item-image")[0].src;// et l'image de produit


    cartItemAdd(title,price,srcImage);//appler une foction contenent des information sur le produit 
}

/*
cette fonction permet de sibler tous les donner de parent element du button click 
*/

function cartItemAdd(title,price,srcImage){



    var  newDiv=document.createElement("div");
    
    cartContent=`
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${srcImage}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" min=1>
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
    `
    var cartItems=document.getElementsByClassName('cart-items')[0];//sibler le parent div de panier shop

    var title_cart_items=cartItems.getElementsByClassName('cart-item-title');// collection de title des produits  existe dans panier
    for (var i=0;i<title_cart_items.length;i++){
        if(title_cart_items[i].innerText==title){
            alert("this items is already added to the cart");
            return   
        }
    /*
    Lors de l'application de cette fonction, 
    si le nom du produit à ajouter est présent dans 
    l'un des produits du panier, la fonction se terminera et ne sera pas complétée.
    */
    }



    newDiv.innerHTML=cartContent;
    newDiv.classList.add("cart-row")
    cartItems.appendChild(newDiv);


    newDiv.getElementsByClassName('btn-danger')[0].addEventListener("click",remove());
    // dans ce ligne sibler le button remove
    // est applicuer une fonction lors click dans ce button 

        
    updatCartTotal();

}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click',cheked);

function cheked(){
    alert("pyement vérifier");     
    var cartItems=document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstElementChild);
        // if conatiner panier contien des élément supprimer dans chaque éteration first element
        updatCartTotal()
    }
    
}


function remove(){
    var removeItemBottun=document.getElementsByClassName("btn-danger");

    for (var i=0;i<removeItemBottun.length;i++){
        var buttonRmove=removeItemBottun[i];
        buttonRmove.addEventListener("click",function(evenet){
            var buttonclicked=evenet.target;
            buttonclicked.parentElement.parentElement.remove();
            updatCartTotal();

        })

    }
}
updatCartTotal()

function updatCartTotal(){
    var contianerCartAll=document.getElementsByClassName("cart-items")[0];
    var total=0
    var cartRowItems=contianerCartAll.getElementsByClassName("cart-row");// retour une collectio de cart contient class cart-row 
    for(var i=0;i<cartRowItems.length;i++){

        var singlCart=cartRowItems[i];// une cart de produit
        var priceElement=singlCart.getElementsByClassName("cart-price")[0];// retourner le prix de produit 
        var quntityElement=singlCart.getElementsByClassName("cart-quantity-input")[0];// input de quntity
        
        
        var price_panier=parseFloat(priceElement.innerText.replace("$",""))// varible contient le prix 


        var quantity=quntityElement.value;// contenet le valuer de input

        quntityElement.addEventListener("change",updatCartTotal)// si chnger valeur de chaque input utliser la fonction update

        total+=price_panier*quantity;// ajouter neveau price dans totla
    }


    total=Math.round(total*100)/100;
    cartTotal=document.getElementsByClassName("cart-total-price")[0];
    cartTotal.innerText='$'+total;



}










