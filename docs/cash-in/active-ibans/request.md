---
toolbarDiscription: vandar api
---

# fdfkjgkfdjg {% #sdsdd  %}

```js toolbarDiscription="cxdfdff"
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.vandar.io/v3/business/:business/cash-in/account',
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