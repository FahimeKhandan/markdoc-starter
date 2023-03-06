```js towslash
var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': '/api/v1/tickets',
  'headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  formData: {
    'description': 'توضیحات مربوط به شکایت',
    'ticket_type_slug': 'dont_access_to_seller',
    'attachments[]': {
      'value': ('/path/to/file'),
      'options': {
        'filename': 'filename',
        'contentType': ""
      }
    },
    'agreement_tracking_code': '1005544572',
    'reporter_mobile': '09123456789',
    'redirect_url': 'http://redirect.url',
    'application_slug': 'your_application_slug'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```