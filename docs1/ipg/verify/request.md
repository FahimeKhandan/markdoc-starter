```js towslash
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://ipg.vandar.io/api/v3/verify',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      "api_key": "کلید درگاه پرداخت دریافتی از پنل",
      "token": "توکن پرداختی که در مرحله یک دریافت کردید"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```