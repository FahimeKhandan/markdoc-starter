---
title: ثبت مشتری حقیقی 
id: Customer_customer_create_individual
level: 3
---

با استفاده از این سرویس می‌توانید یک مشتری حقیقی جدید ثبت نمایید.

##### پارمترها {% .attr %}

 {% paramaterItem details="string" title="first_name"  %}
   نام مشتری
  {% /paramaterItem%}

 {% paramaterItem details="string" title="last_name" %}
    نام خانوادگی
  {% /paramaterItem%}

 {% paramaterItem details="string" title="type" importantInfo="required" %}
  نوع مشتری `(INDIVIDUAL) `
  {% /paramaterItem%}

 {% paramaterItem details="string" title="mobile" importantInfo="required"  %}
 شماره موبایل مشتری
  {% /paramaterItem%}

 {% paramaterItem details="string" title="telephone" %}
 شماره تلفن ثابت
  {% /paramaterItem%}

 {% paramaterItem details="string" title="individual_national_code" importantInfo="required" %}
  کد ملی مشتری 
  {% /paramaterItem%}

 {% paramaterItem details="string" title="province_id" %}
 آیدی استان محل سکونت مشتری
  {% /paramaterItem%}

 {% paramaterItem details="string" title="city_id" %}
 آیدی شهر محل سکونت مشتری
  {% /paramaterItem%}

 {% paramaterItem details="string" title="address" %}
 آدرس محل سکونت مشتری
  {% /paramaterItem%}
  
 {% paramaterItem details="string" title="postal_code" %}
 کدپستی محل سکونت مشتری
  {% /paramaterItem%}
  
 {% paramaterItem details="string" title="custom_fields" %}
 فیلد های اختصاصی مشتری. قبل از ثبت این فیلد باید فیلد های اختصاصی برای کسب و کار از طریق سرویس مربوطه که در ادامه توضیح داده خواهد شد ثبت شود.
  {% /paramaterItem%}
  


{% callout type="warning" %}
برای دریافت آیدی استان و شهر از سرویس زیر استفاده نمایید:\
`https://api.vandar.io/v2/information/cities`
{% /callout %}

{% callout type="warning" %}
برای دریافت آیدی اصناف از سرویس زیر استفاده نمایید:\
`https://api.vandar.io/v2/information/mccs`
{% /callout %}