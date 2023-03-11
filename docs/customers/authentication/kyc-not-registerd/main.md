---
title: KYC
id: customers_authentications_kyc_not
level: 3
---

وب سرویس احراز هویت برای مخاطبینی که ثبت نام نشده اند:
این سرویس با دریافت نام , نام خانوادگی , کد ملی و تاریخ تولد اطلاعات هویتی کاربر را مورد سنجش قرار میدهد.


##### پارمترها {% .attr %}

{% paramaterItem title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /paramaterItem%}

{% paramaterItem title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /paramaterItem%}

{% paramaterItem title="first_name" details="string" importantInfo="required" %}
نام مخاطب
{% /paramaterItem%}

{% paramaterItem title="last_name" details="string" importantInfo="required" %}
نام خانوادگی مخاطب
{% /paramaterItem%}

{% paramaterItem title="individual_national_code" details="string" importantInfo="required" %}
 کد ملی مخاطب
{% /paramaterItem%}

{% paramaterItem title="birthday" details="string" importantInfo="required" %}
تاریخ تولد جلالی مخاطب
{% /paramaterItem%}
