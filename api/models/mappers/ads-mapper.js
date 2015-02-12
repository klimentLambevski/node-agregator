var adsMapper = {};

adsMapper.mapData = function(data){
    var adobj = {};
    adobj.outer_id = data.outer_id || data.Id;
    adobj.id = data.id;
    adobj.title = data.title || data.Title;
    adobj.latitude = data.latitude || data.MapAltitude;
    adobj.longitude = data.longitude || data.MapLongtitude;
    return adobj;
};
module.exports = adsMapper;