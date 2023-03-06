##  ارسال اطلاعات و دریافت توکن {% #ipg_send .sidebar-nav-main-menu %}

در مرحله اول باید پارامترهای موجود در جدول زیر را با متد POST به آدرسی که مشخص شده ارسال کنید. به نوع داده‌ها و نام فیلد توجه کنید. اگر برای فیلد شماره موبایل، شماره موبایل کاربر را به درگاه ارسال نمایید، کاربر به صورت خودکار به صفحه پرداخت درگاه موبایلی هدایت می‌شود، به این معنی که در صفحه‌ی درگاه پرداخت بر مبنای شماره موبایل کاربر فهرست کارت‌های ذخیره شده‌اش در PSP نمایش داده می‌شود.

##### پارمترها {% .attr %}

 {% Attributes title="api_key" details="string" importantInfo="required" %}
  این کلید بعد از ساخت درگاه پرداخت صادر می‌شود. برای دریافت این کلید به داشبورد وندار مراجعه کنید
  {% /Attributes%}

 {% Attributes title="amount" details="integer" importantInfo="required" %}
  مبلغ تراکنش به صورت ریالی و بزرگتر یا مساوی 1000
  {% /Attributes%}
 {% Attributes title="callback_url" details="string" importantInfo="required" %}
  باید با آدرس درگاه پرداخت تایید شده در وندار بر روی یک دامنه باشد
  {% /Attributes%}
 {% Attributes title="mobile_number" details="string" importantInfo="optional" %}
  شماره موبایل (اختیاری، جهت نمایش کارت های خریدار به ایشان و نمایش درگاه موبایلی )
  {% /Attributes%}
 {% Attributes title="factorNumber" details="string" importantInfo="optional" %}
  شماره فاکتور شما
  {% /Attributes%}
 {% Attributes title="description" details="string" importantInfo="optional" %}
  توضیحات (حداکثر 255 کاراکتر)
  {% /Attributes%}
 {% Attributes title="national_code" details="string" importantInfo="optional" %}
  کد ملی معتبر (در صورت ارسال کد ملی، کاربر فقط با کارت‌های بانکی تحت مالکیت آن کد ملی قابلیت پرداخت خواهد داشت. برای بررسی کدملی در درگاه پرداخت ارسال شماره موبایل مرتبط با کد ملی نیز الزامی است.)
  {% /Attributes%}
 {% Attributes title="valid_card_number" details="string" importantInfo="optional" %}
  شماره کارت معتبر (در صورت ارسال شماره کارت، کاربر فقط با همان شماره کارت قابلیت پرداخت خواهد داشت.)
  {% /Attributes%}
 {% Attributes title="comment" details="string" importantInfo="optional" %}
  یک یادداشت که در داشبورد شما روی تراکنش نمایش داده می شود.
  {% /Attributes%}
 {% Attributes title="port" details="string" importantInfo="optional" %}
  در صورتی که نیاز به استفاده از پورت خاصی دارید می توانید با استفاده از این پارامتر پورت را انتخاب کنید این گزینه می تواند `SAMAN` و یا `BEHPARDAKHT` باشد
  {% /Attributes%}