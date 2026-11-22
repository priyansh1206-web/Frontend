// 1. Product data stored in an array of objects
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    description: "Comfortable wireless headphones with clear sound and deep bass.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    description: "A stylish smartwatch for fitness tracking and daily use.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Accessories",
    rating: 4.2,
    inStock: true
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    description: "Lightweight running shoes designed for comfort and everyday workouts.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Footwear",
    rating: 4.4,
    inStock: true
  },
  {
    id: 4,
    name: "Travel Backpack",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    description: "A spacious backpack suitable for college, office, and travel.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Bags",
    rating: 4.3,
    inStock: true
  },
  {
    id: 5,
    name: "Digital Camera",
    price: 15999,
    originalPrice: 18999,
    discount: 16,
    description: "Capture memorable moments with a compact digital camera.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    category: "Electronics",
    rating: 4.6,
    inStock: true
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    description: "Modern sunglasses with a stylish frame for everyday wear.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    category: "Fashion",
    rating: 4.1,
    inStock: true
  },
  {
    id: 7,
    name: "Coffee Maker",
    price: 3499,
    originalPrice: 4499,
    discount: 22,
    description: "Prepare fresh coffee at home with this easy-to-use coffee maker.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    category: "Home Appliances",
    rating: 4.4,
    inStock: false
  }
];


// 2. Cart array stores products selected by the user
let cart = [];


// 3. Display product cards dynamically
function displayProducts() {
  const productList = document.getElementById("product-list");
  document.getElementById("product-count").textContent = `${products.length} products`;
  productList.innerHTML = "";

  products.forEach(product => {
    const stockButton = product.inStock
      ? `<button class="btn btn-success add-btn" onclick="addToCart(${product.id})">Add to Cart</button>`
      : `<button class="btn btn-secondary add-btn" disabled>Out of Stock</button>`;

    productList.innerHTML += `
      <div class="col-sm-6 col-md-4 col-xl-3">
        <div class="card product-card">
          <div class="position-relative">
            <img src="${product.image}" class="product-image" alt="${product.name}">
            <span class="badge bg-danger position-absolute top-0 start-0 m-2">${product.discount}% OFF</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="product-description">${product.description}</p>
            <p class="mb-1">⭐ ${product.rating} <span class="text-muted">| ${product.category}</span></p>
            <div class="mb-3">
              <strong class="fs-5">₹${product.price.toLocaleString("en-IN")}</strong>
              <del class="text-muted ms-1">₹${product.originalPrice.toLocaleString("en-IN")}</del>
            </div>
            ${stockButton}
          </div>
        </div>
      </div>`;
  });
}


// 4. Add a product to the cart or increase its quantity
function addToCart(productId) {
  const product = products.find(item => item.id === productId);

  if (!product.inStock) {
    alert("Sorry, this product is out of stock.");
    return;
  }

  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  displayCart();
}


// 5. Change quantity of a cart product
function changeQuantity(productId, change) {
  const cartItem = cart.find(item => item.id === productId);
  if (!cartItem) return;


  cartItem.quantity += change;
  if (cartItem.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  }
  displayCart();
}


// 6. Display cart products, quantity, subtotal, and grand total
function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const grandTotalElement = document.getElementById("grand-total");
  const cartCountElement = document.getElementById("cart-count");

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="text-muted text-center">Your cart is empty.</p>';
    grandTotalElement.textContent = "₹0";
    cartCountElement.textContent = "0";
    return;
  }

  let grandTotal = 0;
  let totalQuantity = 0;
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    grandTotal += subtotal;
    totalQuantity += item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="d-flex gap-2">
          <img src="${item.image}" class="cart-thumb" alt="${item.name}">
          <div class="flex-grow-1">
            <strong>${item.name}</strong>
            <div>₹${item.price.toLocaleString("en-IN")}</div>
            <div class="quantity-controls d-flex align-items-center gap-2 mt-2">
              <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${item.id}, -1)">−</button>
              <span>${item.quantity}</span>
              <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
            <small class="text-muted">Subtotal: ₹${subtotal.toLocaleString("en-IN")}</small>
          </div>
        </div>
      </div>`;
  });

  grandTotalElement.textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
  cartCountElement.textContent = totalQuantity;
}


// 7. Checkout button (demo action)
document.getElementById("checkout-btn").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add products first.");
  } else {
    alert("Checkout demo! Your grand total is " + document.getElementById("grand-total").textContent);
  }
});


// 8. Call functions when page loads
displayProducts();
displayCart();
