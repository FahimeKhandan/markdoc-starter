```js 
var request = require('request');
var options = {
  'method': 'GET',
  'url': '/v2/business/:business/customers/:customer_uuid',
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