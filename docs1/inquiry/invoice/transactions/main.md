##  لیست تراکنش‌ها و تسویه‌ها {% #inquery_invoice_transaction .sidebar-nav-sub-menu %}
این وب‌سرویس جهت دریافت گزارش و لیست تراکنش‌ها و تسویه‌های انجام شده در وندار مورد استفاده قرار می‌گیرد.

##### پارمترها {% .attr %}

{% paramaterItem title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار
{% /paramaterItem%}

{% paramaterItem title="fromDate" details="string" %}
شروع بازه زمانی با فرمت 14000102
{% /paramaterItem%}

{% paramaterItem title="toDate" details="string" %}
پایان بازه زمانی با فرمت 14000201
{% /paramaterItem%}

{% paramaterItem title="statusKind" details="string" %}
این پارامتر مشخص کننده نوع تراکنش می‌باشد
{% /paramaterItem%}

{% paramaterItem title="status" details="string" %}
مشخص کننده وضعیت تراکنش یا تسویه می‌باشد

{% parameterPlus title="وضعیت‌های مجاز" %}
{% table .child-att %}
 ---
* succeed
    *  وضعیت موفق
---
* failed
    * وضعیت نا‌موفق
---
* pending
    * وضعیت در حال انجام
---
* canceled
    *	 وضعیت لغو شده
{% /table %}
{% /parameterPlus %}
{% /paramaterItem%}

{% paramaterItem title="channel" details="string" %}
این پارامتر مشخص می‌کند که تراکنش از چه کانالی انجام شده است

{% parameterPlus title="کانال‌های مجاز" %}
{% table .child-att %}
 ---
* ipg
    * تراکنش های درگاه پرداخت
 ---
* form
    * تراکنش های فرم پرداخت
---
* p2p
    * تراکنش های انتقال وجه داخلی
---
* subscription
    * تراکنش های سرویس پرداخت خودکار
---
* settlements
    * تراکنش های تسویه و تسهیم
---
* cash-in 
    * تراکنش های واریز بانکی
{% /table %}
{% /parameterPlus %}
{% /paramaterItem%}

{% paramaterItem title="formId" details="string" %}
شناسه فرم پرداخت
{% /paramaterItem%}

{% paramaterItem title="ref_id" details="string" importantInfo="required" %}
این پارامتر جستجو بر اساس کد مرجع را فراهم می‌سازد
{% /paramaterItem%}

{% paramaterItem title="tracking_code" details="string" importantInfo="required" %}
این پارامتر جستجو بر اساس کد پیگیری را فراهم می‌سازد
{% /paramaterItem%}

{% paramaterItem title="id" details="string" importantInfo="required" %}
شناسه یکتای تراکنش
{% /paramaterItem%}

{% paramaterItem title="track_id" details="string" importantInfo="required" %}
کد رهگیری در زمان ثبت تسویه
{% /paramaterItem%}

{% paramaterItem title="factor_number" details="string" importantInfo="required" %}
شماره فاکتور که در زمان ایجاد تراکنش درگاه پرداخت ارسال می شود
{% /paramaterItem%}

{% paramaterItem title="per_page" details="string" importantInfo="required" %}
 تعداد رکورد اطلاعاتی درخواست صورت حساب را مشخص میکند (حداکثر مقدار مجاز 100 می‌باشد)
{% /paramaterItem%}


##### پارامترهای بیشتر {% .more-attr %}

{% moreParameters title="start_after"  importantInfo="optional" details="string" %}
این پارامتر مشخص میکند که تراکنش های بعد از این تراکنش در لیست خروجی بازگردانده شوند. برای دریافت صفحه های بعدی میتوانید ایدی اخرین تراکنش را در این پارامتر ارسال کنید. تا لیست جدید را دریافت کنید.
{% /moreParameters %}

{% moreParameters title="q" details="string" %}
مقدار موجود در این پارامتر در فیلدهای تراکنش و فرم و ... جستجو می شود
{% /moreParameters %}

{% moreParameters title="search_field" details="string" %}
محدوده ی جستجو
{% /moreParameters %}
