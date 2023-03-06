```js towslash
var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://api.vandar.io/v2.1/business/:business_name/settlement',
    'headers': {
        'Authorization': 'Bearer :token'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
```