## ویرایش اطلاعات مشتری حقیقی {% #customers_customer_edit_individual  .sidebar-nav-sub-menu %}
با استفاده از این سرویس می‌توانید اطلاعات مشتری حقیقی را ویراش نمایید.


{% callout type="warning" %}
پارامتر `customer_uuid` شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد.
{% /callout %}


##### پارمترها {% .attr %}

 {% Attributes details="string" title="first_name"  %}
   نام مشتری
  {% /Attributes%}

 {% Attributes details="string" title="last_name" %}
    نام خانوادگی
  {% /Attributes%}

 {% Attributes details="string" title="type" importantInfo="required" %}
  نوع مشتری `(INDIVIDUAL) `
  {% /Attributes%}

 {% Attributes details="string" title="mobile" importantInfo="required"  %}
 شماره موبایل مشتری
  {% /Attributes%}

 {% Attributes details="string" title="telephone" %}
 شماره تلفن ثابت
  {% /Attributes%}

 {% Attributes details="string" title="individual_national_code" importantInfo="required" %}
  کد ملی مشتری 
  {% /Attributes%}

 {% Attributes details="string" title="province_id" %}
 آیدی استان محل سکونت مشتری
  {% /Attributes%}

 {% Attributes details="string" title="city_id" %}
 آیدی شهر محل سکونت مشتری
  {% /Attributes%}

 {% Attributes details="string" title="address" %}
 آدرس محل سکونت مشتری
  {% /Attributes%}
  
 {% Attributes details="string" title="postal_code" %}
 کدپستی محل سکونت مشتری
  {% /Attributes%}
  
 {% Attributes details="string" title="custom_fields" %}
 فیلد های اختصاصی مشتری. قبل از ثبت این فیلد باید فیلد های اختصاصی برای کسب و کار از طریق سرویس مربوطه که در ادامه توضیح داده خواهد شد ثبت شود.
  {% /Attributes%}
  
{% callout type="warning" %}
برای دریافت آیدی استان و شهر از سرویس زیر استفاده نمایید:\
`https://api.vandar.io/v2/information/cities`
{% /callout %}

{% callout type="warning" %}
برای دریافت آیدی اصناف از سرویس زیر استفاده نمایید:\
`https://api.vandar.io/v2/information/mccs`
{% /callout %}