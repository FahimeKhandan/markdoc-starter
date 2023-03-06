```js towslash
var request = require('request');
var options = {
  'method': 'DELETE',
  'url': 'https://api.vandar.io/v3/business/:business/customers/:customer_uuid/cards/:card',
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