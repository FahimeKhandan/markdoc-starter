##  دریافت لیست تراکنش ها و تسویه ها

این وب‌سرویس جهت دریافت اطلاعات صفحه بندی (pagination) مورد استفاده قرار می‌گیرد و تعداد کل گزارش ها و تعداد صفحات کلی مشخص می‌شود

##### پارمترها {% .attr %}

 {% paramaterItem title="fromDate" details="string" importantInfo="optional" %}
  شروع بازه زمانی با فرمت 14000102
  {% /paramaterItem%}
 {% paramaterItem title="toDate" details="string" importantInfo="optional" %}
  پایان بازه زمانی با فرمت 14000201
  {% /paramaterItem%}
 {% paramaterItem title="statusKind" details="string" importantInfo="optional" %}
  این پارامتر مشخص کننده نوع تراکنش می‌باشد.
  - transactions: مشخص کننده تراکنش‌ها
  - settlements : مشخص کننده تسویه‌ها
  {% /paramaterItem%}
 {% paramaterItem title="status" details="string" importantInfo="optional" %}
  مشخص کننده وضعیت تراکنش یا تسویه می‌باشد
  - succeed: وضعیت موفق
  - failed : وضعیت نا‌موفق
  - pending : وضعیت در حال انجام
  - canceled : وضعیت لغو شده

 {% /paramaterItem%}
 {% paramaterItem title="channel" details="string" importantInfo="optional" %}
  این پارامتر مشخص می‌کند که تراکنش از چه کانالی انجام شده است
 - ipg: تراکنش های درگاه پرداخت
 - form : تراکنش های فرم پرداخت
 - p2p : تراکنش های انتقال وجه داخلی
 - subscription : تراکنش های سرویس پرداخت خودکار
 - settlements : تراکنش های تسویه و تسهیم
 - cash-in : تراکنش های واریز بانکی

  {% /paramaterItem%}
 {% paramaterItem title="formId" details="string" importantInfo="optional" %}
  شناسه فرم پرداخت
  {% /paramaterItem%}
 {% paramaterItem title="ref_id" details="string" importantInfo="optional" %}
  این پارامتر جستجو بر اساس کد مرجع را فراهم می‌سازد
  {% /paramaterItem%}
 {% paramaterItem title="tracking_code" details="string" importantInfo="optional" %}
  این پارامتر جستجو بر اساس کد پیگیری را فراهم می‌سازد
  {% /paramaterItem%}
 {% paramaterItem title="id" details="string" importantInfo="optional" %}
  شناسه یکتای تراکنش
  {% /paramaterItem%}
 {% paramaterItem title="track_id" details="string" importantInfo="optional" %}
  کد رهگیری در زمان ثبت تسویه
  {% /paramaterItem%}
 {% paramaterItem title="factor_number" details="string" importantInfo="optional" %}
  شماره فاکتور که در زمان ایجاد تراکنش درگاه پرداخت ارسال می شود
  {% /paramaterItem%}
 {% paramaterItem title="per_page" details="string" importantInfo="optional" %}
  تعداد رکورد اطلاعاتی درخواست صورت حساب را مشخص میکند (حداکثر مقدار مجاز 100 می‌باشد)
  {% /paramaterItem%}
 {% paramaterItem title="start_after" details="string" importantInfo="optional" %}
  این پارامتر مشخص میکند که تراکنش های بعد از این تراکنش در لیست خروجی بازگردانده شوند.
  برای دریافت صفحه های بعدی میتوانید ایدی اخرین تراکنش را در این پارامتر ارسال کنید. تا لیست جدید را دریافت کنید.
  {% /paramaterItem%}
 {% paramaterItem title="q" details="string" importantInfo="optional" %}
  مقدار موجود در این پارامتر در فیلدهای تراکنش و فرم و ... جستجو می شود
{% /paramaterItem%}
 {% paramaterItem title="search_field" details="string" importantInfo="optional" %}
  محدوده ی جستجو
 - description: اطلاعات تراکنش
 - ref_id : کد مرجع
 - tracking_code : کد پیگیری
 - transaction_id : شناسه یکتای تراکنش
 - factor_number : شماره فاکتور
 - iban : شماره شبا
 - mobile_number : شماره موبایل
 - api_token : توکن
 - card_number : شماره کارت
 - form_id : شناسه فرم
 - payment_number : شناسه واریز
{% /paramaterItem%}