```js 
var request = require('request');
var options = {
    'method': 'POST',
    'url': 'https://api.vandar.io/v3/business/:business/transaction/:transaction_id/refund',
    'headers': {
    },
    formData: {
        'payment_number': '123456789',
        'description': 'متن توضیحات بازگشت وجه ',
        'comment': 'متن یادداشت بازگشت وجه',
        'notify_url': 'https://webhook.site/e59952dc-c2ad-4355-b90d-ef1814ffb431'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});

```