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

function copyOrderToClipboard() {
  if (!validateForm()) return;
  navigator.clipboard.writeText(generateOrderMessage()).then(() => {
    document.getElementById("copy-message").style.display = "block";
    window.open("https://m.me/a.laf.alsalm", "_blank");
    setTimeout(() => {
      document.getElementById("copy-message").style.display = "none";
    }, 4000);
  });
}

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