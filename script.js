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
    { name: "كتان", price: 2500, image: "https://www2.0zz0.com/2025/08/04/15/919785351.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "شوفان", price: 1500, image: "https://www2.0zz0.com/2025/08/04/15/989250662.jpeg", description: "(أضف وصف المنتج هنا)" },
    { name: "الدخن الاحمر", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/751932495.jpeg", description: "(أضف وصف المنتج هنا)" }
  ],
  specialOffer: [
    { name: "كيس دخن 25 كيلو", price: 16000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة كوكتيل 25 كغ توصيل مجاني", price: 45000, image: "https://www2.0zz0.com/2025/08/03/15/629820578.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة طيور حب صيفية 25 كغ توصيل مجاني", price: 35000, image: "https://www2.0zz0.com/2025/08/03/15/397332263.jpeg", description: "(ضع وصف للمنتج)" },
    { name: "خلطة طيور حب شتوية 25 كغ توصيل مجاني", price: 37000, image: "https://www2.0zz0.com/2025/08/03/15/249540109.jpeg", description: "(ضع وصف للمنتج)" }
  ],
  customMix: [
    { name: "حنطة", price: 600, image: "https://www2.0zz0.com/2025/08/03/15/847553061.jpeg", description: "وصف حنطة" },
    { name: "شعير", price: 800, image: "https://www2.0zz0.com/2025/08/03/15/576922852.jpeg", description: "وصف شعير" },
    { name: "دخن", price: 1000, image: "https://www2.0zz0.com/2025/08/03/15/867668577.jpeg", description: "وصف دخن" },
    { name: "الدخن الاحمر", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/751932495.jpeg", description: "وصف الدخن الاحمر" },
    { name: "حب ابيض", price: 1250, image: "https://www2.0zz0.com/2025/08/04/15/800095310.jpeg", description: "وصف الحب الابيض" },
    { name: "بيقيا (عدس اسود)", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/753346524.jpeg", description: "وصف بيقيا" },
    { name: "ماش", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/100415770.jpeg", description: "وصف ماش" },
    { name: "ذرة بيضاء ناعمة", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/215269401.jpeg", description: "وصف ذرة بيضاء" },
    { name: "ذرة حمراء ناعمة", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/943792580.jpeg", description: "وصف ذرة حمراء" },
    { name: "حب المكانس", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/480869427.jpeg", description: "وصف حب المكانس" },
    { name: "ذرة صفراء ناعمة", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/187482526.jpeg", description: "وصف ذرة صفراء ناعمة" },
    { name: "ذرة صفراء مجروشة", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/584620940.jpeg", description: "وصف ذرة صفراء مجروشة" },
    { name: "بزاليا صفراء", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/561545617.jpeg", description: "وصف بزاليا صفراء" },
    { name: "بروتين رقم 1", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/302508892.jpeg", description: "وصف بروتين رقم 1" },
    { name: "بروتين رقم 2", price: 1000, image: "https://www2.0zz0.com/2025/08/04/15/840757522.jpeg", description: "وصف بروتين رقم 2" },
    { name: "كالسيوم", price: 1500, image: "https://www2.0zz0.com/2025/08/04/15/190721986.jpeg", description: "وصف كالسيوم" }
  ]
};

let cart = [];
let customMixItems = []; // سلة الخلط المؤقتة

const cartTableBody = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const productModal = document.getElementById('productModal');
const productDetailsContent = document.getElementById('product-details-modal-content');
const closeButton = document.querySelector('.close-button');
const searchInput = document.getElementById('search-input'); 

// العناصر الجديدة للتحكم بعلامات التبويب
const tabButtons = document.querySelectorAll('.tab-button');
const productSections = document.querySelectorAll('.products-section');
const customMixCartElement = document.getElementById('custom-mix-items');
const customMixWeightElement = document.getElementById('custom-mix-weight');
const customMixPriceElement = document.getElementById('custom-mix-price');
const addCustomMixToCartButton = document.getElementById('add-custom-mix-to-cart');

// دالة لعرض المنتجات
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    if (products.length === 0) {
        container.innerHTML = "<p style='text-align: center; margin-top: 20px;'>لا توجد منتجات مطابقة.</p>";
        return;
    }
    products.forEach((product, i) => {
        const card = document.createElement("div"); 
        card.className = "product-card";
        
        const cardContent = `
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
            <button class="add-to-cart-home" onclick="handleAddToCart('${containerId}', ${i}, this)">أضف إلى السلة</button>
        `;
        
        card.innerHTML = cardContent;
        container.appendChild(card);
    });
}

// دالة لمعرفة هل الإضافة للسلة الرئيسية أم سلة الخلط
function handleAddToCart(category, index, button) {
    if (category === 'customMix') {
        const product = productsData[category][index];
        const input = button.parentNode.querySelector('.quantity-input');
        const qty = parseFloat(input.value);
        if (isNaN(qty) || qty < 1) {
            alert("الرجاء إدخال كمية صحيحة.");
            return;
        }
        addToCustomMix(product, qty);
        alert(`تم إضافة ${qty} كغم من ${product.name} إلى سلة الخلط.`);
    } else {
        addToCartFromHome(category, index, button);
    }
}

// دالة تهيئة جميع المنتجات عند تحميل الصفحة
function initializeAllProducts() {
    // لعرض المنتجات في الأقسام المخصصة
    renderProducts(productsData.pigeonFeed, 'pigeonFeed');
    renderProducts(productsData.ornamentalBirds, 'ornamentalBirds');
    renderProducts(productsData.specialOffer, 'specialOffer');
    // لعرض منتجات الخلطة المخصصة
    renderProducts(productsData.customMix, 'customMix');

    // لعرض جميع المنتجات في تبويب الرئيسية
    const allProductsContainer = document.getElementById('all-section');
    const pigeonFeedContainer = allProductsContainer.querySelector('#pigeonFeed');
    const ornamentalBirdsContainer = allProductsContainer.querySelector('#ornamentalBirds');
    const specialOfferContainer = allProductsContainer.querySelector('#specialOffer');

    renderProducts(productsData.pigeonFeed, 'pigeonFeed');
    renderProducts(productsData.ornamentalBirds, 'ornamentalBirds');
    renderProducts(productsData.specialOffer, 'specialOffer');
    
    // لضمان عرض المنتجات في التبويب الرئيسي
    const allPigeonFeed = productsData.pigeonFeed.map(p => ({...p, category: 'pigeonFeed'}));
    const allOrnamentalBirds = productsData.ornamentalBirds.map(p => ({...p, category: 'ornamentalBirds'}));
    const allSpecialOffer = productsData.specialOffer.map(p => ({...p, category: 'specialOffer'}));
    
    renderProducts(allPigeonFeed, 'pigeonFeed');
    renderProducts(allOrnamentalBirds, 'ornamentalBirds');
    renderProducts(allSpecialOffer, 'specialOffer');
}

// دالة للتبديل بين علامات التبويب
function switchTab(tabId) {
    tabButtons.forEach(button => button.classList.remove('active'));
    productSections.forEach(section => {
        section.style.display = 'none';
        if (section.nextElementSibling && section.nextElementSibling.classList.contains('section-divider')) {
            section.nextElementSibling.style.display = 'none';
        }
    });

    if (tabId === 'all') {
        productSections.forEach(section => {
            section.style.display = 'block';
            if (section.nextElementSibling && section.nextElementSibling.classList.contains('section-divider')) {
                section.nextElementSibling.style.display = 'block';
            }
        });
        document.querySelector(`[data-tab="all"]`).classList.add('active');
        // تأكد من تهيئة جميع المنتجات في تبويب الرئيسية
        const allProductsContainer = document.getElementById('all-section');
        allProductsContainer.querySelector('#pigeonFeed').innerHTML = '';
        allProductsContainer.querySelector('#ornamentalBirds').innerHTML = '';
        allProductsContainer.querySelector('#specialOffer').innerHTML = '';
        
        renderProducts(productsData.pigeonFeed, 'pigeonFeed');
        renderProducts(productsData.ornamentalBirds, 'ornamentalBirds');
        renderProducts(productsData.specialOffer, 'specialOffer');

    } else {
        const selectedSection = document.getElementById(`${tabId}-section`);
        if (selectedSection) {
            selectedSection.style.display = 'block';
            document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

            if (tabId !== 'all') {
                const containerId = tabId;
                const container = document.getElementById(containerId);
                renderProducts(productsData[containerId], containerId);
            }
        }
    }
    searchInput.value = '';
}

// إضافة مستمعي الأحداث لأزرار علامات التبويب
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;
        switchTab(tabId);
    });
});

// عند تحميل الصفحة، تهيئة المنتجات وعرض تبويب "الرئيسية"
document.addEventListener('DOMContentLoaded', () => {
    initializeAllProducts(); // عرض جميع المنتجات لأول مرة
    switchTab('all'); // تفعيل تبويب الرئيسية
});

// دالة البحث المحدثة
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const activeTab = document.querySelector('.tab-button.active').dataset.tab;
    
    if (activeTab === 'all') {
        productSections.forEach(section => {
            const containerId = section.dataset.category;
            if (containerId !== 'all' && productsData[containerId]) {
                let productsToRender = productsData[containerId].filter(product =>
                    product.name.toLowerCase().includes(searchTerm)
                );
                renderProducts(productsToRender, containerId);
                const container = document.getElementById(containerId);
                if (container) {
                    container.parentNode.style.display = productsToRender.length > 0 ? 'block' : 'none';
                }
            }
        });
    } else {
        const containerId = activeTab;
        const section = document.getElementById(`${containerId}-section`);
        if (productsData[containerId]) {
            let productsToRender = productsData[containerId].filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
            renderProducts(productsToRender, containerId);
            if (section) {
                 section.style.display = 'block';
            }
        }
    }
});

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
        <button class="add-to-cart-home" onclick="handleAddToCart('${category}', ${index}, this)">أضف إلى السلة</button>
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

// وظائف سلة التسوق الرئيسية
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

// وظائف سلة الخلط المخصصة
function addToCustomMix(product, qty) {
    const existingItem = customMixItems.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.qty = qty; // تحديث الكمية مباشرة
    } else {
        customMixItems.push({ ...product, qty });
    }
    renderCustomMixCart();
}

function removeFromCustomMix(index) {
    customMixItems.splice(index, 1);
    renderCustomMixCart();
}

function updateCustomMixQty(index, delta) {
    const item = customMixItems[index];
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCustomMix(index);
    } else {
        renderCustomMixCart();
    }
}

function renderCustomMixCart() {
    if (!customMixCartElement) return;
    customMixCartElement.innerHTML = "";
    let totalWeight = 0;
    let totalPrice = 0;

    if (customMixItems.length === 0) {
        customMixCartElement.innerHTML = `<p class="empty-message">لم يتم اختيار أي مكونات بعد.</p>`;
        addCustomMixToCartButton.disabled = true;
    } else {
        customMixItems.forEach((item, index) => {
            const subtotal = item.qty * item.price;
            totalWeight += item.qty;
            totalPrice += subtotal;

            const itemDiv = document.createElement("div");
            itemDiv.className = "custom-mix-item";
            itemDiv.innerHTML = `
                <div class="custom-mix-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.qty} كغم × ${item.price} د.ع</p>
                </div>
                <div class="custom-mix-item-controls">
                    <button onclick="updateCustomMixQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateCustomMixQty(${index}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCustomMix(${index})">حذف</button>
                </div>
            `;
            customMixCartElement.appendChild(itemDiv);
        });
        addCustomMixToCartButton.disabled = false;
    }

    customMixWeightElement.textContent = `${totalWeight} كغ`;
    customMixPriceElement.textContent = `${totalPrice} دينار`;
}

addCustomMixToCartButton.addEventListener('click', () => {
    if (customMixItems.length > 0) {
        let totalWeight = 0;
        let totalPrice = 0;
        customMixItems.forEach(item => {
            totalWeight += item.qty;
            totalPrice += item.qty * item.price;
        });

        const customMixProduct = {
            name: `خلطة مخصصة (${totalWeight} كغ)`,
            price: totalPrice,
            qty: 1,
            description: customMixItems.map(item => `${item.name}: ${item.qty} كغ`).join(', ')
        };

        addToCart(customMixProduct, 1);
        alert('تم إضافة الخلطة المخصصة إلى سلة التسوق!');
        customMixItems = []; // إفراغ سلة الخلط
        renderCustomMixCart();
    }
});

function changeQuantity(button, change) {
    const input = button.parentNode.querySelector('.quantity-input');
    let value = parseFloat(input.value);
    value = value + change;
    if (value < 1) {
        value = 1;
    }
    input.value = value;
}

function addToCartFromHome(category, index, button) {
    const product = productsData[category][index];
    const input = button.parentNode.querySelector('.quantity-input');
    const qty = parseFloat(input.value);
    if (isNaN(qty) || qty < 1) {
        alert("الرجاء إدخال كمية صحيحة.");
        return;
    }
    addToCart(product, qty);
    alert(`تم إضافة ${qty} قطعة من ${product.name} إلى السلة!`);
}

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
        const subtotal = item.qty * item.price;
        orderDetails.push(`${i + 1}. ${item.name} — ${item.qty} قطعة × ${item.price} = ${subtotal} دينار`);
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
