const form = document.getElementById("form");
const board = document.getElementById("board");
const input = document.getElementById("input");
const jumbo = document.getElementById("jumbo");

form.addEventListener("submit", (e) => {
  board.innerHTML = ``;
  jumbo.innerHTML = ``;
  e.preventDefault();
  let inputString = input.value;
  fetch(`https://www.omdbapi.com/?s=${inputString}&apikey=4e21b89c`)
    .then((response) => response.json(), (falseResponse) => alert(falseResponse))
    // .then(data => console.log(JSON.stringify(data, null, 2)))
    // .then(data => console.log(data.Search))
    .then((data) =>
      data.Search.forEach((element) => {
        let imdb = element.imdbID;
        console.log(imdb);
        board.innerHTML += `<div id=><h3><button id="${imdb}" onclick="inflate(${imdb})">${element.Title}</button></h3> <img src= "${element.Poster}" class="posters"></div>`;
      })
    );

  form.reset();
});

function inflate(imdb) {
  console.log(imdb.id);
  jumbo.innerHTML = ``;
  fetch(`https://www.omdbapi.com/?i=${imdb.id}&apikey=4e21b89c`)
    .then((response) => response.json())
        .then((data) => 
        // {console.log(JSON.stringify(data, null, 2));
           { jumbo.innerHTML += `<div class = "card"><div><h2>${data.Title}</h2></div><div><image src="${data.Poster}"></div></div><div class = "card"><div><h3>${data.Actors}</h3></div><div><h3>${data.Rated}</h3></div><div><h3>${data.Runtime}</h3></div></div>`
        })
}
