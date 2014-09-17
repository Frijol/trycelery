var config = require('./config.json');

var request = require('request');

// All requests expect these headers
var headers = {
  "Content-Type": "",
  "Accept": "application/" + config.datatype, //json or xml
  "Authorization": config.token
};

var baseURL = "https://api.trycelery.com"; // Base URL
var URLs = {
  
}

// Sample error response
// {
//     "meta": {
//         "code": 409,
//         "error": {
//            "code": 409,
//            "message": "User with email already exists."
//          }
//     },
//     "data": "User with email already exists."
// }

// Sample response
// {
//     "meta": {
//         "code": 200,
//         "paging": {
//             "total": 45,
//             "count": 10,
//             "offset": 5,
//             "limit": 10,
//             "has_more": true
//         }
//     },
//     "data": [
//         {
//             ...
//         }
//     ]
// }
