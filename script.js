// ===== المنتجات (بيانات منفصلة) مع إضافة وصف تفصيلي =====
const productsData = {
  pigeonFeed: [
    { name: "حنطة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/847553061.jpeg", description: "(منتج مليء بالبروتينات)" },
    { name: "شعير", price: 800, image: "https://www2.0zz0.com/2025/08/03/15/576922852.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة حنطة خشنة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/492413115.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة حنطة ناعمة", price: 700, image: "https://www2.0zz0.com/2025/08/04/15/366166799.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة ناعمة بدون حنطة", price: 900, image: "https://www2.0zz0.com/2025/08/04/15/579533397.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة خشنة بدون حنطة", price: 900, image: "PUT_IMAGE_URL", description: "(ضع وصف للمنتج)" },
    { name: "دخن", price: 1000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg", description: "(ضع وصف للمنتج)" },
    // المنتجات الجديدة لقسم علف طيور الحمام
    { name: "الدخن الاحمر", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/751932495.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "الحب الابيض (قرطم)", price: 1250, image: "https://www2.0zz0.com/2025/08/04/15/800095310.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "بيقيا (عدس اسود)", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/753346524.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "ماش", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/100415770.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "ذرة بيضاء ناعمة", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/215269401.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "ذرة حمراء ناعمة", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/943792580.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "حب المكانس", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/480869427.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "ذرة صفراء ناعمة", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/187482526.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "ذرة صفراء مجروشة", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/584620940.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "بزاليا صفراء", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/561545617.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "بروتين رقم 1", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/302508892.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "بروتين رقم 2", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/840757522.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "كالسيوم", price: 1500, image: "https://www2.0zz0.com/2025/08/04/15/190721986.jpeg", description: "(أضف وصف المنتج هنا)" }
  ],
  ornamentalBirds: [
    { name: "دخن", price: 1000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة طيور حب", price: 1500, image: "https://www2.0zz0.com/2025/08/03/15/397332263.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة كوكتيل", price: 2000, image: "https://www2.0zz0.com/2025/08/03/15/629820578.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة كناري", price: 2500, image: "https://www2.0zz0.com/2025/08/03/15/851081915.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "حب اسود ناعم", price: 2000, image: "https://www2.0zz0.com/2025/08/03/15/313777410.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "حب اسود خشن", price: 1500, image: "https://www2.0zz0.com/2025/08/03/16/831250527.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة بلبل", price: 8000, image: "https://www2.0zz0.com/2025/08/03/15/701115346.jpeg", description: "(ضع وصف للمنتج)" },
    // المنتجات الجديدة لقسم طيور الزينة
    { name: "كتان", price: 2500, image: "https://www2.0zz0.com/2025/08/04/15/919785351.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "شوفان", price: 1500, image: "https://www2.0zz0.com/2025/08/04/15/989250662.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "الدخن الاحمر", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/751932495.jpeg", description: "(أضف وصف المنتج هنا)" }
  ],
  specialOffer: [
    { name: "كيس دخن 25 كيلو", price: 16000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة كوكتيل 25 كغ توصيل مجاني", price: 45000, image: "https://www2.0zz0.com/2025/08/03/15/629820578.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة طيور حب صيفية 25 كغ توصيل مجاني", price: 35000, image: "https://www2.0zz0.com/2025/08/03/15/397332263.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة طيور حب شتوية 25 كغ توصيل مجاني", price: 37000, image: "https://www2.0zz0.com/2025/08/03/15/249540109.jpeg", description: "(ضع وصف للمنتج)" }
  ]
};

// ** قائمة المنتجات للخلطة المخصصة فقط **
const productsForMix = productsData.pigeonFeed.filter(product => 
    !product.name.includes("خلطة")
);

// ===== السلة =====
let cart = [];
const cartTableBody = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const productModal = document.getElementById('productModal');
const productDetailsContent = document.getElementById('product-details-modal-content');
const closeButton = document.querySelector('.close-button');
const searchInput = document.getElementById('search-input'); 

// ===== قسم الخلطة المخصصة =====
let customMix = {};
const mixProductsContainer = document.getElementById('mixProductsContainer');
const mixTotalPriceElement = document.getElementById('mix-total-price');
const addMixToCartBtn = document.getElementById('add-mix-to-cart-btn');

// ===== عرض المنتجات في الصفحة الرئيسية =====
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // Handle cases where the container might not exist
    container.innerHTML = "";
    if (products.length === 0) {
        container.innerHTML = "<p style='text-align: center; margin-top: 20px;'>لا توجد منتجات مطابقة.</p>";
        return;
    }
    products.forEach((product, i) => {
        const card = document.createElement("div"); 
        card.className = "product-card";
        card.innerHTML = `
            <a href="#" class="details-link" onclick="showProductDetails('${containerId}', ${i}); return false;">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price} دينار</p>
            </a>
            <div class="quantity-control">
                <button class="quantity-btn minus-btn" onclick="changeQuantity(this, -1)">-</button>
                <input type="number" class="quantity-input" value="1" min="1">
                <button class="quantity-btn plus-btn" onclick="changeQuantity(this, 1)">+</button>
            </div>
            <button class="add-to-cart-home" onclick="addToCartFromHome('${containerId}', ${i}, this)">أضف إلى السلة</button>
        `;
        container.appendChild(card);
    });
}

// ===== دالة عرض المنتجات في قسم الخلطة =====
function renderMixProducts(products) {
    if (!mixProductsContainer) return;
    mixProductsContainer.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "mix-product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price} دينار</p>
            <div class="quantity-control">
                <button class="quantity-btn minus-btn" onclick="updateMixItem('${product.name}', -1, this)">-</button>
                <input type="number" class="quantity-input" value="0" min="0" oninput="updateMixItemFromInput('${product.name}', this)">
                <button class="quantity-btn plus-btn" onclick="updateMixItem('${product.name}', 1, this)">+</button>
            </div>
        `;
        mixProductsContainer.appendChild(card);
    });
}

// ===== تهيئة الواجهة الرئيسية =====
function initializeProducts() {
  Object.keys(productsData).forEach(key => {
    renderProducts(productsData[key], key);
  });
  // استخدام القائمة الجديدة للخلطة فقط
  renderMixProducts(productsForMix); 
}
initializeProducts(); 

// ===== وظيفة البحث الجديدة =====
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let anyProductFound = false;

    Object.keys(productsData).forEach(key => {
        const container = document.getElementById(key);
        const toggleButton = container.previousElementSibling;
        const filteredProducts = productsData[key].filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts, key);

        if (filteredProducts.length > 0) {
            anyProductFound = true;
            // Show the accordion if products are found
            if (toggleButton) {
                toggleButton.style.display = 'flex';
                toggleButton.setAttribute('aria-expanded', 'true');
                container.classList.add('open');
            }
        } else {
            // Hide the accordion if no products are found for that section
            if (toggleButton) {
                toggleButton.style.display = 'none';
                toggleButton.setAttribute('aria-expanded', 'false');
                container.classList.remove('open');
            }
        }
    });

    if (searchTerm === '') {
      // Show all accordions if search is cleared
      document.querySelectorAll('.accordion-toggle').forEach(button => {
        button.style.display = 'flex';
        button.setAttribute('aria-expanded', 'false');
        document.getElementById(button.dataset.target).classList.remove('open');
      });
    }
});

// ===== دوال التحكم في الأقسام القابلة للطي =====
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = document.getElementById(button.dataset.target);
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // إغلاق كل الأقسام الأخرى أولاً
        document.querySelectorAll('.accordion-content.open').forEach(openContent => {
            if (openContent !== content) {
                openContent.classList.remove('open');
                openContent.previousElementSibling.setAttribute('aria-expanded', 'false');
            }
        });

        // فتح أو إغلاق القسم الحالي
        if (isExpanded) {
            content.classList.remove('open');
            button.setAttribute('aria-expanded', 'false');
        } else {
            content.classList.add('open');
            button.setAttribute('aria-expanded', 'true');
        }
    });
});

// ===== دوال التحكم في النافذة المنبثقة (Modal) =====
function showProductDetails(category, index) {
    const product = productsData[category][index];
    if (!product) return;
    
    productDetailsContent.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="product-price">${product.price} دينار</p>
        <p class="product-description">${product.description}</p>
        <div class="quantity-control">
            <button class="quantity-btn minus-btn" onclick="changeQuantity(this, -1)">-</button>
            <input type="number" class="quantity-input" value="1" min="1">
            <button class="quantity-btn plus-btn" onclick="changeQuantity(this, 1)">+</button>
        </div>
        <button class="add-to-cart-home" onclick="addToCartFromModal('${category}', ${index}, this)">أضف إلى السلة</button>
    `;

    productModal.classList.add('show');
}

closeButton.addEventListener('click', () => {
    productModal.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target === productModal) {
        productModal.classList.remove('show');
    }
});

function addToCartFromModal(category, index, button) {
    const product = productsData[category][index];
    const input = button.parentNode.querySelector('.quantity-input');
    const qty = parseInt(input.value);
    if (isNaN(qty) || qty < 1) {
        alert("الرجاء إدخال كمية صحيحة.");
        return;
    }
    addToCart(product, qty);
    productModal.classList.remove('show'); 
    alert(`تم إضافة ${qty} قطعة من ${product.name} إلى السلة!`);
}

// ===== دوال التحكم بالكمية والإضافة من الصفحة الرئيسية =====
function changeQuantity(button, change) {
    const input = button.parentNode.querySelector('.quantity-input');
    let value = parseInt(input.value);
    value = value + change;
    if (value < 1) {
        value = 1;
    }
    input.value = value;
}

function addToCartFromHome(category, index, button) {
    const product = productsData[category][index];
    const input = button.parentNode.querySelector('.quantity-input');
    const qty = parseInt(input.value);
    if (isNaN(qty) || qty < 1) {
        alert("الرجاء إدخال كمية صحيحة.");
        return;
    }
    addToCart(product, qty);
    alert(`تم إضافة ${qty} قطعة من ${product.name} إلى السلة!`);
}

// ===== دوال التحكم بقسم الخلطة المخصصة =====
function updateMixSummary() {
    let totalMixPrice = 0;
    const mixItems = Object.values(customMix);
    mixItems.forEach(item => {
        const product = productsForMix.find(p => p.name === item.name);
        if (product) {
            totalMixPrice += product.price * item.qty;
        }
    });

    mixTotalPriceElement.textContent = totalMixPrice;
    addMixToCartBtn.disabled = totalMixPrice === 0;
}

function updateMixItem(productName, change, button) {
    const input = button.parentNode.querySelector('.quantity-input');
    let value = parseInt(input.value);
    value = value + change;
    if (value < 0) {
        value = 0;
    }
    input.value = value;
    updateMixItemFromInput(productName, input);
}

function updateMixItemFromInput(productName, input) {
    const card = input.closest('.mix-product-card');
    const qty = parseInt(input.value);
    if (qty > 0) {
        customMix[productName] = { name: productName, qty: qty };
        card.classList.add('selected');
    } else {
        delete customMix[productName];
        card.classList.remove('selected');
    }
    updateMixSummary();
}

addMixToCartBtn.addEventListener('click', () => {
    const mixDetails = Object.values(customMix);
    if (mixDetails.length === 0) {
        alert("الرجاء إضافة منتجات إلى الخلطة أولاً.");
        return;
    }

    let mixDescription = "مكونات الخلطة:\n";
    let mixTotalPrice = 0;

    mixDetails.forEach(item => {
        const product = productsForMix.find(p => p.name === item.name);
        if (product) {
            const subtotal = item.qty * product.price;
            mixTotalPrice += subtotal;
            mixDescription += `- ${item.name}: ${item.qty} كغم (${subtotal} دينار)\n`;
        }
    });
    
    // إنشاء منتج جديد يمثل الخلطة
    const customMixProduct = {
        name: "خلطة مخصصة",
        price: mixTotalPrice,
        qty: 1,
        description: mixDescription
    };

    addToCart(customMixProduct, 1);
    
    // إعادة ضبط الخلطة بعد إضافتها للسلة
    customMix = {};
    renderMixProducts(productsForMix);
    updateMixSummary();

    alert("تم إضافة الخلطة المخصصة إلى السلة!");
});

// ===== دوال السلة الرئيسية (لم يتم تغييرها) =====
function addToCart(product, qty) {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem && product.name !== "خلطة مخصصة") {
        existingItem.qty += qty;
    } else {
        cart.push({ ...product, qty });
    }
    renderCart();
}

function updateCartQty(index, delta) {
    const item = cart[index];
    item.qty += delta;
    if (item.qty <= 0) {
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

// ===== إرسال الطلب (تم تعديلها لدمج الخلطة في الرسالة) =====
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
        total += item.qty * item.price;
        if (item.name === "خلطة مخصصة") {
            orderDetails.push(`\n- ${item.name} (${item.price} دينار)`);
            orderDetails.push(item.description.trim());
        } else {
            const subtotal = item.qty * item.price;
            orderDetails.push(`${i + 1}. ${item.name} — ${item.qty} قطعة × ${item.price} = ${subtotal} دينار`);
        }
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

