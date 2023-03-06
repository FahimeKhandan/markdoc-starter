```js towslash
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.vandar.io/v3/business/:business/cash-in/account/balance',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      "iban" : "IR880620000000302956142002",
  })
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```