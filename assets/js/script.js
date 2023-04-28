// CONSUMO  API
var url = "https://digimon-api.vercel.app/api/digimon";

var contenido = document.querySelector("#contenido");

fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);

    for (item of datos) {
      contenido.innerHTML += `
    <div class="tarjeta">
        <div class="card" style="width: 12rem; margin: auto">
        <img src="${item.img}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.level}</p>
          <a href="#" class="btn btn-primary">Vamos !</a>
        </div>
        </div>
    </div>    
    `;
    }
  });

//Intento 2 buscar
/*$(document).ready(function () {
  $("#search-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});*/

/*//BUSCAR
var searchInput = document.querySelector("#my-template");
var searchButton = document.querySelector("#my-template");

function searchDigimon() {
  var searchTerm= searchInput.value.toLowerCase();
  fetch('https://digimon-api.vercel.app/api/digimon')
      .then(response => response.json())
      .then(datos => {        
        var filteredData = datos.filter(function (digimon) {
          return digimon.name.toLowerCase().includes(searchTerm);
        });
        tabla(filteredData);
      });
    }


  searchButton.addEventListener('click', searchDigimon);*/


//MULTIPLE TITLES
let titleText = ["Digimon Paradise", "by s3code"];
let counter = 0;

setInterval(function () {
  document.title = titleText[counter % titleText.length];
  counter++;
}, 1300);

/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/
