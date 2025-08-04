// ===== المنتجات (بيانات منفصلة) مع إضافة وصف تفصيلي =====
const productsData = {
  pigeonFeed: [
    { name: "حنطة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/847553061.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "شعير", price: 800, image: "https://www2.0zz0.com/2025/08/03/15/576922852.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة حنطة خشنة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/492413115.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة حنطة ناعمة", price: 700, image: "PUT_IMAGE_URL", description: "(ضع وصف للمنتج)" },
    { name: "خلطة ناعمة بدون حنطة", price: 900, image: "PUT_IMAGE_URL", description: "(ضع وصف للمنتج)" },
    { name: "خلطة خشنة بدون حنطة", price: 900, image: "PUT_IMAGE_URL", description: "(ضع وصف للمنتج)" },
    { name: "دخن", price: 1000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg", description: "(ضع وصف للمنتج)" }
  ],
  ornamentalBirds: [
    { name: "دخن", price: 1000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة طيور حب", price: 1500, image: "https://www2.0zz0.com/2025/08/03/15/397332263.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة كوكتيل", price: 2000, image: "https://www2.0zz0.com/2025/08/03/15/629820578.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة كناري", price: 2500, image: "https://www2.0zz0.com/2025/08/03/15/851081915.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "حب اسود ناعم", price: 2000, image: "https://www2.0zz0.com/2025/08/03/15/313777410.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "حب اسود خشن", price: 1500, image: "https://www2.0zz0.com/2025/08/03/16/831250527.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة بلبل", price: 8000, image: "https://www2.0zz0.com/2025/08/03/15/701115346.jpeg", description: "(ضع وصف للمنتج)" }
  ],
  specialOffer: [
    { name: "كيس دخن 25 كيلو", price: 16000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة كوكتيل 25 كغ توصيل مجاني", price: 45000, image: "https://www2.0zz0.com/2025/08/03/15/629820578.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة طيور حب صيفية 25 كغ توصيل مجاني", price: 35000, image: "https://www2.0zz0.com/2025/08/03/15/397332263.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة طيور حب شتوية 25 كغ توصيل مجاني", price: 37000, image: "https://www2.0zz0.com/2025/08/03/15/249540109.jpeg", description: "(ضع وصف للمنتج)" }
  ]
};

// ===== عرض المنتجات في الصفحة الرئيسية =====
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  products.forEach((product, i) => {
    const card = document.createElement("a");
    card.href = "#"; // تغيير الرابط
    card.className = "product-card";
    card.onclick = () => showProductDetails(containerId, i); // استخدام دالة لعرض التفاصيل
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} دينار</p>
    `;
    container.appendChild(card);
  });
}

// ===== تهيئة الواجهة الرئيسية =====
Object.keys(productsData).forEach(key => {
  renderProducts(productsData[key], key);
});

// ===== التحكم في عرض الصفحات =====
function showMainPage() {
  document.getElementById('main-page').style.display = 'block';
  document.getElementById('product-details-page').style.display = 'none';
  renderCart(); // للتأكد من تحديث السلة عند العودة
  window.scrollTo(0, 0); // العودة لأعلى الصفحة
}

function showProductDetails(category, index) {
  const product = productsData[category][index];
  const detailsCard = document.getElementById('product-details-card');
  
  detailsCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <h2>${product.name}</h2>
    <p class="product-price">${product.price} دينار</p>
    <p class="product-description">${product.description}</p>
    <div class="qty-container">
      <input type="number" id="product-qty" value="1" min="1">
    </div>
    <button class="add-to-cart-btn" onclick="addToCartFromDetails('${category}', ${index})">أضف إلى السلة</button>
  `;

  document.getElementById('main-page').style.display = 'none';
  document.getElementById('product-details-page').style.display = 'block';
  window.scrollTo(0, 0); // العودة لأعلى الصفحة
}

// ===== دالة لإضافة المنتج إلى السلة من صفحة التفاصيل =====
function addToCartFromDetails(category, index) {
  const product = productsData[category][index];
  const qty = parseInt(document.getElementById('product-qty').value);
  if (isNaN(qty) || qty < 1) {
    alert("الرجاء إدخال كمية صحيحة.");
    return;
  }
  addToCart(product, qty);
  alert(`تم إضافة ${qty} قطعة من ${product.name} إلى السلة!`);
}

// ===== السلة (تم تعديلها لتكون مستقلة) =====
let cart = [];
const cartTableBody = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

function addToCart(product, qty) {
  const existingItem = cart.find(item => item.name === product.name);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  renderCart();
}

function updateCartQty(index, delta) {
  const item = cart[index];
  item.qty = Math.max(1, item.qty + delta);
  if (item.qty === 0) {
    removeFromCart(index);
  } else {
    renderCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  if (!cartTableBody) return;
  cartTableBody.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const subtotal = item.qty * item.price;
    total += subtotal;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <div class="cart-qty-controls">
          <button class="minus" onclick="updateCartQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button class="plus" onclick="updateCartQty(${index}, 1)">+</button>
        </div>
      </td>
      <td>${item.price}</td>
      <td>${subtotal}</td>
      <td><button class="remove-btn" onclick="removeFromCart(${index})">حذف</button></td>
    `;
    cartTableBody.appendChild(row);
  });
  cartTotalElement.textContent = `💰 الإجمالي: ${total} دينار`;
}

// ===== إرسال الطلب =====
document.getElementById("order-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const city = document.getElementById("customer-city").value;
  const location = document.getElementById("customer-location").value;

  if (cart.length === 0) {
    alert("سلة التسوق فارغة، يرجى إضافة منتجات قبل إرسال الطلب.");
    return;
  }

  let orderDetails = [
    `🛒 طلب جديد`,
    `👤 الاسم: ${name}`,
    `📞 الهاتف: ${phone}`,
    `🏙️ المدينة: ${city}`,
    `📍 الموقع: ${location}`,
    `\n📦 المنتجات:`
  ];

  let total = 0;
  cart.forEach((item, i) => {
    const subtotal = item.qty * item.price;
    total += subtotal;
    orderDetails.push(`${i + 1}. ${item.name} — ${item.qty} × ${item.price} = ${subtotal} دينار`);
  });

  orderDetails.push(`\n💰 الإجمالي: ${total} دينار`);
  orderDetails.push(`\n━━━━━━━━━━━━━━\n🚚 *ملاحظة التوصيل:*`);
  orderDetails.push(`- تكلفة التوصيل إلى المحافظات: 6000 دينار`);
  orderDetails.push(`- كل ٢٥ كيلو تعتبر طلبية واحدة الى المحافظات بسبب سياسة شركة التوصيل`);
  orderDetails.push(`- تكلفة التوصيل داخل الموصل: من 2000 إلى 5000 دينار حسب المنطقة`);
  orderDetails.push(`- هذه التكاليف لا تشمل العروض الخاصة بالتوصيل المجاني`);
  
  const message = orderDetails.join('\n');
  const whatsappUrl = `https://wa.me/9647704159475?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
});

