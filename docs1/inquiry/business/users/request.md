```js 
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.vandar.io/v2/business/:business/iam?page=1&per_page=10',
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