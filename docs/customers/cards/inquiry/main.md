---
title: استعلام شماره کارت 
id: customers_cards_inquery
level: 3
---

در صورت نیاز می‌توانید از این بخش شماره کارت مربوط به مشتری را استعلام نمایید.

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

{% paramaterItem title="first_name" details="string" importantInfo="required" %}
 در صورتی که مشتری از نوع حقیقی باشد و نام مشتری خالی باشد این فیلد اجباری است.
{% /paramaterItem%}

{% paramaterItem title="last_name" details="string" importantInfo="required" %}
در صورتی که مشتری از نوع حقیقی باشد و نام خانوادگی مشتری خالی باشد این فیلد اجباری است.
{% /paramaterItem%}

{% paramaterItem title="calegal_namerd" details="string" importantInfo="required" %}
در صورتی که مشتری از نوع حقوقی باشد و نام حقوقی مشتری خالی باشد این فیلد اجباری است.
{% /paramaterItem%}