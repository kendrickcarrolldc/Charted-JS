// Creating Chart

function createChart(data) {

	return AmCharts.makeChart("chartdiv", {
		"type": "serial",
		"theme": "chalk",
		"dataProvider": data,
		"valueAxes": [{
			"gridAlpha": 0.07,
			"position": "left",
			"title": "Voted Most Dependable"
    }],
		"graphs": [{
			"balloonText": "[[category]]: <b>[[value]]</b>",
			"fillAlphas": 0.8,
			"lineAlpha": 0.2,
			"type": "column",
			"valueField": "ford"
    }, {
			"balloonText": "[[category]]: <b>[[value]]</b>",
			"fillAlphas": 0.8,
			"lineAlpha": 0.2,
			"type": "column",
			"valueField": "honda"
    }, {
			"balloonText": "[[category]]: <b>[[value]]</b>",
			"fillAlphas": 0.8,
			"lineAlpha": 0.2,
			"type": "column",
			"valueField": "audi"
    }],
		"chartCursor": {},
		"categoryField": "year",
		"categoryAxis": {
			"gridPosition": "start",
			"gridAlpha": 0,
			"tickPosition": "start",
			"tickLength": 20
		}
	});

}


var data = [

  [2010, 81, 210, 90],
  [2011, 81, 232, 75],
  [2012, 81, 219, 88],
  [2013, 300, 201, 82],
  [2014, 599, 285, 87],
  [2015, 390, 277, 71]
];

//Chart Creation and functionality

AmCharts.ready(function () {

	var container = document.getElementById("data");
	var chart;

	var hot = new Handsontable(container, {
		data: data,
		height: 234,
//		title: "Voted Most Dependable",
		colHeaders: true,
		rowHeaders: true,
		stretchH: 'all',
		columnSorting: true,
		colHeaders: ["Year", "Ford", "Honda", "Audi"],
		contextMenu: true,
		afterInit: function (firstTime) {
			chart = createChart(
				transormChartData(this.getData())
			);
		},
		afterChange: function (changes, source) {
			if (changes === null)
				return;
			chart.dataProvider = transormChartData(this.getData());
			chart.validateData();
		}

	});

	function transormChartData(Htable) {
		var chartData = [];
		for (var i = 0; i < Htable.length; i++) {
			//chartData will the updated data to whatever input field you're in and push to array
			chartData.push({
				year: Htable[i][0],
				ford: Htable[i][1],
				honda: Htable[i][2],
				audi: Htable[i][3]
			});
		}
		return chartData;
	}

});