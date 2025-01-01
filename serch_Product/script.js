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
        image: "pink-trousers.jpg",
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
        image: "comfy-gray-pants.jpg",
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


  function filtrerProduit(value){
      
        let buttonsCatégorie=document.querySelectorAll(".catégorie-button button");
        buttonsCatégorie.forEach((but)=>{
            if(but.innerText.toUpperCase()== value.toUpperCase()){
                but.classList.add("active")
            }
            else{
                but.classList.remove("active")
              }
        })
        
        let allCards=document.querySelectorAll(".card");
        allCards.forEach((ele)=>{
            if(value=="all"){
                ele.classList.remove("hide");
            }
            else{
                if(ele.classList.contains(value)){
                    ele.classList.remove("hide");
                }
                else{
                    ele.classList.add("hide");

                }
            }
            
        })
    }
    
    window.onload=()=>{
        filtrerProduit("all");
    }
    
    document.getElementById("cherche-button").addEventListener("click",()=>{
        let inputChrecher=document.getElementById("chercher-input").value.toUpperCase();
        // tous les nom de produits
        let nomProduits=document.querySelectorAll("#produits .card .info-produit h5");
        console.log(nomProduits)
        let Produits=document.querySelectorAll("#produits .card");
        nomProduits.forEach((element,index)=>{
            if(element.innerText.toUpperCase().includes(inputChrecher)){
                Produits[index].classList.remove("hide");

            }
            else{
                Produits[index].classList.add("hide");
            }
        })
        
        
    })