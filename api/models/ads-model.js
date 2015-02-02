var bookshelf = require('../db').bookshelf;
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
        console.log(attrs);
        return attrs;
    }
});

var adsCollection = bookshelf.Collection.extend({
    model: adsModel
});

module.exports.model = adsModel;
module.exports.collection = adsCollection;