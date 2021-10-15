const catImg = document.querySelector("img");
const catArray = [];

async function fetchCats() {
  const res = fetch("https://api.thecatapi.com/v1/images/search");
  res
    .then(function (response) {
      return response.json();
    })
    .then(function (cat) {
      showCat(cat);
      console.log(catArray);
    });
}

function showCat(cat) {
  catImg.classList.add("images");
  catImg.src = cat[0].url;
  catArray.push(cat[0].url);
}

document.querySelector("button").onclick = fetchCats;

document.querySelector("button").addEventListener(
  "click",
  () => {
    const nextBtn = document.createElement("button");
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous cat";
    document
      .querySelector(".buttons")
      .insertBefore(prevBtn, document.querySelector("button"));
    prevBtn.onclick = function () {
      catImg.src = catArray[catArray.indexOf(catImg.src) - 1];

      nextBtn.textContent = "Next cat";
      document.querySelector(".buttons").appendChild(nextBtn);
      nextBtn.onclick = function () {
        catImg.src = catArray[catArray.indexOf(catImg.src) + 1];
      };
    };
  },
  { once: true }
);
