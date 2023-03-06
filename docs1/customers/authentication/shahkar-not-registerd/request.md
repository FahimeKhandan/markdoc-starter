```js towslash
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.vandar.io/v3/business/:business/customers/authentication/shahkar',
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