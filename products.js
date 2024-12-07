// products.js
const products = [
  { name: "X-Bacon Egg", price: 18.0, image: "bacon-egg.png" },
  { name: "X-Salada", price: 15.0, image: "x-salada.png" },
  { name: "X-Tudo", price: 22.0, image: "x-tudo.png" },
  { name: "Cheddar Bacon", price: 20.0, image: "cheddar-bacon.png" },
  { name: "Vegano", price: 16.0, image: "vegano.png" },
  { name: "Frango Grelhado", price: 19.0, image: "frango.png" },
];

// scripts.js
document.querySelector(".show-all").addEventListener("click", () => {
  const ul = document.querySelector(".menu-items");
  ul.innerHTML = ""; // Limpa a lista antes de mostrar os itens novamente
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name}</p>
          <p class="item-price">R$ ${product.price.toFixed(2)}</p>
      `;
    ul.appendChild(li);
  });
});

// Exemplo de uso do método Map
document.querySelector(".map-all").addEventListener("click", () => {
  const ul = document.querySelector(".menu-items");
  ul.innerHTML = "";
  products.map((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name}</p>
          <p class="item-price">R$ ${product.price.toFixed(2)}</p>
      `;
    ul.appendChild(li);
  });
});

// Exemplo de uso do Reduce para somar os preços
document.querySelector(".sum-all").addEventListener("click", () => {
  const total = products.reduce((sum, product) => sum + product.price, 0);
  alert(`Total: R$ ${total.toFixed(2)}`);
});

// Exemplo de uso do Filter para filtrar produtos com preço acima de R$ 18,00
document.querySelector(".filter-all").addEventListener("click", () => {
  const filteredProducts = products.filter((product) => product.price > 18);
  const ul = document.querySelector(".menu-items");
  ul.innerHTML = "";
  filteredProducts.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name}</p>
          <p class="item-price">R$ ${product.price.toFixed(2)}</p>
      `;
    ul.appendChild(li);
  });
});
