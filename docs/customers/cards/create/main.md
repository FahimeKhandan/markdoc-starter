---
title: ثبت شماره کارت 
id: customers_cards_create
level: 3
---

با استفاده از این سرویس می‌توانید برای مشتری شماره کارت ثبت نمایید.


##### پارمترها {% .attr %}

{% paramaterItem title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /paramaterItem%}

{% paramaterItem title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /paramaterItem%}

{% paramaterItem title="card" details="string" importantInfo="required" %}
شماره کارت مشتری
{% /paramaterItem%}

{% paramaterItem title="is_default" details="string" importantInfo="required" %}
 تعیین شماره کارت پیش فرض
{% /paramaterItem%}

{% paramaterItem title="has_inquiry" details="string" importantInfo="required" %}
 تعیین کننده استعلام شماره کارت در لحظه
{% /paramaterItem%}

{% paramaterItem title="first_name" details="string" %}
در صورتی که فیلد has_inquiry برابر true باشد و مشتری از نوع حقیقی باشد و نام مشتری خالی باشد این فیلد اجباری است
{% /paramaterItem%}

{% paramaterItem title="last_name" details="string" %}
در صورتی که فیلد has_inquiry برابر true باشد و مشتری از نوع حقیقی باشد و نام خانوادگی مشتری خالی باشد این فیلد اجباری است
{% /paramaterItem%}

{% paramaterItem title="legal_name" details="string" %}
 در صورتی که فیلد has_inquiry برابر true باشد و مشتری از نوع حقوقی باشد و نام حقوقی مشتری خالی باشد این فیلد اجباری است
{% /paramaterItem%}
