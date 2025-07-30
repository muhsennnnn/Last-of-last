function copyOrderToClipboard() {
  const name = document.getElementById('customer-name').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const city = document.getElementById('customer-city').value.trim();
  const location = document.getElementById('customer-location').value.trim();

  if (!name || !phone || !city || !location) {
    alert('يرجى ملء جميع الحقول قبل إرسال الطلب.');
    return;
  }
  if (cart.length === 0) {
    alert('السلة فارغة.');
    return;
  }

  let message = `🛒 طلب جديد من أعلاف السالم\n`;
  message += `👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n🏙️ المحافظة/المدينة: ${city}\n📍 أقرب نقطة دالة: ${location}\n\n`;
  message += `📦 المنتجات المطلوبة:\n`;

  let total = 0;
  cart.forEach((item, i) => {
    const lineTotal = item.price * item.qty;
    total += lineTotal;
    message += `${i+1}. ${item.name} — ${item.qty} × ${item.price} = ${lineTotal} دينار\n`;
  });

  message += `\n💰 الإجمالي: ${total.toLocaleString()} دينار`;

  // نسخ النص إلى الحافظة
  navigator.clipboard.writeText(message).then(() => {
    document.getElementById("copy-message").style.display = "block";

    // افتح رابط ماسنجر بعد النسخ
    const facebookPageUsername = "a.laf.alsalm?"; // ← ← ← غيّر هذا إلى اسم صفحتك
    const messengerURL = `https://m.me/${a.laf.alsalm?}`;
    window.open(messengerURL, "_blank");

    setTimeout(() => {
      document.getElementById("copy-message").style.display = "none";
    }, 4000);
  });
}