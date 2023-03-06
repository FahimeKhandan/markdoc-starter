```js towslash
var request = require('request');
var options = {
    'method': 'DELETE',
    'url': 'https://api.vandar.io/v2/business/:business_name/settlement/:transaction_id',
    'headers': {
        'Authorization': 'Bearer :token'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});

```