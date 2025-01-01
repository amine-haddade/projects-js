let movieName=document.getElementById("nameMovie");
const apiKey="f37cb20d";
let url=`http://www.omdbapi.com/?t=${movieName.value}&apikey=${apiKey}`;


const getFilm=(url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        generatFilm(data)
    })
}

movieName.addEventListener("keypress",(e)=>{
    let url=`http://www.omdbapi.com/?t=${movieName.value}&apikey=${apiKey}`;
    if(e.key=="Enter"){
        getFilm(url)
        
    }
});



function generatFilm(film){
    const moviesParentDiv=document.getElementsByClassName("img-hero-section")[0];
    moviesParentDiv.querySelector("img").src=film.Poster;
    moviesParentDiv.querySelector(".banner-title").innerHTML=film.Title
    let genre=film.Genre
    let resultat = genre.split(', ').join('/');

    moviesParentDiv.querySelector(".banner-categorie").innerHTML=resultat;

    let bagroudImage=document.getElementById("bagroud-image").src=film.Poster


}


let btnShow=document.getElementById("show-menu");
btnShow.addEventListener("click",(e)=>{
    let header=document.getElementsByClassName("header")[0];
    header.classList.add("active")
})
let btnhide=document.getElementById("hide-menu");
btnhide.addEventListener("click",(e)=>{
    let header=document.getElementsByClassName("header")[0];
    header.classList.remove("active")
})
