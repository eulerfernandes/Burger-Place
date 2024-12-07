// Produtos com nome, imagem e preço
const products = [
  {
    name: "X-Bacon Egg",
    image: "image/bacon-egg.png",
    price: 18.0,
  },
  {
    name: "X-Salada",
    image: "image/xsalada.jpeg",
    price: 15.0,
  },
  {
    name: "X-Tudo",
    image: "image/monstruoso.png",
    price: 20.0,
  },
  {
    name: "Vegano",
    image: "image/xvegan.png",
    price: 18.0,
  },
  {
    name: "Frango",
    image: "image/monstruoso-vegan.png",
    price: 17.0,
  },
  {
    name: "Cheddar Bacon",
    image: "image/xbacon.png",
    price: 19.0,
  },
];

// Função para mostrar todos os itens
function displayProducts(products) {
  const ul = document.querySelector("ul");
  ul.innerHTML = ""; // Limpa a lista existente

  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name}</p>
          <p class="item-price">R$ ${product.price.toFixed(2)}</p>
      `;
    ul.appendChild(li);
  });
}

// Função para mapear os itens e aplicar um aumento no preço
function mapAll() {
  const mappedProducts = products.map((product) => {
    return {
      ...product,
      price: product.price * 1.1, // Aumenta 10% no preço
    };
  });

  // Exibe os produtos com os preços mapeados
  displayProducts(mappedProducts);
}

// Função para somar todos os preços
function sumAll() {
  const total = products.reduce((sum, product) => sum + product.price, 0);
  alert(`Total: R$ ${total.toFixed(2)}`);
}

// Função para filtrar produtos que contêm 'X' no nome
function filterAll() {
  const filteredProducts = products.filter((product) =>
    product.name.includes("X")
  );
  displayProducts(filteredProducts);
}

// Adiciona eventos aos botões
document.querySelector(".Map-All").addEventListener("click", mapAll);
document.querySelector(".Sum-All").addEventListener("click", sumAll);
document.querySelector(".Filter-All").addEventListener("click", filterAll);

// Exibe todos os produtos ao carregar a página
window.onload = () => displayProducts(products);
