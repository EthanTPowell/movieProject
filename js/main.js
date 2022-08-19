const form = document.getElementById("form");
const board = document.getElementById("board");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputString = input.value
    fetch(`https://www.omdbapi.com/?s=${inputString}&apikey=4e21b89c`)
        .then(response => console.log(response.json()))
        // .then(data => console.log(JSON.stringify(data, null, 2)))
        // .then(data => console.log(data.search.title))    
        // .then(data => data.forEach(element => {
        //   console.log(element);  
        // }))
    
    form.reset()
})