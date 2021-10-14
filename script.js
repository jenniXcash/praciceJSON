async function fetchCats() {
  const res = fetch("https://api.thecatapi.com/v1/images/search");
  res
    .then(function (response) {
      return response.json();
    })
    .then(function (cat) {
      showCat(cat);
    });
}
function showCat(cat) {
  const catImg = document.querySelector("img");
  catImg.src = cat[0].url;

  console.log(cat[0].url);
}

document.querySelector("button").onclick = fetchCats;
