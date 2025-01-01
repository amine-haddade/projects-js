const serchForm=document.getElementById("serch_form");
const serchInput=document.getElementById("serch-input");
const serchBox=document.getElementById("serch_box");
const serchResult=document.getElementById("Resultats_recherche");
// const showMoreButton=document.getElementById("show");



const showMoreButton=document.getElementById("show");
const lightBox=document.querySelector(".lightbox");
downloadBtn=lightBox.querySelector("#dd");
const imagesUl=document.querySelector(".images");
const perPage=15;
let curretnPage=1;
let ImagesName= null;
const apiKey="KCfsjI33LmfmlkcPwtgRYdpgTvKjUdHZcjfGUZSCsJ6dPR1vBDnpQAbW";

//créé une fonction permet de prend les données apartir de api 
// et manipuler les données de cette api pour créé plusieur image
const generetHtml =(images)=>{
    imagesUl.innerHTML+=images.map((img)=> `<li class="card" onclick="showBoxImages('${img.photographer}','${img.src.large2x}')">
                <img src="${img.src.large2x}" alt="">
                <div class="details">
                    <div class="photographe">
                        <i class="fa-solid fa-camera"></i>
                        <span id="name-img">${img.photographer}</span>
                    </div>
                    <button onclick="dowloadImage('${img.src.large2x}')"  class="icone-dowlond">
                        <i  class="fa-solid fa-download"></i>
                    </button>

                </div>
            </li>`).join("")
}


// le paramétre de cette fonction est un url de api contien des donner comme nombre 
// de page maximant et fetch page par page
const getImages=(apiUrl)=>{
    showMoreButton.classList.add("loading");
    showMoreButton.innerText="loading...."
    fetch(apiUrl,{
        headers:{Authorization:apiKey}//autorisation de tester
    })
    .then(res=>res.json())// convertir les données au format json
    .then(data=>{
        generetHtml(data.photos);//api des images appelez la fonction pour générer des images  en par rapport url
        showMoreButton.classList.remove("loading")
        showMoreButton.innerText="show more"
    })
    
}
getImages(`https://api.pexels.com/v1/curated?page=${curretnPage}&per_page=${perPage}`);

    












// fonction d'jouter une page  pour afficher plusieur des images 
function addPage(){
    curretnPage++;// incrémenter   
    let apiUrl=`https://api.pexels.com/v1/curated?page=${curretnPage}&per_page=${perPage}`;
    if(ImagesName){// si le varible imagesname contien une valeur chnger le url ajouter une api de chrehcer par rapport le nom donner
        apiUrl=`https://api.pexels.com/v1/search?query=${ImagesName}&page=${curretnPage}&per_page=${perPage}`
    }
    
    getImages(apiUrl);
}
showMoreButton.addEventListener("click",addPage);






const loadSearchImages=(e)=>{
    if(e.target.value==""){
        alert("erro images not found")
        return
    }
    if(e.key=="Enter"){
        curretnPage=1//pour initialiser
        ImagesName=e.target.value;
        imagesUl.innerHTML=""// supprimer tous les images
        apiUrl=`https://api.pexels.com/v1/search?query=${ImagesName}&page=${curretnPage}&per_page=${perPage}`
        getImages(apiUrl);// utliser l'url contien une mots pour cherhcer
    }
}
serchInput.addEventListener("keyup",loadSearchImages);




// fonction de'fficher une boite contenant une image la fonction  prend deux paramétre
const showBoxImages=(photgraphe,imageName)=>{
    lightBox.classList.add("show");
    lightBox.querySelector("img").src=imageName;
    lightBox.querySelector("#name-img").innerText=photgraphe;
    downloadBtn.setAttribute("data-img", imageName);// stoké la valuer d'image dans icon
    
    
}


downloadBtn.addEventListener("click",(e)=>{
    dowloadImage(e.currentTarget.dataset.img);
})



// téléchrger les images apartir de url
const dowloadImage=(imgUrl)=>{
    fetch(imgUrl)
    .then(response=>response.blob())// convertir les donner de response en un object blob pour les files
    .then(file=>{
        const a=document.createElement("a");
        a.href=URL.createObjectURL(file);// créé url de file pour lien de download
        a.download=new Date().getTime();
        a.click();
    })
}

document.querySelector(".mark").addEventListener("click",()=>{
    lightBox.classList.remove("show");
})






