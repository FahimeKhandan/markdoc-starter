## ایجاد یک مشتری  {% #miando_customer_create .sidebar-nav-sub-menu %}
در سرویس میاندو به منظور انجام معماملات امن، مشتریان باید احراز هویت شوند. این پروسه از طریق استعلام از ثبت احوال انجام میگیرد
##### پارمترها {% .attr %}

 {% paramaterItem title="first_name" details="string" importantInfo="required" %}
  نام مشتری ، باید با اطلاعات هویتی او که در ثبت احوال موجود است مطابقت داشته باشد.
  {% /paramaterItem%}

 {% paramaterItem title="last_name" details="string" importantInfo="required" %}
  نام خانوادگی مشتری ، باید با اطلاعات هویتی او که در ثبت احوال موجود است مطابقت داشته باشد.
  {% /paramaterItem%}

 {% paramaterItem title="national_code" details="string" importantInfo="required" %}
    کدملی مشتری ، باید با اطلاعات هویتی او که در ثبت احوال موجود است مطابقت داشته باشد.
  {% /paramaterItem%}

 {% paramaterItem title="mobile" details="string" importantInfo="required" %}
  موبایل مشتری ، باید متعلق به خودش باشد ، این شماره با کدملی او مطابقت داده می شود. 
  {% /paramaterItem%}

 {% paramaterItem title="birth_date" details="string" importantInfo="required" %}
  تاریخ تولد مشتری ، باید با اطلاعات هویتی او که در ثبت احوال موجود است مطابقت داشته باشد.
  {% /paramaterItem%}

