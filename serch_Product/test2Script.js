let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "1.png",
      },
      {
        productName: "Beige Short Skirt",
        category: "Topwear",
        price: "49",
        image: "short-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "2.png",
      },
      {
        productName: "Basic Knitted Top",
        category: "Bottomwear",
        price: "29",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "5.png",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "6.png",
      },
    ],
  };
  const produitsBox=document.getElementById("produits")

  for(i of products.data){
    let boxProduit=document.createElement("div");
    boxProduit.classList.add("card",i.category,"hide");
    // image product
    let imageContainer=document.createElement("div");
    imageContainer.classList.add("image");
    let img=document.createElement("img");
    img.setAttribute("src",i.image);
    imageContainer.appendChild(img);
    // info product
    let infoProduit=document.createElement("div");
    infoProduit.classList.add("info-produit");
    // nom de produit
    let nomProduit=document.createElement("h5");
    nomProduit.innerHTML="$"+i.productName;
    // prix de produit
    let prixProduit=document.createElement("p");
    prixProduit.innerHTML="$"+i.price;

    infoProduit.append(nomProduit,prixProduit);
    boxProduit.append(imageContainer,infoProduit)
    produitsBox.appendChild(boxProduit)
  }

function filtrerProduit(catégorie){
  let buttonAll=document.querySelectorAll(".catégorie-button button");
  
  buttonAll.forEach((but)=>{
    if(but.innerText.toUpperCase()==catégorie.toUpperCase()){
        but.classList.add("active");
    }
    else{
      but.classList.remove("active")
    }
  })
  let cards=document.querySelectorAll(".card");
  
  cards.forEach((ele)=>{
    if(catégorie=="all"){
      ele.classList.remove("hide");
    }else if(ele.classList.contains(catégorie)){
        ele.classList.remove("hide");

    }
    else{
      ele.classList.add("hide")
    }
  })

}


// let nomProduits=document.querySelectorAll(".card h5"); 

// let cards=document.querySelectorAll(".card");
// document.getElementById("chercher-input").addEventListener("keypress",(e)=>{
//     if(e.code=="Enter"){
//         let inputChercher=document.getElementById("chercher-input").value.toUpperCase().trim();
//         console.log(inputChercher)
//         nomProduits.forEach((nom,index)=>{
//             if(nom.innerText.toUpperCase().includes(inputChercher)){
//                 cards[index].classList.remove("hide")
//             }
//             else{
//                 cards[index].classList.add("hide")

//             }

//         })
//     }
// })
document.getElementById("cherche-button").addEventListener("click",()=>{
  let nomProduit=document.querySelectorAll(".card h5");
  let inputrecherche=document.getElementById("chercher-input").value.toUpperCase();
  console.log(nomProduit)
  nomProduit.forEach((val)=>{
    if(val.innerText.toUpperCase().includes(inputrecherche)){
      val.closest(".card").classList.remove("hide");
  }
  else{
    val.closest(".card").classList.add("hide");
    
  }
})
})










window.onload=()=>{
    filtrerProduit("all");
}
