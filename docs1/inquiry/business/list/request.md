```js 
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.vandar.io/v2/business/:business',
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