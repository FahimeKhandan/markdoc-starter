```js 
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.vandar.io/v3/business/:business/transaction',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
    body: JSON.stringify({
        "fromDate": "14000102",
        "toDate": "14000109",
        "status": "succeed",
        "statusKind": "transactions",
        "channel": "ipg",
    })
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```