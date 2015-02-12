var Promise = require("bluebird");
var request = Promise.promisify(require('request'));
var adsController = require('../controllers/ads-controller');

var agregator = {};

agregator.init = function () {

};

agregator.scrape = function () {

    var currentPage = 1;

    var numAsyncRequests = 200;

    sendRequests();

    function sendRequests() {
        var promises = [];
        for (var i = currentPage; i < currentPage + numAsyncRequests; i++) {
            promises.push(scrapePages(i));
        }
        Promise.all(promises).then(function (results) {
            var moreItemsForScrape = true;
            for (var i = 0; i < results.length; i++) {
                if(results[i] && results[i].itemsArrived == 0){
                    moreItemsForScrape = false;
                }
            }
            if(moreItemsForScrape){
                currentPage+=numAsyncRequests;
                sendRequests();
                console.log(currentPage);
            } else {
                console.log('Finised');
            }
        });
    }

    function scrapePages(pageNum) {
        return request('http://www.pazar3.mk/mk/Listing/Home/Search?CookieLocationId=0&Location=0-Цела-Македонија&Sort=DateDesc&Page='+pageNum).then(function (content) {
            var tmpBody = JSON.parse(content[0].body);
            adsController.saveCollection(tmpBody.data.Items);
            return {
                itemsArrived: tmpBody.data.Items.length
            };
        })
    }

};
agregator.run = function () {
    request('http://www.pazar3.mk/mk/Listing/Home/Search?CookieLocationId=0&Location=0-Цела-Македонија&Sort=DateDesc&Page=1').then(function (content) {
        var tmpBody = JSON.parse(content[0].body);
        adsController.saveCollection(tmpBody.data.Items);
    })
};

module.exports = agregator;