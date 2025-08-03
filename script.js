const pigeonFeed = [
  { name: "حنطة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/847553061.jpeg" },
  { name: "شعير", price: 800, image: "https://www2.0zz0.com/2025/08/03/15/576922852.jpeg" },
  { name: "خلطة حنطة خشنة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/492413115.jpeg" }
];

const ornamentalBirds = [
  { name: "حب اسود خشن", price: 1500, image: "https://www2.0zz0.com/2025/08/03/16/831250527.jpeg" }
];

const specialOffer = [
  { name: "كيس دخن 25 كيلو", price: 16000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg" }
];

function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  products.forEach((product, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} دينار</p>
      <div class="qty-controls">
        <button class="qty-btn minus" onclick="changeQty('${containerId}',${i},-1)">-</button>
        <span id="${containerId}-qty-${i}">1</span>
        <button class="qty-btn plus" onclick="changeQty('${containerId}',${i},1)">+</button>
      </div>
      <button onclick="addToCart('${containerId}',${i})">أضف إلى السلة</button>
    `;
    container.appendChild(card);
  });
}

renderProducts(pigeonFeed, "pigeon-feed");
renderProducts(ornamentalBirds, "ornamental-birds");
renderProducts(specialOffer, "special-offer");

let cart = [];
function changeQty(cat, index, delta) {
  const qtyEl = document.getElementById(`${cat}-qty-${index}`);
  let qty = parseInt(qtyEl.textContent);
  qty = Math.max(1, qty + delta);
  qtyEl.textContent = qty;
}

function addToCart(cat, index) {
  const productsMap = { "pigeon-feed": pigeonFeed, "ornamental-birds": ornamentalBirds, "special-offer": specialOffer };
  const product = productsMap[cat][index];
  const qty = parseInt(document.getElementById(`${cat}-qty-${index}`).textContent);

  const existing = cart.find(p => p.name === product.name);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, idx) => {
    const subtotal = item.qty * item.price;
    total += subtotal;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>${item.price}</td>
      <td>${subtotal}</td>
      <td><button class="remove-btn" onclick="removeFromCart(${idx})">حذف</button></td>
    `;
    cartItems.appendChild(row);
  });
  document.getElementById("cart-total").textContent = `💰 الإجمالي: ${total} دينار`;
}

function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}

document.getElementById("order-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const city = document.getElementById("customer-city").value;
  const location = document.getElementById("customer-location").value;

  if (!name || !phone || !city || !location || cart.length === 0) {
    alert("يرجى تعبئة كافة الحقول وإضافة منتجات.");
    return;
  }

  let message = `🛒 طلب جديد\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n🏙️ المدينة: ${city}\n📍 الموقع: ${location}\n\n📦 المنتجات:\n`;
  let total = 0;
  cart.forEach((item, i) => {
    const subtotal = item.qty * item.price;
    total += subtotal;
    message += `${i+1}. ${item.name} — ${item.qty} × ${item.price} = ${subtotal} دينار\n`;
  });
  message += `\n💰 الإجمالي: ${total} دينار\n🚚 ملاحظة التوصيل: حسب السياسة المعلنة`;

  window.open(`https://wa.me/9647704159475?text=${encodeURIComponent(message)}`, "_blank");
});