```js towslash
var request = require('request');
var options = {
  'method': 'PATCH',
  'url': '/v3/business/:business/subscription/authorization/:authorization/verify',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```