const products = [
  { id: 1, name: "Ayaqqabı", image: "download (1).jpeg" },
  { id: 2, name: "Çanta", image: "download (2).jpeg" },
  { id: 3, name: "Şalvar", image: "download (3).jpeg" },
  { id: 4, name: "Köynək", image: "download.jpeg" },
];

const favorites = [];

const productList = document.getElementById("productList");
const favoriteList = document.getElementById("favoriteList");

products.forEach(product => {
  const div = createProductElement(product);
  productList.appendChild(div);
});

function createProductElement(product) {
  const div = document.createElement("div");
  div.classList.add("product");
  div.setAttribute("data-id", product.id);
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <p>${product.name}</p>
  `;

  div.addEventListener("click", () => toggleFavorite(product, div));
  return div;
}

function toggleFavorite(product, element) {
  const index = favorites.findIndex(item => item.id === product.id);

  if (index === -1) {
    favorites.push(product);
    element.classList.add("favorite");
  } else {
    favorites.splice(index, 1);
    element.classList.remove("favorite");
  }

  updateFavoritesView();
  console.log("Favoritlər:", favorites);
}

function updateFavoritesView() {
  favoriteList.innerHTML = "";

  favorites.forEach(product => {
    const favDiv = document.createElement("div");
    favDiv.classList.add("product");
    favDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
    `;
    favoriteList.appendChild(favDiv);
  });
}
