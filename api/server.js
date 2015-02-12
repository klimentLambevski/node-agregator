var adsController = require('./controllers/ads-controller');
var pazar3Aggregator = require('./agregator/pazar3-agregator');

var collection = [{
    name:'test1',
    outer_id: '34543'
},{
    name:'test2',
    outer_id: '11134543'
}];

pazar3Aggregator.run();