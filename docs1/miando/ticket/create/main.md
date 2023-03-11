## ایجاد یک تیکت  {% #miando_ticket_create .sidebar-nav-sub-menu %}
در این بخش می‌توانید تیکت ایجاد کنید.
##### پارمترها {% .attr %}

 {% paramaterItem title="agreement_tracking_code" details="string" importantInfo="required" %}
  کد رهگیری معامله
  {% /paramaterItem%}

 {% paramaterItem title="reporter" details="string" importantInfo="required" %}
  موبایل شخص
  {% /paramaterItem%}

 {% paramaterItem title="ticket_type_slug" details="string" importantInfo="required" %}


  اسلاگ‌های مجاز جهت انتخاب نوع تیکت

{% parameterPlus title="اسلاگ‌های مجاز" %}
  {% table .child-att %}
  ---
  * dont_access_to_seller
    * به فروشنده دسترسی ندارم
  ---
  * stop_buying
    * از خرید منصرف شدم
  ---
  * dispute_with_seller
    * با فروشنده اختلاف دارم
  ---
  * stop_buying
    *	از خرید منصرف شد
  ---
  * dont_access_to_buyer
    *	به خریدار دسترسی ندارم
  ---
  * dispute_with_buyer
    *	با خریدار اختلاف دارم
  ---
  * stop_selling
    *	از فروش منصرف شدم
  ---
  * commodity_delivered_buyer_not_end_transaction
    *	کالا را تحویل داده‌ام ولی خریدار پایان معامله را اعلام نمی‌کند
  ---
  * other_cases
    *	سایر موارد
  ---
  {% /table %}
{% /parameterPlus %}
> **توجه**
> بدیهی است که تنها بعضی از نقش های طرفین معامله امکان ثبت تیکت با برخی از این تایپ ها را دارند.



  {% /paramaterItem%}

 {% paramaterItem title="redirect_url" details="string" importantInfo="required" %}
  لینک بازگشت به کسب و کار پس از ثبت مشکل 
  {% /paramaterItem%}

 {% paramaterItem title="description" details="string" importantInfo="required" %}
  توضیحات
  {% /paramaterItem%}


##### پارامترهای بیشتر {% .more-attr %}

{% moreParameters title="attachments" %}
پیوست ها
{% /moreParameters %}
