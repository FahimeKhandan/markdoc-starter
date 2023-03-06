## ثبت درخواست برداشت وجه  {% #direct_debit_store_withdrawal .sidebar-nav-sub-menu %}
 این سرویس را می‌توانید تا سقف محدودیت مبلغ و تعداد برداشت تعیین شده برای مجوز فراخوانی نمایید.

##### پارامترها {% .attr %}

 {% Attributes title="authorization_id" details="string" importantInfo="required" %}
  آیدی دریافتی در بخش ایجاد مجوز که می‌خواهید مبلغ از آن مجوز برداشت شود.
{% /Attributes%}

 {% Attributes title="amount" details="string" importantInfo="required" %}
  مبلغ برداشت وجه.
{% /Attributes%}

 {% Attributes title="withdrawal_date" details="string" importantInfo="required if is_instant=0" %}
 اجباری در حالت `is_instant=0`: تاریخی که در آن روز از حساب برداشت شود. روز معین شده باید بعد از روز جاری باشد.

{% /Attributes%}



 ##### پارامترهای بیشتر {% .attr %}

{% collapsibleParent %}

{% collapsibleItem title="is_instant" details="integer" importantInfo="optional" %}
  این پارامتر مشخص می‌کند که برداشت وجه در همین لحظه انجام شود یا در آینده. مقدار این پارامتر می تواند 0 یا 1 باشد. 1 به معنای این که برداشت در لحظه انجام شود و 0 به این معنا که برداشت در آینده انجام شود. در صورت عدم ارسال، 1 در نظر گرفته می‌شود.
{% /collapsibleItem %}

{% collapsibleItem title="notify_url" details="integer" importantInfo="optional" %}
  آدرس وبهوکی که می‌توانید ارسال کنید تا از وضعیت نهایی این برداشت وجه مطلع شوید که طول آن نباید بیشتر از ۲۰۴۸ کاراکتر باشد. در مواقع تست می‌توانید از وبسایت webhook.siteاستفاده کنید.
{% /collapsibleItem %}

{% collapsibleItem title="max_retry_count" details="string" importantInfo="optional" %}
  حداکثر تعداد دفعاتی که می‌خواهید برای این برداشت وجه تلاش شود. حداقل ۱ و حداکثر ۱۶ مرتبه می‌توان برای یک برداشت وجه تلاش کرد. دقت داشته باشید که در صورت عدم ارسال این پارامتر، مقدار آن برابر با ۱ در نظر گرفته می‌شود. همچنین در نظر داشته باشید این پارامتر برای برداشت وجه‌های آنی (is_instant: 1) برابر با ۱ در نظر گرفته می‌شود (و برداشت وجه آنی بلافاصله پس از استعلام (نمایش برداشت وجه - withdrawal show)، تعیین وضعیت می‌شود که حالت FAILED است یا DONE). در صورتی که برداشت وجه به صورت آنی نباشد (is_instant: 0) اگر برداشت وجه موفقیت‌آمیز باشد (status: DONE) که دیگر تلاشی صورت نمی‌گیرد، اما اگر برداشت وجه به هر دلیل موفقیت‌آمیز نباشد، تا زمانی که برداشت وجه موفقیت‌آمیز شود و یا مقدار retry_count به تعداد max_retry_count برسد سعی به برداشت وجه صورت می‌گیرد. لازم به ذکر است که تا زمانی که برداشت وجه موفقیت‌آمیز نباشد وضعیت آن برداشت وجه به حالت PENDING است و فقط زمانی که مقدار retry_count به max_retry_count (ارسالی از شما) برسد و هنوز برداشت وجه موفقیت‌آمیز نبوده باشد دیگر تلاشی برای برداشت وجه صورت نمی‌گیرد و وضعیت آن برداشت وجه از حالت PENDING به حالت FAILED تبدیل می‌شود.
{% /collapsibleItem %}

{% collapsibleItem title="description" details="integer" importantInfo="optional" %}
  توضیحات اختیاری برای ثبت برداشت وجه
{% /collapsibleItem %}

{% collapsibleItem title="track_id" details="integer" importantInfo="optional" %}
  شناسه پیگیری که به ازای هر درخواست برداشت باید یکتا باشد. پیشنهاد ما استفاده از uuid برای این پارامتر می‌باشد. این پارامتر به حروف بزرگ و کوچک حساس است. با استفاده از این پارامتر می توان در سرویس نمایش برداشت وجه بر اساس شناسه پیگیری که در ادامه توضیح داده می شود از جزییات برداشت وجه مطع شوید.
{% /collapsibleItem %}


{% /collapsibleParent %}



