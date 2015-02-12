var bookshelf = require('../db').bookshelf;
var adsMapper = require('./mappers/ads-mapper');
var uuid = require('node-uuid');
var adsModel = bookshelf.Model.extend({
    tableName: 'ads',
    defaults: function(){
        var body = {};
        body.id = uuid.v4();
        body.created_at = new Date();
        body.updated_at = new Date();
        return body;
    },
    format: function(attrs){
        return adsMapper.mapData(attrs);
    }
});

var adsCollection = bookshelf.Collection.extend({
    model: adsModel
});

module.exports.model = adsModel;
module.exports.collection = adsCollection;