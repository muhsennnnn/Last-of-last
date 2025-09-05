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

// دمج جميع المنتجات لعرضها في قسم "الرئيسية"
const allProductsData = [
    ...productsData.pigeonFeed,
    ...productsData.ornamentalBirds,
    ...productsData.specialOffer,
];

let cart = [];
let customMixItems = [];

// ... (جميع الدوال تبقى نفسها بدون تغيير) ...

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
    const whatsappUrl = `https://wa.me/9647506932549?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});