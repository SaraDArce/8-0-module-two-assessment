//fetch api

fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let filmList = data;
    for (let film of filmList) {
      //   let { title } = title;
      let select = document.querySelector("select");
      let chosenFilm = document.createElement("option");
      chosenFilm.textContent = film.description;
      chosenFilm.value = film.description;
      select.append(chosenFilm);
    }
  })
  .catch((err) => {
    console.log(err);
  });

// Create variables for film-selector, h3 and ul
let form = document.querySelector("form#film-selector");
const h3 = document.createElement("h3");
const ul = document.createElement("ul");

// let fetchFilmDetails = document.querySelector(film.description);

// add event listener for submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let chosenFilm = e.target["film-select"].value;
  fetchFilmDetails(chosenFilm, true);
});
