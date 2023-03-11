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

{% paramaterItem title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /paramaterItem%}

{% paramaterItem title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /paramaterItem%}

{% paramaterItem title="card" details="string" importantInfo="required" %}
{% /paramaterItem%}

{% paramaterItem title="is_default" details="string" importantInfo="required" %}
شماره کارت مشتری
{% /paramaterItem%}

{% paramaterItem title="has_inquiry" details="string" importantInfo="required" %}
تعیین شماره کارت پیش فرض
{% /paramaterItem%}

{% paramaterItem title="" details="string" importantInfo="required" %}
تعیین کننده استعلام شماره کارت در لحظه
{% /paramaterItem%}

