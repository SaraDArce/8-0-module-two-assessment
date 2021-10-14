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
      chosenFilm.textContent = film.title;
      chosenFilm.value = film.title;
      select.append(chosenFilm);
    }
  })
  .catch((err) => {
    console.log(err);
  });

let form = document.querySelector("form#film-selector");
