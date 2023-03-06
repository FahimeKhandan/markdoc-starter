```js
var request = require('request');
var options = {
  'method': 'POST',
  'url': '/account/v1/refresh-token',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "refreshtoken": "{refreshtoken}"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```