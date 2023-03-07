```js 
var request = require('request');
var options = {
    'method': 'DELETE',
    'url': 'https://api.vandar.io/v2/business/:business/customers/:customer_uuid',
    'headers': {
        'Authorization': 'Bearer :token'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
```