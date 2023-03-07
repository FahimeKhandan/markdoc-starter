```js 
var request = require('request');
var options = {
  'method': 'POST',
  'url': '/v3/business/:business/subscription/authorization/store',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "bank_code": "062",
    "mobile": "09123456789",
    "callback_url": "https://yourdomain.com",
    "count": 1,
    "limit": 1000,
    "expiration_date": "2023-01-01",
    "name": "",
    "email": "a@b.com",
    "wage_type": "APPLICATION_SELF",
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```