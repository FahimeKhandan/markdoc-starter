## ایجاد مجوز  {% #direct_debit_store_temp_mandate .sidebar-nav-sub-menu %}
جهت دسترسی به حساب کاربران، نیاز است اطلاعات مورد نیاز جهت ارسال به بانک را در این سرویس ارسال کنید.
##### پارامترها {% .attr %}

 {% Attributes title="bank_code" details="string" importantInfo="required" %}
  کد بانک که از سروس لیست بانک‌ها قابل دسترسی است.
  {% /Attributes%}

 {% Attributes title="mobile" details="string" importantInfo="required" %}
  شماره موبایل کاربر

{% callout type="warning" %}
دقت داشته باشید که در صورت منتقل شدن به صفحه‌ی بانک با این شماره موبایل، برای بانک‌هایی که برای ورود نیاز به کد ملی کاربر دارند، بایستی کد ملی و شماره موبایل متعلق به یک شخص باشند. در غیر این صورت کاربر در صفحه‌ی بانک با پیغام خطا روبرو می‌شود و امکان احراز هویت پیدا نمی‌کند.
{% /callout %}

  {% /Attributes%}

 {% Attributes title="callback_url" details="string" importantInfo="required" %}
  آدرس بازگشتی وب سایت شما که کاربر پس از صفحه بانک به این آدرس منتقل می‌شود.
  {% /Attributes%}

 {% Attributes title="count" details="integer" importantInfo="required" %}
  حداکثر تعداد دفعاتی که در یک ماه می‌توان با این مجوز، برداشت وجه موفق انجام داد.
  {% /Attributes%}

 {% Attributes title="limit" details="integer" importantInfo="required" %}
  حداکثر مبلغ قابل برداشت به ازای هر تراکنش(واحد: ریال).
  {% /Attributes%}

 {% Attributes title="expiration_date" details="string" importantInfo="required" %}
  تاریخ انقضای مجوز. این تاریخ باید بزرگتر از تاریخ روز جاری باشد و به صورت میلادی وارد می‌شود.

{% callout type="warning" %}
 این مقدار در نسخه ۲ اجباری نبوده و در صورت عدم ارسال، به شکل پیش‌فرض ۳ سال از زمان ایجاد مجوز در نظر گرفته می‌شود.
 {% /callout %}
 
  {% /Attributes%}

 ##### پارامترهای بیشتر {% .attr %}
 {% Attributes title="name" details="string" importantInfo="required" %}
  نام و نام خانوادگی کاربر که بهتر است برای پیگیری‌های بعدی ارسال شود.
  {% /Attributes%}

 {% Attributes title="email" details="string" importantInfo="required" %}
  ایمیل کاربر که بهتر است برای پیگیری‌های بعدی ارسال شود.
  {% /Attributes%}

 {% Attributes title="wage_type" details="string" importantInfo="required" %}
  کارمزد تراکنش، که می‌تواند دو مقدار `APPLICATION_USER` یا `APPLICATION_SELF` باشد اگر این مقدار را برابر با `APPLICATION_SELF` قرار دهید کارمزد از شما کسر می‌شود و اگر برابر با `APPLICATION_USER` قرار دهید این مقدار از کاربر کسر می‌شود.

{% callout type="warning" %}
 اگر مقدار `wage_type` در درخواست ارسال نشود این مقدار از بخش پرداخت خودکار -> جزییات که در پنل کاربری شما در وندار قرار گرفته است خوانده می‌‌شود. در نظر داشته باشید که اولویت با مقداری است که در درخواست ارسال کرده‌اید.
{% /callout %}
  
  {% /Attributes%}


{% callout type="warning" %}
   `token` دریافتی در این قسمت یکبار مصرف است و پس از ۲۰ دقیقه منقضی می‌شود.

{% /callout %}
