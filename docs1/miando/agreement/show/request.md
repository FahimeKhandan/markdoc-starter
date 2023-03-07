```js 
var request = require('request');
var options = {
  'method': 'GET',
  'url': '/api/v1/agreements/:tracking_code',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```