let lista = [];

$(function () {
  /* console.log("betoltes utan:", lista); */
  let file = " http://localhost:3000/adatLista";
  adatBetolt(file, megjelenit);
  /* console.log("adatBetolt utan",lista) */
  pokemonVegpont = "https://pokeapi.co/api/v2/pokemon/25";
  adatBetolt(pokemonVegpont, pokemonMegjelenit);
});

function adatBetolt(vegpont, callbackFv) {
  fetch(vegpont)
    .then((response) => response.json())
    .then((data) => {
      /* console.log(data);*/
      /*  console.log("data.adatLista", data.adatLista);  */
      /* console.log("fetchen belul lista:", lista); */
      callbackFv(data);
    })
    .catch((error) => console.log(error));
}

function megjelenit(adatok) {
  lista = adatok.adatLista;
  console.log("megjelenit", lista);
}
function pokemonMegjelenit(adatok) {
  const Main = $("main");
  let txt = "";
  txt += `<h1>Neve:${adatok.name}</h1>`;
  txt += `<img src="${adatok .sprites .front_shiny}" alt="#">`;
  Main.html(txt);
  console.log(adatok);
}
