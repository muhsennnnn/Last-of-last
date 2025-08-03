// ===== المنتجات =====
const pigeonFeed = [
  { name: "حنطة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/847553061.jpeg" },
  { name: "شعير", price: 800, image: "https://www2.0zz0.com/2025/08/03/15/576922852.jpeg" },
  { name: "خلطة حنطة خشنة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/492413115.jpeg" },
  { name: "خلطة حنطة ناعمة", price: 700, image: "PUT_IMAGE_URL" },
  { name: "خلطة ناعمة بدون حنطة", price: 900, image: "PUT_IMAGE_URL" },
  { name: "خلطة خشنة بدون حنطة", price: 900, image: "PUT_IMAGE_URL" },
  { name: "دخن", price: 1000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg" }
];

const ornamentalBirds = [
  { name: "دخن", price: 1000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg" },
  { name: "خلطة طيور حب", price: 1500, image: "https://www2.0zz0.com/2025/08/03/15/397332263.jpeg" },
  { name: "خلطة كوكتيل", price: 2000, image: "https://www2.0zz0.com/2025/08/03/15/629820578.jpeg" },
  { name: "خلطة كناري", price: 2500, image: "https://www2.0zz0.com/2025/08/03/15/851081915.jpeg" },
  { name: "حب اسود ناعم", price: 2000, image: "https://www2.0zz0.com/2025/08/03/15/313777410.jpeg" },
  { name: "حب اسود خشن", price: 1500, image: "https://www2.0zz0.com/2025/08/03/16/831250527.jpeg" },
  { name: "خلطة بلبل", price: 8000, image: "https://www2.0zz0.com/2025/08/03/15/701115346.jpeg" }
];

const specialOffer = [
  { name: "كيس دخن 25 كيلو", price: 16000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg" },
  { name: "خلطة كوكتيل 25 كغ توصيل مجاني", price: 45000, image: "https://www2.0zz0.com/2025/08/03/15/629820578.jpeg" },
  { name: "خلطة طيور حب صيفية 25 كغ توصيل مجاني", price: 35000, image: "https://www2.0zz0.com/2025/08/03/15/397332263.jpeg" },
  { name: "خلطة طيور حب شتوية 25 كغ توصيل مجاني", price: 37000, image: "https://www2.0zz0.com/2025/08/03/15/249540109.jpeg" }
];

// ===== عرض المنتجات =====
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  products.forEach((product, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price.toLocaleString()} دينار</p>
      <input type="number" id="${containerId}-qty-${i}" value="1" min="1">
      <button onclick="addToCart('${containerId}', ${i})">أضف إلى السلة</button>
    `;
    container.appendChild(card);
  });
}

renderProducts(pigeonFeed, "pigeon-feed");
renderProducts(ornamentalBirds, "ornamental-birds");
renderProducts(specialOffer, "special-offer");

// ===== السلة =====
let cart = [];
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

function updateCartCount() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

function addToCart(category, index) {
  const productsMap = {
    "pigeon-feed": pigeonFeed,
    "ornamental-birds": ornamentalBirds,
    "special-offer": specialOffer
  };
  const product = productsMap[category][index];
  const qty = parseInt(document.getElementById(`${category}-qty-${index}`).value);

  const existing = cart.find(p => p.name === product.name);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  renderCart();
  updateCartCount();
  showToast("✅ تمت الإضافة للسلة");
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    const subtotal = item.qty * item.price;
    total += subtotal;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="cart-product"><img src="${item.image}">${item.name}</td>
      <td>
        <div class="qty-control">
          <button class="qty-btn minus" onclick="changeQty(${i}, -1)">-</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn plus" onclick="changeQty(${i}, 1)">+</button>
        </div>
      </td>
      <td>${item.price.toLocaleString()}</td>
      <td>${subtotal.toLocaleString()}</td>
      <td><button class="remove-btn" onclick="removeFromCart(${i})">🗑</button></td>
    `;
    cartItems.appendChild(tr);
  });
  cartTotal.textContent = `💰 الإجمالي: ${total.toLocaleString()} دينار`;
}

function changeQty(index, amount) {
  if (cart[index].qty + amount > 0) {
    cart[index].qty += amount;
  } else {
    cart.splice(index, 1);
  }
  renderCart();
  updateCartCount();
}

function removeFromCart(index) {
  cart