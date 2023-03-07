```js 
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://subscription.vandar.io/authorizations/:token'
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```