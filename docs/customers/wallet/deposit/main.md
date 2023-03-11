---
title: واریز به کیف پول 
id: customers_wallet_deposit
level: 3
---

در صورت نیاز به بالا بردن موجودی کیف پول مشتری می‌توانید با استفاده از این سرویس، یک تراکنش واریز به حساب، برای مشتری ثبت نمایید.

##### پارمترها {% .attr %}
{% paramaterItem title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /paramaterItem%}

{% paramaterItem title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /paramaterItem%}

{% paramaterItem title="amount" details="string" importantInfo="required" %}
مبلغی که می‌خواهید به کیف پول مشتری اضافه شود
{% /paramaterItem%}

{% paramaterItem title="comment" details="string" importantInfo="optional" %}
توضیحات مربوط به تراکنش واریزی
{% /paramaterItem%}

{% paramaterItem title="track_id" details="string" importantInfo="required" %}
شماره پیگیری غیرتکراری
{% /paramaterItem%}
