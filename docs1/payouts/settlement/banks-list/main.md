##  وضعیت سلامت بانک‌های سرویس تسویه  {% #settlement_bank_list .sidebar-nav-sub-menu %}

در این آدرس ‌می‌توانید از وضعیت سلامت بانک‌های سرویس تسویه مطلع شوید.
##### پارمترها {% .attr %}

{% Attributes title="business_name" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار
{% /Attributes%}

{% Attributes title="has_a2a_bank_ability" details="boolean" importantInfo="optional" %}
لیست بانک هایی که وندار سرویس انتقال حساب به حساب برای آنها ارائه می کند را نمایش می دهد.
{% /Attributes%}

{% Attributes title="is_a2a_bank_healthy" details="boolean" importantInfo="optional" %}
لیست بانک هایی که سرویس انتقال حساب به حساب آنها دارای صحت و سلامت هستند و امکان ثبت تسویه حساب به حساب برای آنها وجود دارد را نمایش می دهد.
  {% /Attributes%}

{% Attributes title="is_a2a_bank_active" details="boolean" importantInfo="optional" %}
لیست بانک هایی که در ابزار حساب به حساب فعال کرده اید را نمایش می دهد.
  {% /Attributes%}