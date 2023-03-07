```js 
var request = require('request');
var options = {
  'method': 'POST',
  'url': '/api/v1/customers',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "first_name": "رضا",
    "last_name": "رضایی",
    "national_code": "1271234567",
    "mobile": "09123456789",
    "birth_date": "13700502"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```