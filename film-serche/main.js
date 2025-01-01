
const btnSerch=document.getElementById("serch-btn");
const mainContent=document.getElementById("affiche-film");




function getFilm(){
    let inputNameFilm=document.getElementById("film-name");
    let key = "f37cb20d";
    let url=`http://www.omdbapi.com/?t=${inputNameFilm.value}&apikey=${key}`;
    if (inputNameFilm.value.length <= 0) {
        mainContent.innerHTML = `<h3 class="msg">S'il vous plaît, donnez le nom du film</h3>`;
    } else {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "False") {
                    mainContent.innerHTML = `<h3 class="msg">Le nom du film n'existe pas</h3>`;
                } else {
                    génerate(data);
                }
            })
            .catch(error => {
                mainContent.innerHTML = `<h3 class="msg">Erreur de chargement du film</h3>`;
            });
    }

}
    

function  génerate(film){
    
   
    let genrString=film.Genre;
    const genres=genrString.split(", ");
    mainContent.innerHTML=`<div class="row1">
    <img src="${film.Poster}" alt="">
                <div class="col2">
                <h1>${film.Title}</h1>
                <div class="stras">
                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i><span>${film.imdbRating}</span>
                    </div>
                    <div class="details-film">
                    <p>${film.Rated}</p><p>${film.Year}</p><p>${film.Runtime}</p>
                    </div>
                    <div class="categorie-film">
                    
                    </div>
                    </div>
                    </div>
            <div class="row2">
                <div class="plot">
                <h4>plot:</h4>
                <p>${film.Plot}</p>
                </div>
                <div class="cast">

                    <h4>cast:</h4>
                    <p>${film.Actors}</p>

                    </div>
                    </div>
    `;
    let contianerGenre=document.getElementsByClassName("categorie-film")[0];
    genres.forEach(ele => {
        let p=document.createElement("p");
        p.innerHTML=ele;
        contianerGenre.appendChild(p);
        
    });
}

btnSerch.addEventListener("click",getFilm)