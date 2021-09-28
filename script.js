const url = 'https://images-api.nasa.gov/search?q='
let whatSearch;

const buttonSearch = document.querySelector('.search-button');
buttonSearch.addEventListener('click', searchImage)

function searchImage() {
  const inputSearch = document.querySelector('.search').value;
  whatSearch = inputSearch;
  getAPI();
}

function getAPI () {
  const body = document.querySelector('body');
  const img = document.createElement('img');
  fetch(`${url}${whatSearch}`)
    .then((response) => response.json())
    .then((element) => img.src = element.collection.items[0].links[0].href);
  body.appendChild(img)
}

