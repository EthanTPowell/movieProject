const form = document.getElementById("form");
const board = document.getElementById("board");
const input = document.getElementById("input");
const jumbo = document.getElementById('jumbo');

form.addEventListener("submit", (e) => {
    board.innerHTML = ``;
    jumbo.innerHTML = ``;
    e.preventDefault();
    let inputString = input.value
    fetch(`https://www.omdbapi.com/?s=${inputString}&apikey=4e21b89c`)
        .then(response => response.json())
        // .then(data => console.log(JSON.stringify(data, null, 2)))
        // .then(data => console.log(data.Search))    
        .then(data => data.Search.forEach(element => {
            let imdb = element.imdbID
            board.innerHTML += `<div id=><h3><button  onclick="inflate(${imdb})">${element.Title}</button></h3> <img src= "${element.Poster}"></div>`
        }))
    
    form.reset()
});

function inflate(imdb) {
    jumbo.innerHTML = ``;
    fetch(`https://www.omdbapi.com/?i=${imdb}&apikey=4e21b89c`)
        .then(response => response.json())
        .then(data=>console.log(data))
    
};