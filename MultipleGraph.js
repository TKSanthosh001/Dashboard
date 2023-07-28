
var options = {
	series: [{
	name: 'BATCH 1',
	type: 'column',
	data: [100, 20, 30, 40, 100, 60, 90, 100]
  }, {
	name: 'BATCH 2',
	type: 'area',
	data:  [0, 0, 30, 40, 100, 60, 90, 100]
  }, {
	name: 'BATCH 3',
	type: 'line',
	data:  [100, 20, 30, 40, 100, 60, 90, 100]
  }],
	chart: {
	height: 350,
	type: 'line',
	stacked: false,
  },
  stroke: {
	width: [0, 2, 5],
	curve: 'smooth'
  },
  plotOptions: {
	bar: {
	  columnWidth: '50%'
	}
  },
  
  fill: {
	opacity: [0.85, 0.25, 1],
	gradient: {
	  inverseColors: false,
	  shade: 'light',
	  type: "vertical",
	  opacityFrom: 0.85,
	  opacityTo: 0.55,
	  stops: [0, 100, 100, 100]
	}
  },
  labels: ['ServerReady','Data Download','Activation','Attendence','In-completed','Batch clouser','Dump status','clear QP'],
  markers: {
	size: 0
  },
  xaxis: {
	
  },
  yaxis: {
	max:100,
	title: {
	  text: 'completion percentage',
	},
	min: 0
  },
  tooltip: {
	shared: true,
	intersect: false,
	y: {
	  formatter: function (y) {
		if (typeof y !== "undefined") {
		  return y.toFixed(0) + " % ";
		}
		return y;
  
	  }
	}
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


