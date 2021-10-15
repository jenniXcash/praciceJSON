const catImg = document.querySelector("img");
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
  catImg.src = cat[0].url;
  catImg.style.width = "50%";
  catImg.style.height = "50%";
  catArray.push(cat[0].url);
  console.log(catArray);
}
const catArray = [];
document.querySelector("button").onclick = fetchCats;
document.querySelector("button").addEventListener(
  "click",
  () => {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous cat";
    document.body.insertBefore(prevBtn, document.querySelector("button"));
    prevBtn.onclick = function () {
      // const currentLoc = catArray.indexOf(catImg.src);
      catImg.src = catArray[catArray.indexOf(catImg.src) - 1];
    };
  },
  { once: true }
);
