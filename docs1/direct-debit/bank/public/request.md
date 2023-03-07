```js 
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://health.vandar.io/subscription',
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```