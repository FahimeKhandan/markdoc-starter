---
title: SHAHKAR
id: customers_authentications_shahkar_not_registerd
level: 3
---

وب سرویس احراز هویت برای مخاطبینی که ثبت نام نشده اند:
این سرویس با دریافت شماره تلفن همراه و کد ملی اطلاعات هویتی کاربر را مورد سنجش قرار میدهد

##### پارمترها {% .attr %}

{% paramaterItem title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /paramaterItem%}

{% paramaterItem title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /Attribute

{% paramaterItem title="individual_national_code" details="string" importantInfo="required" %}
 کد ملی مخاطب
{% /paramaterItem%}

{% paramaterItem title="mobile" details="string" importantInfo="required" %}
شماره تلفن همراه مخاطب
{% /paramaterItem%}
