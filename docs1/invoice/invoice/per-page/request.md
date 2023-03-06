```js towslash
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.vandar.io/v3/business/:business/meta',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
    body: JSON.stringify({
        "per_page": "25",
        "page": "5"
    })
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```