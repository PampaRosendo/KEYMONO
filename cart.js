const products = [
  {
    id: 1,
    name: "Remera Oversize",
    price: 8000,
    image: "img/gray-hoodie.png"
  },
  {
    id: 2,
    name: "Buzo Negro",
    price: 15000,
    image: "img/black-hoodie.png"
  },
  {
    id: 3,
    name: "Pantalón Cargo",
    price: 12000,
    image: "img/blue-hoodie.png"
  }
];

const cart = [];

const list = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

function renderProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Agregar</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function checkout() {
  document.getElementById("checkout-popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("checkout-popup").classList.add("hidden");
}

function copyAlias() {
  const aliasText = document.getElementById("alias").textContent;
  navigator.clipboard.writeText(aliasText);
  alert("Alias copiado: " + aliasText);
}

renderProducts();
