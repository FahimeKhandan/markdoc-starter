```js 
var request = require('request');
var options = {
    'method': 'POST',
    'url': 'https://batch.vandar.io/api/v2/business/:business/batches-settlement',
    'headers': {
        'Authorization': 'Bearer :token',
    },
    body: JSON.stringify({
        "batch_id": "e94cf0682d8721dee87c9e50544a17c079a0efe1e9a2514d410a49883c82180c9967bfe9ca2afdc2fba60d57e42b87c630c3f9f73eb3edb1aaf3438b4bfe7d6f",
        "batches_settlement": [
            {
                "track_id": "c612c886-7215-416c-bb55-2cefcde40e7d",
                "iban": "IR350700001000116383322001",
                "amount": 50000,
                "payment_number": 1,
                "description": "test"
            }
        ]
    })

};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});

```