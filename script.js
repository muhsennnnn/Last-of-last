const products = [
  { name: "حنطة", price: 600, image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Wheat_grain.jpg" },
  { name: "شعير", price: 900, image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Barley_close-up.jpg" },
  { name: "خلطة كوكتيل", price: 45000, image: "https://www2.0zz0.com/2025/07/31/00/459655962.jpeg" },
  { name: "خلطة غندورة", price: 45000, image: "https://i.imgur.com/FgMZKgO.jpg" },
  { name: "خلطة طيور الحب صيفية", price: 35000, image: "https://i.imgur.com/lkkVLM3.jpg" },
  { name: "خلطة طيور الحب شتوية", price: 37000, image: "https://i.imgur.com/utl3NYB.jpg" },
  { name: "بروتين دجاج و افراخ", price: 800, image: "https://i.imgur.com/JuT7kgL.jpg" }
];

const productList = document.getElementById("product-list");
let cart = [];

products.forEach((product, i) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} دينار</p>
    <div class="qty-control">
      <button onclick="decreaseQty(${i})">-</button>
      <span id="qty-${i}">1</span>
      <button onclick="increaseQty(${i})">+</button>
    </div>
    <button onclick="addToCart(${i})">أضف إلى السلة</button>
  `;
  productList.appendChild(card);
});

function increaseQty(index) {
  let qtySpan = document.getElementById(`qty-${index}`);
  let qty = parseInt(qtySpan.textContent);
  if (qty < 50) qtySpan.textContent = qty + 1;
}

function decreaseQty(index) {
  let qtySpan = document.getElementById(`qty-${index}`);
  let qty = parseInt(qtySpan.textContent);
  if (qty > 1) qtySpan.textContent = qty - 1;
}

function addToCart(index) {
  const qty = parseInt(document.getElementById(`qty-${index}`).textContent);
  const product = products[index];
  const existing = cart.find(p => p.name === product.name);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    const subtotal = item.qty * item.price;
    total += subtotal;

    const cartCard = document.createElement("div");
    cartCard.className = "cart-item";

    cartCard.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${subtotal} دينار</div>
      </div>
      <div class="cart-item-actions">
        <button onclick="changeQty(${index}, -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${index}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${index})">🗑</button>
      </div>
    `;
    cartContainer.appendChild(cartCard);
  });

  document.getElementById("cart-total").textContent = `الإجمالي: ${total.toLocaleString()} دينار`;
}

function changeQty(index, change) {
  if (cart[index].qty + change >= 1 && cart[index].qty + change <= 50) {
    cart[index].qty += change;
  }
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function generateOrderMessage() {
  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const city = document.getElementById("customer-city").value;
  const location = document.getElementById("customer-location").value;

  let total = 0;
  let productsList = cart.map((item, i) => {
    const subtotal = item.qty * item.price;
    total += subtotal;
    return `${i+1}. ${item.name} — ${item.qty} × ${item.price} = ${subtotal} دينار`;
  }).join("\n");

  return `🛒 طلب جديد من أعلاف السالم
👤 الاسم: ${name}
📞 الهاتف: ${phone}
🏙️ المدينة: ${city}
📍 الموقع: ${location}

📦 المنتجات:
${productsList}

💰 الإجمالي: ${total.toLocaleString()} دينار`;
}

document.getElementById("order-form").addEventListener("submit", function(e) {
  e.preventDefault();
  if (!validateForm()) return;
  
  const whatsappNumber = "9647704159475";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generateOrderMessage())}`;
  window.open(url, "_blank");
});

function validateForm() {
  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const city = document.getElementById("customer-city").value;
  const location = document.getElementById("customer-location").value;
  
  if (!name || !phone || !city || !location || cart.length === 0) {
    alert("يرجى تعبئة كافة الحقول وإضافة منتجات.");
    return false;
  }
  return true;
}