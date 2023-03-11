---
title: ثبت مشتری حقوقی 
id: Customer_customer_create_legal
level: 3
---

با استفاده از این سرویس می‌توانید یک مشتری حقوقی جدید ثبت نمایید.

##### پارمترها {% .attr %}

 {% paramaterItem details="string" title="legal_name" %}
 نام حقوقی 
  {% /paramaterItem%}

 {% paramaterItem details="string" title="agent_name" %}
 نام نماینده شرکت در صورتی که مشتری حقوقی باشد.
  {% /paramaterItem%}

 {% paramaterItem details="string" title="type" importantInfo="required" %}
  نوع مشتری ` (LEGAL) `
  {% /paramaterItem%}

 {% paramaterItem details="string" title="agent_mobile"  importantInfo="required" %}
  شماره موبایل مشتری  
  {% /paramaterItem%}

 {% paramaterItem details="string" title="telephone" %}
 شماره تلفن ثابت
  {% /paramaterItem%}

 {% paramaterItem details="string" title="legal_national_code"  importantInfo="required" %}
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
  
 {% paramaterItem details="string" title="mcc_code" %}
 کد صنف مشتری
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