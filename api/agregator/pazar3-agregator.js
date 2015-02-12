var request = require('request');
var adsController = require('../controllers/ads-controller');

var agregator = {};

agregator.init = function () {

};

agregator.run = function () {
    request.get('http://www.pazar3.mk/mk/Listing/Home/Search?CookieLocationId=0&Location=0-%D0%A6%D0%B5%D0%BB%D0%B0-%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D0%B8%D1%98%D0%B0&Display=Pictures&Sort=DateDesc&Page=2',function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var tmpBody=JSON.parse(body);
            adsController.saveCollection(tmpBody.data.Items);
        }
    })
};

module.exports = agregator;