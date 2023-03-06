##  استعلام شماره شبا {% #customers_ibans_inquery  .sidebar-nav-sub-menu %}
در صورت نیاز می‌توانید از این بخش شماره شبا مربوط به مشتری را استعلام نمایید.

##### پارمترها {% .attr %}

{% Attributes title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /Attributes%}

{% Attributes title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /Attributes%}


{% Attributes title="first_name" details="string" importantInfo="required" %}
در صورتی که مشتری از نوع حقیقی باشد و نام مشتری خالی باشد این فیلد اجباری است
{% /Attributes%}

{% Attributes title="last_name" details="string" importantInfo="required" %}
در صورتی که مشتری از نوع حقیقی باشد و نام خانوادگی مشتری خالی باشد این فیلد اجباری است
{% /Attributes%}

{% Attributes title="legal_name" details="string" importantInfo="required" %}
در صورتی که مشتری از نوع حقوقی باشد و نام حقوقی مشتری خالی باشد این فیلد اجباری است.
{% /Attributes%}
