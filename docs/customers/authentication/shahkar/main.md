---
title: SHAHKAR
id: customers_authentications_shahkar
level: 3
---

وب سرویس احراز هویت برای مخاطبینی که ثبت نام شده اند:
این سرویس با دریافت شماره تلفن همراه و کد ملی اطلاعات هویتی کاربر را مورد سنجش قرار میدهد

##### پارمترها {% .attr %}

{% Attributes title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /Attributes%}

{% Attributes title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /Attributes%}

{% Attributes title="first_name" details="string" importantInfo="required" %}
نام مخاطب
{% /Attributes%}

{% Attributes title="last_name" details="string" importantInfo="required" %}
نام خانوادگی مخاطب
{% /Attributes%}

{% Attributes title="individual_national_code" details="string" importantInfo="required" %}
 کد ملی مخاطب
{% /Attributes%}

{% Attributes title="birthday" details="string" importantInfo="required" %}
تاریخ تولد جلالی مخاطب
{% /Attributes%}
