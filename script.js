
const cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} تمت إضافته إلى السلة.`);
}

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const city = document.getElementById("customer-city").value.trim();
  const location = document.getElementById("customer-location").value.trim();

  if (!name || !phone || !city || !location || cart.length === 0) {
    alert("يرجى ملء جميع الحقول وإضافة منتجات إلى السلة.");
    return;
  }

  let message = `🛒 طلب جديد من أعلاف السالم\n`;
  message += `👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n🏙️ المحافظة/المدينة: ${city}\n📍 أقرب نقطة دالة: ${location}\n\n`;
  message += `📦 المنتجات المطلوبة:\n`;
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.product} - ${item.price}\n`;
  });

  const encodedMsg = encodeURIComponent(message);
  const phoneNumber = "9647704159475"; // ← ضع رقمك هنا
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;

  window.open(whatsappURL, "_blank");
});
