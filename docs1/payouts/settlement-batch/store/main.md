##  ثبت درخواست تسویه {% #settlement_batch_store .sidebar-nav-sub-menu %}

با استفاده از این سرویس میتوانید درخواست تسویه های گروهی خود را ثبت کنید 
##### پارمترها {% .attr %}

{% paramaterItem title="batch_id" details="string" importantInfo="required" %}
شناسه یکتایی که برای ثبت هر تسویه گروهی ارسال می گردد. این مقدار از512 Hash اطلاعات آرایه ارسالی batches_settlement ایجاد می شود. نمونه از ساخت این مقدار را می توانید در نمونه کد زیر که به زبان php است مشاهده کنید.

  {% /paramaterItem%}

{% paramaterItem title="iban" details="string" importantInfo="required" %}
 شماره شبا مقصد که قصد واریز وجه به آن را دارید
  {% /paramaterItem%}

{% paramaterItem title="track_id" details="string" importantInfo="required" %}
  رشته پیگیری که به ازای هر درخواست تسویه بایستی یکتا باشد. پیشنهاد ما استفاده از uuid برای این پارامتر است.این پارامتر به حروف بزرگ و کوچک حساس است
  {% /paramaterItem%}

{% paramaterItem title="payment_number" details="integer" importantInfo="optional" %}
شناسه واریز شماره ای اختیاری است
  {% /paramaterItem%}

{% paramaterItem title="notify_url" details="string" importantInfo="optional" %}
بعد از مشخص شدن وضعیت تسویه این آدرس صدا زده می‌شود
  {% /paramaterItem%}

{% paramaterItem title="description" details="string" importantInfo="optional" %}
ارسال توضیحات با محدودیت حداکثر256 کاراکتر
  {% /paramaterItem%}

{% paramaterItem title="is_instant" details="boolean" importantInfo="optional" %}
اگر می‌خواهید درخواست ثبت تسویه در لحظه به بانک ارسال شود، مقدار true و در غیر این صورت مقدار false را ارسال کنید.

{% callout type="warning" %}
 تسویه های ثبت شده در وندار، با ارسال به بانک در بازه های 30 دقیقه ای، امکان لغو کردن تسویه را به کاربران می دهند. چنانچه شما تصمیم دارید تا درخواست ثبت تسویه، سریع تر (به صورت لحظه ای) به بانک ارسال شود، میتوانید برای پارامتر is_instant، مقدار true را ارسال کنید.
{% /callout %}
{% /paramaterItem%}



{% paramaterItem title="type" details="string" importantInfo="optional" %}
اگر میخواهید تسویه خود به صورت حساب به حساب انجام شود، A2A و در غیراینصورت مقدار ACH را میتوانید ارسال کنید

{% callout type="warning" %}
 تمامی تسویه ها در وندار به طور پیشفرض به صورت ACH و در زمان های واریز پایا انجام می شود.
چنانچه می خواهید تسویه شما بدون درنظرگرفته شدن زمان های واریزی پایا و به صورت حساب به حساب انجام شود، میتوانید با:
 ۱. فعال کردن ابزار حساب به حساب در داشبورد وندار و
 ۲. ارسال مقدار A2A برای پارامتر type
   از این امکان استفاده کنید.
   بدیهی است باوجود فعال داشتن ابزار حساب به حساب، در صورت عدم ارسال A2A برای این پارامتر، مقدار پیشفرض(ACH) برای آن در نظر گرفته شده و تسویه به صورت پایا انجام خواهد شد.
   {% /callout %}
{% /paramaterItem%}
