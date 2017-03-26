module.exports = function(aaaa,config, callback){

	var datasets=[];
	for(var i in aaaa) {
		var dataset = {};
		dataset.label=aaaa[i].name;
		dataset.borderColor=config.colors[i];
		dataset.backgroundColor=config.colors[i];
		dataset.fill=false;

		var data_=[];
		for(var j in aaaa[i].data){
			data_.push({x:(aaaa[i].data[j][0]-60*60*9*1000) ,y:aaaa[i].data[j][1]});
		}
		dataset.data=data_;
		datasets.push(dataset);
	}
	config.data.datasets=datasets;

	if (typeof callback === "function") { callback(config); }
}
