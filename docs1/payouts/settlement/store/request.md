```js towslash
var request = require('request');
var options = {
    'method': 'POST',
    'url': 'https://api.vandar.io/v3/business/:business_name/settlement/store',
    'headers': {
        'Authorization': 'Bearer :token'
    },
    formData: {
        'amount': '5000',
        'iban': 'IR260620000000203443585001',
        'track_id': '7d274f0b-a6b0-4088-9ce6-00085596a792',
        'type': 'A2A',
        'is_instant': 1,
        'notify_url': 'https://webhook.site/e59952dc-c2ad-4355-b90d-ef1814ffb431',
        'payment_number': '123321000',
        'description': 'توضیحات تسویه حساب وندار',
        'comment': 'کامنت تسویه حساب وندار'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
```