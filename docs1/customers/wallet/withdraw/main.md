## برداشت از کیف پول {% #customers_wallet_withdraw  .sidebar-nav-sub-menu %}
در صورت نیاز به پایین آرودن موجودی کیف پول مشتری می‌توانید با استفاده از این سرویس، یک تراکنش برداشت از کیف پول مشتری ثبت نمایید.

##### پارمترها {% .attr %}

{% Attributes title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /Attributes%}

{% Attributes title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /Attributes%}

{% Attributes title="amount" details="string" importantInfo="required" %}
مبلغی که می‌خواهید به کیف پول مشتری اضافه شود
{% /Attributes%}

{% Attributes title="comment" details="string" importantInfo="optional" %}
توضیحات مربوط به تراکنش واریزی
{% /Attributes%}

{% Attributes title="track_id" details="string" importantInfo="required" %}
شماره پیگیری غیرتکراری
{% /Attributes%}