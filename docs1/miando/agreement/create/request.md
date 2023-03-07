```js 
var request = require('request');
var options = {
  'method': 'POST',
  'url': '/api/v1/agreements',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer :token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "trace_id": "969691a5-9111-4a7f-a898-e5fc3e2eb0e5",
    "currency_code": "IRR",
    "redirect_url": "http://redirect.url",
    "description": "موبایل y8s",
    "creator": "buyer",
    "deposit_price": 10000,
    "payment_method": "pre-pay",
    "payer": "buyer",
    "parties": [
      {
        "role": "buyer",
        "mobile": "09123456789",
        "iban": "IR670120020000002353697200"
      },
      {
        "role": "seller",
        "mobile": "09023456789",
        "iban": "IR040120020000002343697300"
      }
    ],
    "items": [
      {
        "title": "موبایل y8s",
        "category": "digital",
        "description": "در حد نو",
        "link": "https://divar.ir/v/gYoSNB1z",
        "price": 1000000,
        "quantity": 1,
        "attachments": [
          "https://vandar.io/assets/img/home/dashboard-full.png",
          "https://vandarpay.github.io/docs/images/token-step1.png"
        ]
      }
    ]
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```