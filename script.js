مرحباً! يبدو أنك تريد إضافة رقم هاتفك إلى الكود البرمجي بحيث يتم إرسال طلبات الواتساب إليه.
لقد قمت بتحليل الكود الذي أرسلته ووجدت السطر المسؤول عن إرسال الرسالة إلى الواتساب. كل ما عليك فعله هو استبدال رقم الهاتف الحالي في هذا السطر برقمك.
الخطوات:
 * ابحث عن السطر التالي في الكود:
   const whatsappUrl = `https://wa.me/9647506932549text=${encodeURIComponent(message)}`;

 * استبدل الرقم 9647506932549 برقم هاتفك الذي تريد أن تستلم الطلبات عليه.
الكود بعد التعديل
لنفترض أن رقمك هو 9647701234567. سيكون الكود المعدل كالتالي:
// ... الكود السابق ...

document.getElementById("order-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const city = document.getElementById("customer-city").value;
    const location = document.getElementById("customer-location").value;

    if (cart.length === 0) {
        showNotification("سلة التسوق فارغة، يرجى إضافة منتجات قبل إرسال الطلب.");
        return;
    }

    let orderDetails = [
        `🛒 طلب جديد من موقع أعلاف السالم`,
        `👤 الاسم: ${name}`,
        `📞 الهاتف: ${phone}`,
        `🏙️ المدينة: ${city}`,
        `📍 الموقع: ${location}`,
        `\n📦 المنتجات:`
    ];

    let total = 0;
    cart.forEach((item, i) => {
        // التحقق من أن المنتج هو خلطة مخصصة
        if (item.name.startsWith('خلطة مخصصة')) {
            orderDetails.push(`${i + 1}. ${item.name}`);
            orderDetails.push(`   - *مكونات الخلطة:* ${item.description}`);
            orderDetails.push(`   - السعر: ${item.price} دينار`);
        } else {
            const subtotal = item.qty * item.price;
            orderDetails.push(`${i + 1}. ${item.name} — ${item.qty} قطعة × ${item.price} = ${subtotal} دينار`);
        }
        total += item.qty * item.price;
    });

    orderDetails.push(`\n💰 الإجمالي: ${total} دينار`);
    orderDetails.push(`\n━━━━━━━━━━━━━━\n🚚 *ملاحظة التوصيل:*`);
    orderDetails.push(`- تكلفة التوصيل إلى المحافظات: 6000 دينار`);
    orderDetails.push(`- كل ٢٥ كيلو تعتبر طلبية واحدة الى المحافظات بسبب سياسة شركة التوصيل`);
    orderDetails.push(`- تكلفة التوصيل داخل الموصل: من 2000 إلى 5000 دينار حسب المنطقة`);
    orderDetails.push(`- هذه التكاليف لا تشمل العروض الخاصة بالتوصيل المجاني`);
    
    const message = orderDetails.join('\n');
    const whatsappUrl = `https://wa.me/9647506932549text=${encodeURIComponent(message)}`; // تم استبدال الرقم هنا
    window.open(whatsappUrl, "_blank");
});

تأكد من استبدال 9647701234567 برقم هاتفك الفعلي، ولا تنسَ رمز الدولة (964). بعد التعديل، يجب أن تعمل ميزة الإرسال عبر الواتساب بشكل صحيح.
هل ترغب في تعديل أي شيء آخر في الكود؟
