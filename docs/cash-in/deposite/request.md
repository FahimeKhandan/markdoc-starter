```js towslash
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.vandar.io/v3/business/:business/cash-in/account/deposit',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      "iban" : "IR880620000000302956142002",
      "amount" : 1500000,
      "track_id" : "2ca25322-d10a-49fb-a000-788e1f59ff33",
      "description" : "تراکنش واریز بانکی تست",
  })
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```