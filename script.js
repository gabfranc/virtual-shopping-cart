// JavaScript system for a checkout system
// DONE: Create array for products
const products = [
    { id: 1, name: "🍎", price: 1.99 },
    { id: 2, name: "🍌", price: 0.99 },
    { id: 3, name: "🥛", price: 2.50 },
    { id: 4, name: "🍗", price: 6.15 },
    { id: 5, name: "🥚", price: 2.15 },
    { id: 6, name: "🥥", price: 4.00 },
  ];
  
  // DONE: Created a getElement By Id
  const productList = document.getElementById("product-list");
  
  // DONE: and make element for Html
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h3 class="product-name">${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button class="cart-button" onclick="addToCart(${product.id})">🛒</button>
    `;
    productList.appendChild(productDiv); // Removed redundant click listener. It was conflicting with the button click.
  });
  
  // DONE: created a variable for cart with an empty array.
  let cart = [];
  
  // DONE: created an addToCart and pushed cart array
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      cart.push(product);
      updateCartDisplay();
    }
  }
  
  // DONE: created a removeFromCart Function
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
  }
  
  // DONE: create an updateCartDisplay function
  function updateCartDisplay() {
    const cartItemsList = document.getElementById("cart-items"); 
    const cartTotalDisplay = document.getElementById("cart-total");
    cartItemsList.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button class="trash" onclick="removeFromCart(${index})">🗑</button>`; // Fixed typo: item.price.Fixed -> item.price.toFixed
      cartItemsList.appendChild(listItem);
      total += item.price;
    });
  
    cartTotalDisplay.textContent = total.toFixed(2);
  }
  
  // DONE: create a function for the checkout feature (DONE)
  function checkout() {
    const total = parseFloat(document.getElementById("cart-total").textContent);
    alert(`Checkout complete. Total: $${total.toFixed(2)}`);
    cart = [];
    updateCartDisplay();
  }
