```js towslash
var request = require('request');
var options = {
  'method': 'POST',
  'url': '/api/v1/agreements/:tracking_code/cancel',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "applicant_mobile": "09123456789"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```