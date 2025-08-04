
const products = [
    { id: 1, name: "Remera Oversize", price: 8000, img: "assets/remera1.png" },
    { id: 2, name: "Buzo Negro", price: 15000, img: "assets/buzo1.jpg" },
    { id: 3, name: "Pantalón Cargo", price: 12000, img: "assets/pantalon1.png" }
];
let cart = [];
function renderProducts() {
    const list = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar</button>
        `;
        list.appendChild(div);
    });
}
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    cartCount.textContent = cart.length;
    cartTotal.textContent = total;
}
function checkout() {
    document.getElementById("checkout-popup").classList.remove("hidden");
}
function closePopup() {
    document.getElementById("checkout-popup").classList.add("hidden");
}
function copyAlias() {
    const alias = document.getElementById("alias").textContent;
    navigator.clipboard.writeText(alias);
    alert("Alias copiado: " + alias);
}
window.onload = renderProducts;
