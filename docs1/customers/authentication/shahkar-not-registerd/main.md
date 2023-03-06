## SHAHKAR {% #customers_authentications_shahkar .sidebar-nav-sub-menu %}
وب سرویس احراز هویت برای مخاطبینی که ثبت نام نشده اند:
این سرویس با دریافت شماره تلفن همراه و کد ملی اطلاعات هویتی کاربر را مورد سنجش قرار میدهد

##### پارمترها {% .attr %}

{% Attributes title="business" details="string" importantInfo="required" %}
نام انگلیسی کسب و کار است
{% /Attributes%}

{% Attributes title="customer_uuid" details="string" importantInfo="required" %}
شناسه یکتای مشتری می‌باشد که از طریق سرویس مشاهده لیست مشتریان قابل دسترسی می‌باشد
{% /Attribute

{% Attributes title="individual_national_code" details="string" importantInfo="required" %}
 کد ملی مخاطب
{% /Attributes%}

{% Attributes title="mobile" details="string" importantInfo="required" %}
شماره تلفن همراه مخاطب
{% /Attributes%}
