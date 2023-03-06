##  ثبت درخواست تسویه {% #refund_store .sidebar-nav-sub-menu %}

با استفاده از این سرویس می‌توانید درخواست بازگشت وجه موردنظر خود را ثبت نمائید. 
##### پارمترها {% .attr %}

{% Attributes title="amount" details="string" importantInfo="optional" %}
میزان مبلغ موردنظر برای بازگشت وجه

{% callout type="warning" %}
دقت داشته باشید در صورت ارسال پارامتر مبلغ بازگشت وجه، مبلغ تراکنش به همان اندازه تعیین شده از مبلغ کل برگشت داده می شود، در صورت عدم ارسال، همه مبلغ تراکنش برگشت داده خواهد شد. 
{% /callout %}

{% /Attributes%}

{% Attributes title="payment_number" details="string" importantInfo="optional" %}
شناسه ای اختیاری که برای هردرخواست باید مقداری یکتا باشد.
  {% /Attributes%}

{% Attributes title="description" details="string" importantInfo="optional" %}
توضیحات اختیاری بازگشت وجه که در رسید تراکنش نمایش داده می‌شود.
{% /Attributes%}

{% Attributes title="comment" details="string" importantInfo="optional" %}
متن یادداشت اختیاری بازگشت وجه
{% /Attributes%}

{% Attributes title="notify_url" details="string" importantInfo="optional" %}
آدرس وبهوکی که می‌توانید ارسال کنید تا از وضعیت نهایی این برداشت وجه مطلع شوید. \
در مواقع تست می‌توانید از وبسایت webhook.site استفاده کنید.
  {% /Attributes%}
