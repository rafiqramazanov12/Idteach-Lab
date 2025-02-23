let allProducts = [];

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        allProducts = products;
        showProducts(products);
    });

const showProducts = products => {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3 class="s">${product.title}</h3>
            <p>${product.price} $</p>
        `;
        container.appendChild(card);
    });
};

const filterProducts = index => {
    if (index === 0) {
        showProducts(allProducts);
    } else {
        const categoryMap = ["electronics", "jewelery", "men's clothing", "women's clothing"];
        const filtered = allProducts.filter(product => product.category === categoryMap[index - 1]);
        showProducts(filtered);
    }
};
// bu yazılişı araşdıranda gördüm

document.querySelector(".all_btn").addEventListener("click", () => filterProducts(0));
document.querySelector(".electronics_btn").addEventListener("click", () => filterProducts(1));
document.querySelector(".jewelry_btn").addEventListener("click", () => filterProducts(2));
document.querySelector(".mens_clothing_btn").addEventListener("click", () => filterProducts(3));
document.querySelector(".womens_clothing_btn").addEventListener("click", () => filterProducts(4));




