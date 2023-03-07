```js 
var request = require('request');
var options = {
  'method': 'PUT',
  'url': '/v3/business/:business/subscription/withdrawal/:id',
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