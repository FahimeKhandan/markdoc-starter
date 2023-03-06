```js towslash
var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://batch.vandar.io/api/v2/business/:business/batch-settlements/:batch_id',
    'headers': {
        'Authorization': 'Bearer :token'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
```