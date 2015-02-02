var adsController = require('./controllers/ads-controller');

var collection = [{
    name:'test1',
    outer_id: '34543'
},{
    name:'test2',
    outer_id: '11134543'
}];

adsController.saveCollection(collection);