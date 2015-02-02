var adsModel = require('../models/ads-model').model;
var adsCollection = require('../models/ads-model').collection;
var Promise = require('bluebird');

var adsController = {
    saveCollection: function(collection){
        var ads = adsCollection.forge(collection);
        Promise.all(ads.invoke('save')).then(function() {
            console.log('Успешно')
        },{

        });
    }
};

module.exports = adsController;