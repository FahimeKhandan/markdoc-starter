##  صورت حساب: دریافت لیست تراکنش ها و تسویه ها

این وب‌سرویس جهت دریافت گزارش و لیست تراکنش‌ها و تسویه‌های انجام شده در وندار مورد استفاده قرار می‌گیرد.

##### پارمترها {% .attr %}

 {% Attributes title="fromDate" details="string" importantInfo="optional" %}
  شروع بازه زمانی با فرمت 14000102
  {% /Attributes%}
 {% Attributes title="toDate" details="string" importantInfo="optional" %}
  پایان بازه زمانی با فرمت 14000201
  {% /Attributes%}
 {% Attributes title="statusKind" details="string" importantInfo="optional" %}
  این پارامتر مشخص کننده نوع تراکنش می‌باشد.
  - transactions: مشخص کننده تراکنش‌ها
  - settlements : مشخص کننده تسویه‌ها
  {% /Attributes%}
 {% Attributes title="status" details="string" importantInfo="optional" %}
  مشخص کننده وضعیت تراکنش یا تسویه می‌باشد
  - succeed: وضعیت موفق
  - failed : وضعیت نا‌موفق
  - pending : وضعیت در حال انجام
  - canceled : وضعیت لغو شده

 {% /Attributes%}
 {% Attributes title="channel" details="string" importantInfo="optional" %}
  این پارامتر مشخص می‌کند که تراکنش از چه کانالی انجام شده است
 - ipg: تراکنش های درگاه پرداخت
 - form : تراکنش های فرم پرداخت
 - p2p : تراکنش های انتقال وجه داخلی
 - subscription : تراکنش های سرویس پرداخت خودکار
 - settlements : تراکنش های تسویه و تسهیم
 - cash-in : تراکنش های واریز بانکی

  {% /Attributes%}
 {% Attributes title="formId" details="string" importantInfo="optional" %}
  شناسه فرم پرداخت
  {% /Attributes%}
 {% Attributes title="ref_id" details="string" importantInfo="optional" %}
  این پارامتر جستجو بر اساس کد مرجع را فراهم می‌سازد
  {% /Attributes%}
 {% Attributes title="tracking_code" details="string" importantInfo="optional" %}
  این پارامتر جستجو بر اساس کد پیگیری را فراهم می‌سازد
  {% /Attributes%}
 {% Attributes title="id" details="string" importantInfo="optional" %}
  شناسه یکتای تراکنش
  {% /Attributes%}
 {% Attributes title="track_id" details="string" importantInfo="optional" %}
  کد رهگیری در زمان ثبت تسویه
  {% /Attributes%}
 {% Attributes title="factor_number" details="string" importantInfo="optional" %}
  شماره فاکتور که در زمان ایجاد تراکنش درگاه پرداخت ارسال می شود
  {% /Attributes%}
 {% Attributes title="per_page" details="string" importantInfo="optional" %}
  تعداد رکورد اطلاعاتی درخواست صورت حساب را مشخص میکند (حداکثر مقدار مجاز 100 می‌باشد)
  {% /Attributes%}
 {% Attributes title="start_after" details="string" importantInfo="optional" %}
  این پارامتر مشخص میکند که تراکنش های بعد از این تراکنش در لیست خروجی بازگردانده شوند.
  برای دریافت صفحه های بعدی میتوانید ایدی اخرین تراکنش را در این پارامتر ارسال کنید. تا لیست جدید را دریافت کنید.
  {% /Attributes%}
 {% Attributes title="q" details="string" importantInfo="optional" %}
  مقدار موجود در این پارامتر در فیلدهای تراکنش و فرم و ... جستجو می شود
{% /Attributes%}
 {% Attributes title="search_field" details="string" importantInfo="optional" %}
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
{% /Attributes%}