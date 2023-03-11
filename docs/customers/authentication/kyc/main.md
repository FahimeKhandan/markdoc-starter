---
title: KYC
id: customers_authentications_kyc
level: 3
---

وب سرویس احراز هویت برای مخاطبینی که ثبت نام شده اند:
این سرویس با دریافت نام , نام خانوادگی , کد ملی و تاریخ تولد اطلاعات هویتی کاربر را مورد سنجش قرار میدهد.


##### پارمترها {% .attr %}

{% paramaterItem title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /paramaterItem%}

{% paramaterItem title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /paramaterItem%}