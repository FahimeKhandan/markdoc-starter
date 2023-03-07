---
title: تبدیل شماره کارت به شبا 
id: customers_ibans_customers_ibans_toIbanlist
level: 3
---

با استفاده از این سرویس می‌توانید از شماره کارت به شماره شبا پشت کارت برسید.

در حال حاضر این سرویس برای شماره کارت ها از بانک های زیر قابل استفاده است:
- بانک اقتصاد نوین
- بانک کشاورزی
- بانک سامان
- بانک سرمایه
- بانک صادرات
- بانک رسالت
- بانک دی
- بانک انصار
- بانک شهر
- بانک تجارت
- بانک ایران زمین
- بانک سینا
- بانک صنعت و معدن
- بانک پاسارگاد
- بانک ملی

##### پارمترها {% .attr %}

{% Attributes title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /Attributes%}

{% Attributes title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /Attributes%}

{% Attributes title="card" details="string" importantInfo="required" %}
{% /Attributes%}

{% Attributes title="is_default" details="string" importantInfo="required" %}
شماره کارت مشتری
{% /Attributes%}

{% Attributes title="has_inquiry" details="string" importantInfo="required" %}
تعیین شماره کارت پیش فرض
{% /Attributes%}

{% Attributes title="" details="string" importantInfo="required" %}
عیین کننده استعلام شماره کارت در لحظه
{% /Attributes%}

