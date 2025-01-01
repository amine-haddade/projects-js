let joke=document.getElementById("joke");
let button=document.getElementById("btn");



let url  = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const getJoke = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            joke.innerHTML=data.joke
        })
        .catch(error => console.error('Error fetching joke:', error));
}



