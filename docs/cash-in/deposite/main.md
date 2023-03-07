---
title: درخواست واریز بانکی
id: cahin_deposite
level: 2
---

در این بخش، میتوانید درخواست خود را برای واریز بانکی و شارژ کیف پول خود در وندار ثبت کنید

##### پارمترها {% .attr %}

 {% Attributes title="iban" details="string" importantInfo="required" %}
  شماره شبایی که قصد واریز مبلغ از آن حساب بانکی دارید (طبیعتاً باید این شماره شبا جزو شماره شباهایی باید باشد که هنگام فعال سازی ابزار به آن دسترسی دادید و درحال حاضر فعال میباشد)
  {% /Attributes%}
 {% Attributes title="amount" details="numeric" importantInfo="required" %}
  مبلغ واریز (ریال)
  {% /Attributes%}
 {% Attributes title="track_id" details="numeric" importantInfo="required" %}
  رشته پیگیری که به ازای هر درخواست واریز بایستی یکتا باشد. پیشنهاد ما استفاده از `uuid` برای این پارامتر است.این پارامتر به حروف بزرگ و کوچک حساس است.
  {% /Attributes%}
 {% Attributes title="description" details="numeric" importantInfo="optional" %}
  توضیحات اختیاری برای ثبت واریز که داخل رسید واریز بانکی قابل مشاهده خواهد بود
  {% /Attributes%}
 {% Attributes title="comment" details="numeric" importantInfo="optional" %}
  توضیحات محرمانه برای ثبت واریز که فقط داخل داشبورد کاربری و فقط برای شما قابل مشاهده خواهد بود
{% /Attributes%}