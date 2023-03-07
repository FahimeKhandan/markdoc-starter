```js 
var request = require('request');
var options = {
    'method': 'POST',
    'url': '/v3/business/:business/subscription/withdrawal/store',
    'headers': {
        'Accept': 'application/json',
        'Authorization': 'Bearer token',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "authorization_id": "9f307e30-dc77-11ea-830e-7533ca1787c5",
        "amount": "10000",
        "withdrawal_date": "2020-07-04",
        "is_instant": 0,
        "notify_url": "https://yourdomain.com/notify/me",
        "max_retry_count": 1,
        "description": "تست",
        "track_id": "d2c5bf5a-280f-4ee5-8888-3d220b63bcc0"
    })
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
```