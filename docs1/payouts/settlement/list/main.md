##  مشاهده لیست تسویه ها  {% #settlement_list .sidebar-nav-sub-menu %}

در این بخش شما می‌توانید همه‌ی تسویه‌هایی را که تا به حال ثبت کرده‌اید، مشاهده نمایید.
##### پارمترها {% .attr %}

{% callout type="warning" %}
پارامتر deductible_amount نشان‌دهنده مبلغ قابل برداشت امروز و پارامتر blocked_amount نشان‌دهنده مبلغ مسدود‌شده در حساب است.
{% /callout %}


وضعیت های ممکن برای تسویه ها:

{% childAttributs title="وضعیت های تراکنش تسویه" %}
{% table .child-att %}
  ---
 * PENDING
    * وقتی که تسویه به بانک فرستاده شده و در انتظار رسیدن به سیکل مورد نظر است
  ---
 * INIT
    * وقتی که تسویه به بانک فرستاده می‌شود
  ---
 * DONE
    * تسویه‌ای که با موفقیت انجام شده است
  ---
 * FAILED
    *	تسویه‌ای که با خطا مواجه شده است
  ---
 * CANCELED
    *	تسویه لغو شده است. لازم به ذکر است که امکان لغو تسویه در وضعیت تسویه‌ی آنی وجود ندارد
{% /table %}
{% /childAttributs %}


{% Attributes title="business_name" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار
{% /Attributes%}

{% Attributes title="per_page" details="integer" importantInfo="optional" %}
تعداد تراکنش های تسویه در هر صفحه را مشخص میکند
{% /Attributes%}

{% Attributes title="page" details="integer" importantInfo="optional" %}
صفحه مورد نظر را مشخص می‌کند
  {% /Attributes%}
