---
title: ثبت شماره شبا 
id: customers_ibans_create
level: 3
---

با استفاده از این سرویس می‌توانید برای مشتری شماره شبا ثبت نمایید.

##### پارمترها {% .attr %}

{% paramaterItem title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /paramaterItem%}

{% paramaterItem title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /paramaterItem%}

{% paramaterItem title="iban" details="string" importantInfo="required" %}
شماره شبا مشتری
{% /paramaterItem%}

{% paramaterItem title="is_default" details="string" importantInfo="required" %}
تعیین شماره شبا پیش فرض
{% /paramaterItem%}

{% paramaterItem title="has_inquiry" details="string" importantInfo="required" %}
تعیین کننده استعلام شماره شبا در لحظه
{% /paramaterItem%}

{% paramaterItem title="first_name" details="string" importantInfo="required" %}
در صورتی که فیلد has_inquiry برابر true باشد و مشتری از نوع حقیقی باشد و نام مشتری خالی باشد این فیلد اجباری است.
{% /paramaterItem%}

{% paramaterItem title="last_name" details="string" importantInfo="required" %}
در صورتی که فیلد has_inquiry برابر true باشد و مشتری از نوع حقیقی باشد و نام خانوادگی مشتری خالی باشد این فیلد اجباری است.
{% /paramaterItem%}

{% paramaterItem title="legal_name" details="string" importantInfo="required" %}
در صورتی که فیلد has_inquiry برابر true باشد و مشتری از نوع حقوقی باشد و نام حقوقی مشتری خالی باشد این فیلد اجباری است.
{% /paramaterItem%}
