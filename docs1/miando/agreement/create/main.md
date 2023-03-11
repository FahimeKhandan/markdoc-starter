## ایجاد یک معامله  {% #miando_agreement_create .sidebar-nav-sub-menu %}
در این بخش می‌توانید یک پیش‌نویس معامله ایجاد کنید.

پیش‌نویس معامله به این معناست که فقط طرف سازنده معامله را تایید کرده است و دیگر اشخاص حاضر در معامله هنوز معامله را تایید نکرده اند.

##### پارمترها {% .attr %}
 {% paramaterItem title="trace_id" importantInfo="required" details="string" %}
  شناسه یکتا سمت کسب و کار.
  {% /paramaterItem%}

 {% paramaterItem title="currency_code" importantInfo="required" details="string" %}
  واحد پول مورد استفاده در معامله (in:IRR)
  {% /paramaterItem%}

 {% paramaterItem title="redirect_url" importantInfo="required" details="string" %}
  لینک بازگشت به کسب و کار پس از پرداخت موفق
  {% /paramaterItem%}

 {% paramaterItem title="description" importantInfo="required" details="string" %}
  توضیحات مربوط به توافق نامه
  {% /paramaterItem%}

 {% paramaterItem title="creator" importantInfo="required" details="string" %}
  نقش ایجاد کننده معامله (in:buyer,seller)
  {% /paramaterItem%}

 {% paramaterItem title="parties" importantInfo="required" details="array" %}
  اطلاعات طرفین معامله
  {% /paramaterItem%}

 {% paramaterItem title="parties.*.role" importantInfo="required" details="string" %}
  نقش طرف معامله (in:buyer,seller)
  {% /paramaterItem%}

 {% paramaterItem title="parties.*.mobile" importantInfo="required" details="string" %}
  موبایل طرف معامله
  {% /paramaterItem%}

 {% paramaterItem title="parties.*.iban" importantInfo="required" details="string" %}
  شماره شبا طرف معامله
  {% /paramaterItem%}

 {% paramaterItem title="items" importantInfo="required" details="string" %}
آیتم های یک معامله
  {% /paramaterItem%}

 {% paramaterItem title="items.*.title" importantInfo="required" details="string" %}
  عنوان کالا
  {% /paramaterItem%}

 {% paramaterItem title="items.*.category" importantInfo="required" details="string" %}
  دسته‌بندی کالا
  (in:general,digital)
  {% /paramaterItem%}


 {% paramaterItem title="items.*.item_price" importantInfo="required" details="string" %}
  مبلغ کل کالا
  {% /paramaterItem%}

 {% paramaterItem title="items.*.price" importantInfo="required" details="string" %}
  مبلغ بیعانه کالا
  {% /paramaterItem%}

 {% paramaterItem title="items.*.payer" importantInfo="required" details="string" %}
  نقش پرداخت‌کننده هزینه مربوط به کالا (in:buyer,seller)
  {% /paramaterItem%}

 {% paramaterItem title="items.*.payment_method" importantInfo="required" details="string" %}
  نوع پرداخت: پرداخت کامل، پیش پرداخت (in:full-pay,pre-pay)
  {% /paramaterItem%}

 {% paramaterItem title="items.*.quantity" importantInfo="integer" details="string" %}
  تعداد کالا
  {% /paramaterItem%}

##### پارامترهای بیشتر {% .more-attr %}

{% moreParameters title="settlement_type" %}
نوع تسویه حساب معامله در صورت نهایی شدن (in:wallet,wallet_iban)

wallet: شارژ کیف پول ونداری کاربر
wallet_iban: شارژ کیف پول و سپس انتقال به شبای کاربر
{% /moreParameters %}

{% moreParameters title="items.*.description" %}
توضیحات کالا
{% /moreParameters %}

{% moreParameters title="items.*.link" %}
لینک توضیحات مربوط به کالا
{% /moreParameters %}

{% moreParameters title="items.*.attachments" %}
عکس‌های مربوط به کالا
{% /moreParameters %}

