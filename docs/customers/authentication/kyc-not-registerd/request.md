```js 
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.vandar.io/v2/business/:business/customers/authentication/kyc',
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