```js 
var request = require('request');
var options = {
  'method': 'POST',
  'url': '/v3/business/:business/customers/:customer_uuid/ibans/:iban/inquiry',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```