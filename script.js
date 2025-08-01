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
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
let cart = [];

// عرض المنتجات
products.forEach((product, i) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} دينار</p>
    <input type="number" id="qty-${i}" value="1" min="1">
    <button onclick="addToCart(${i})">أضف إلى السلة</button>
  `;
  productList.appendChild(card);
});

function addToCart(index) {
  const qty = parseInt(document.getElementById(`qty-${index}`).value);
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
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const line = item.qty * item.price;
    total += line;
    const li = document.createElement("li");
    li.textContent = `${item.name}: ${item.qty} × ${item.price} = ${line} دينار`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `الإجمالي: ${total.toLocaleString()} دينار`;
}

document.getElementById("order-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const city = document.getElementById("customer-city").value;
  const location = document.getElementById("customer-location").value;

  if (!name || !phone || !city || !location || cart.length === 0) {
    alert("يرجى تعبئة كافة الحقول وإضافة منتجات.");
    return;
  }

  let message = `🛒 طلب جديد من أعلاف السالم\n`;
  message += `👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n🏙️ المدينة: ${city}\n📍 الموقع: ${location}\n\n`;
  message += `📦 المنتجات:\n`;
  let total = 0;
  cart.forEach((item, i) => {
    const subtotal = item.qty * item.price;
    total += subtotal;
    message += `${i+1}. ${item.name} — ${item.qty} × ${item.price} = ${subtotal} دينار\n`;
  });
  message += `\n💰 الإجمالي: ${total.toLocaleString()} دينار`;

  const whatsappNumber = "9647704159475";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});