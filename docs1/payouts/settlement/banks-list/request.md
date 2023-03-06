```js towslash
var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://api.vandar.io/v3/business/:business_name/settlement/banks',
    'headers': {
        'Authorization': 'Bearer :token'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});

```