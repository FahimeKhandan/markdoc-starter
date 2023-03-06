## KYC {% #customers_authentications_kyc_not-registerd .sidebar-nav-sub-menu %}
وب سرویس احراز هویت برای مخاطبینی که ثبت نام نشده اند:
این سرویس با دریافت نام , نام خانوادگی , کد ملی و تاریخ تولد اطلاعات هویتی کاربر را مورد سنجش قرار میدهد.


##### پارمترها {% .attr %}

{% Attributes title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /Attributes%}

{% Attributes title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /Attributes%}

{% Attributes title="first_name" details="string" importantInfo="required" %}
نام مخاطب
{% /Attributes%}

{% Attributes title="last_name" details="string" importantInfo="required" %}
نام خانوادگی مخاطب
{% /Attributes%}

{% Attributes title="individual_national_code" details="string" importantInfo="required" %}
 کد ملی مخاطب
{% /Attributes%}

{% Attributes title="birthday" details="string" importantInfo="required" %}
تاریخ تولد جلالی مخاطب
{% /Attributes%}
