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
      <p>${product.price} دينار</p>
      <input type="number" id="${containerId}-qty-${i}" value="1" min="1">
      <button onclick="addToCart('${containerId}',${i})">أضف إلى السلة</button>
    `;
    container.appendChild(card);
  });
}

renderProducts(pigeonFeed, "pigeon-feed");
renderProducts(ornamentalBirds, "ornamental-birds");
renderProducts(specialOffer, "special-offer");

// ===== السلة =====
let cart = [];

function addToCart(cat, index) {
  const productsMap = { "pigeon-feed": pigeonFeed, "ornamental-birds": ornamentalBirds, "special-offer": specialOffer };
  const product = productsMap[cat][index];
  const qty = parseInt(document.getElementById(`${cat}-qty-${index}`).value);

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
      <td>
        <div class="cart-qty-controls">
          <button class="minus" onclick="updateCartQty(${idx},-1)">−</button>
          <span>${item.qty}</span>
          <button class="plus" onclick="updateCartQty(${idx},1)">+</button>
        </div>
      </td>
      <td>${item.price}</td>
      <td>${subtotal}</td>
      <td><button class="remove-btn" onclick="removeFromCart(${idx})">حذف</button></td>
    `;
    cartItems.appendChild(row);
  });
  document.getElementById("cart-total").textContent = `💰 الإجمالي: ${total} دينار`;
}

function updateCartQty(index, delta) {
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  renderCart();
}

function removeFromCart(i) {
  cart.splice(i, 1);
  renderCart();
}

// ===== إرسال الطلب =====
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
  message += `\n💰 الإجمالي: ${total} دينار\n\n🚚 ملاحظة التوصيل:\n- تكلفة التوصيل إلى المحافظات: 6000 دينار\n- كل ٢٥ كيلو تعتبر طلبية واحدة حسب سياسة شركة التوصيل\n- تكلفة التوصيل داخل الموصل: من 2000 إلى 5000 دينار حسب المنطقة\n- هذه التكاليف لا تشمل العروض الخاصة بالتوصيل المجاني`;

  window.open(`https://wa.me/9647704159475?text=${encodeURIComponent(message)}`, "_blank");
});