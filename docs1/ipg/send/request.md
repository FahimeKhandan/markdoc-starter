```js 
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://ipg.vandar.io/api/v3/transaction',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      "api_key": "کلید درگاه پرداخت دریافتی از پنل",
      "amount": 1000,
      "callback_url": "https://example.com/callback",
      "mobile_number": "09123456789",
      "factorNumber": "12345",
      "description": "توضیحات دلخواه",
      "valid_card_number": "شماره کارت معتبر",
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```