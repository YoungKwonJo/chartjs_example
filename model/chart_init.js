module.exports = function(){
	var config = {
		colors: ["#FF0000","#0000FF","#008000","#00FFFF","#800080","#FF00FF","#00FF00","#000000","#808080","#FFA500","#008080","#000080","#DDA0DD","#FFE4C4","#B0C4DE","#ffd700"],
		type: 'line',
		data: {},
		options: {
			responsive: true,
			title:{
				display:true,
				text:"온도예상"
			},
			tooltips: {
				//mode: 'label',
				callbacks: {
					label: function(tooltipItem, data) {
						return data.datasets[tooltipItem.datasetIndex].label+" : "+(Math.round(tooltipItem.yLabel*100)/100)+" °C";
					}
				}
			},
			scales: {
				xAxes: [{
					type: "time",
					display: true,
					scaleLabel: {
						display: true,
						labelString: '날짜'
					},
					unit: 'hour',
					unitStepSize: 24,
					time: {
						displayFormats: { // http://momentjs.com/docs/#/displaying/format/
							millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
							second: 'h:mm:ss a', // 11:20:01 AM
							minute: 'h:mm:ss a', // 11:20:01 AM
							hour: 'MMM D, hA', // Sept 4, 5PM
							day: 'll', // Sep 4 2015
							week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
							month: 'MMM YYYY', // Sept 2015
							quarter: '[Q]Q - YYYY', // Q3
							year: 'YYYY' // 2015
						},
						format: "YYYY MMM D, hA",
						tooltipFormat: "YYYY MMM D, hA",
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: '온도 °C'
					}
				}]
			}
		}
	};
  return config;
}
