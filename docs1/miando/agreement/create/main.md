## ایجاد یک معامله  {% #miando_agreement_create .sidebar-nav-sub-menu %}
در این بخش می‌توانید یک پیش‌نویس معامله ایجاد کنید.

پیش‌نویس معامله به این معناست که فقط طرف سازنده معامله را تایید کرده است و دیگر اشخاص حاضر در معامله هنوز معامله را تایید نکرده اند.

##### پارمترها {% .attr %}
 {% Attributes title="trace_id" importantInfo="required" details="string" %}
  شناسه یکتا سمت کسب و کار.
  {% /Attributes%}

 {% Attributes title="currency_code" importantInfo="required" details="string" %}
  واحد پول مورد استفاده در معامله (in:IRR)
  {% /Attributes%}

 {% Attributes title="redirect_url" importantInfo="required" details="string" %}
  لینک بازگشت به کسب و کار پس از پرداخت موفق
  {% /Attributes%}

 {% Attributes title="description" importantInfo="required" details="string" %}
  توضیحات مربوط به توافق نامه
  {% /Attributes%}

 {% Attributes title="creator" importantInfo="required" details="string" %}
  نقش ایجاد کننده معامله (in:buyer,seller)
  {% /Attributes%}

 {% Attributes title="parties" importantInfo="required" details="array" %}
  اطلاعات طرفین معامله
  {% /Attributes%}

 {% Attributes title="parties.*.role" importantInfo="required" details="string" %}
  نقش طرف معامله (in:buyer,seller)
  {% /Attributes%}

 {% Attributes title="parties.*.mobile" importantInfo="required" details="string" %}
  موبایل طرف معامله
  {% /Attributes%}

 {% Attributes title="parties.*.iban" importantInfo="required" details="string" %}
  شماره شبا طرف معامله
  {% /Attributes%}

 {% Attributes title="items" importantInfo="required" details="string" %}
آیتم های یک معامله
  {% /Attributes%}

 {% Attributes title="items.*.title" importantInfo="required" details="string" %}
  عنوان کالا
  {% /Attributes%}

 {% Attributes title="items.*.category" importantInfo="required" details="string" %}
  دسته‌بندی کالا
  (in:general,digital)
  {% /Attributes%}


 {% Attributes title="items.*.item_price" importantInfo="required" details="string" %}
  مبلغ کل کالا
  {% /Attributes%}

 {% Attributes title="items.*.price" importantInfo="required" details="string" %}
  مبلغ بیعانه کالا
  {% /Attributes%}

 {% Attributes title="items.*.payer" importantInfo="required" details="string" %}
  نقش پرداخت‌کننده هزینه مربوط به کالا (in:buyer,seller)
  {% /Attributes%}

 {% Attributes title="items.*.payment_method" importantInfo="required" details="string" %}
  نوع پرداخت: پرداخت کامل، پیش پرداخت (in:full-pay,pre-pay)
  {% /Attributes%}

 {% Attributes title="items.*.quantity" importantInfo="integer" details="string" %}
  تعداد کالا
  {% /Attributes%}

##### پارامترهای بیشتر {% .more-attr %}

{% collapsibleParent %}

{% collapsibleItem title="settlement_type" %}
نوع تسویه حساب معامله در صورت نهایی شدن (in:wallet,wallet_iban)

wallet: شارژ کیف پول ونداری کاربر
wallet_iban: شارژ کیف پول و سپس انتقال به شبای کاربر
{% /collapsibleItem %}

{% collapsibleItem title="items.*.description" %}
توضیحات کالا
{% /collapsibleItem %}

{% collapsibleItem title="items.*.link" %}
لینک توضیحات مربوط به کالا
{% /collapsibleItem %}

{% collapsibleItem title="items.*.attachments" %}
عکس‌های مربوط به کالا
{% /collapsibleItem %}


{% /collapsibleParent %}


