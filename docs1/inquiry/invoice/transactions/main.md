##  لیست تراکنش‌ها و تسویه‌ها {% #inquery_invoice_transaction .sidebar-nav-sub-menu %}
این وب‌سرویس جهت دریافت گزارش و لیست تراکنش‌ها و تسویه‌های انجام شده در وندار مورد استفاده قرار می‌گیرد.

##### پارمترها {% .attr %}

{% Attributes title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار
{% /Attributes%}

{% Attributes title="fromDate" details="string" %}
شروع بازه زمانی با فرمت 14000102
{% /Attributes%}

{% Attributes title="toDate" details="string" %}
پایان بازه زمانی با فرمت 14000201
{% /Attributes%}

{% Attributes title="statusKind" details="string" %}
این پارامتر مشخص کننده نوع تراکنش می‌باشد
{% /Attributes%}

{% Attributes title="status" details="string" %}
مشخص کننده وضعیت تراکنش یا تسویه می‌باشد

{% childAttributs title="وضعیت‌های مجاز" %}
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
{% /childAttributs %}
{% /Attributes%}

{% Attributes title="channel" details="string" %}
این پارامتر مشخص می‌کند که تراکنش از چه کانالی انجام شده است

{% childAttributs title="کانال‌های مجاز" %}
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
{% /childAttributs %}
{% /Attributes%}

{% Attributes title="formId" details="string" %}
شناسه فرم پرداخت
{% /Attributes%}

{% Attributes title="ref_id" details="string" importantInfo="required" %}
این پارامتر جستجو بر اساس کد مرجع را فراهم می‌سازد
{% /Attributes%}

{% Attributes title="tracking_code" details="string" importantInfo="required" %}
این پارامتر جستجو بر اساس کد پیگیری را فراهم می‌سازد
{% /Attributes%}

{% Attributes title="id" details="string" importantInfo="required" %}
شناسه یکتای تراکنش
{% /Attributes%}

{% Attributes title="track_id" details="string" importantInfo="required" %}
کد رهگیری در زمان ثبت تسویه
{% /Attributes%}

{% Attributes title="factor_number" details="string" importantInfo="required" %}
شماره فاکتور که در زمان ایجاد تراکنش درگاه پرداخت ارسال می شود
{% /Attributes%}

{% Attributes title="per_page" details="string" importantInfo="required" %}
 تعداد رکورد اطلاعاتی درخواست صورت حساب را مشخص میکند (حداکثر مقدار مجاز 100 می‌باشد)
{% /Attributes%}


##### پارامترهای بیشتر {% .more-attr %}

{% collapsibleParent %}

{% collapsibleItem title="start_after"  importantInfo="optional" details="string" %}
این پارامتر مشخص میکند که تراکنش های بعد از این تراکنش در لیست خروجی بازگردانده شوند. برای دریافت صفحه های بعدی میتوانید ایدی اخرین تراکنش را در این پارامتر ارسال کنید. تا لیست جدید را دریافت کنید.
{% /collapsibleItem %}

{% collapsibleItem title="q" details="string" %}
مقدار موجود در این پارامتر در فیلدهای تراکنش و فرم و ... جستجو می شود
{% /collapsibleItem %}

{% collapsibleItem title="search_field" details="string" %}
محدوده ی جستجو
{% /collapsibleItem %}

{% /collapsibleParent %}

