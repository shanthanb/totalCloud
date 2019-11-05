// Objective 1. On page load make xhr call and download

// testurl = 'https://jsonplaceholder.typicode.com/todos/1';
totalCloudURL = 'https://totalcloud-static.s3.amazonaws.com/intern.json';
var getInterData = (totalCloudURL) => {
	let xhr = new XMLHttpRequest();
	method = 'GET';
	xhr.responseType = 'json';
	xhr.open(method, url, true);
	xhr.send();

	xhr.onerror = () => {
		alert('Network Error or CORS issue encountered');
	};

	xhr.onload = () => {
		internJSONdata = JSON.stringify(xhr.response);
		alert(internJSONdata);
	};
};
// getInterData(totalCloudURL);
// The sever of the link provided doesn't have CORS facility, so dynamic downloading of intern data won't work with your link.
// Try installing CORS on your server, the above function will be able easily download the dynamic data

// Objective 2. Convert into suitable data structure and Objective 3. render a table like image below

let canvas = document.getElementById('myChart');
let ctx = canvas.getContext('2d');
let busyDays = [];

let horizonalLinePlugin = {
	afterDraw: function(chartInstance) {
		let xScale = chartInstance.scales['x-axis-0'];
		// var yScale = chartInstance.scales['y-axis-0'];
		let canvas = chartInstance.chart;
		let ctx = canvas.ctx;
		let index;
		let line;
		let style;
		let startValue;
		let endValue;
		let position = 55;

		//accessing options
		if (chartInstance.options.horizontalLine) {
			for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
				line = chartInstance.options.horizontalLine[index];

				//using id to generate position for allotment
				let id = line.id;
				function updatePostion(id, index) {
					if (id == index + 1) {
						position += 40;
					}
				}
				updatePostion(id, index);

				let start = line.start.toString();
				function getStart() {
					start = Number(start.slice(0, 2));
				}
				getStart();

				let end = line.end.toString();
				function getEnd() {
					end = Number(end.slice(0, 2));
				}
				getEnd();

				if (!line.style) {
					style = '#e57373';
				} else {
					style = line.style;
				}

				if (line.start) {
					startValue = xScale.getPixelForValue(start);
				} else {
					startValue = 0;
				}

				if (line.end) {
					endValue = xScale.getPixelForValue(end);
				} else {
					endValue = 0;
				}

				var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				let offsetw = 1.5 / 100 * w;
				console.log(offsetw);
				ctx.lineWidth = 20;
				if (true) {
					ctx.beginPath();
					ctx.moveTo(startValue - offsetw, position);
					ctx.lineTo(endValue - offsetw + 2 * offsetw, position);
					ctx.strokeStyle = style;
					ctx.stroke();
				}

				if (line.name) {
					ctx.fillStyle = style;
					ctx.fillText(line.name, endValue, position + ctx.lineWidth);
				}
			}
		}
	}
};
Chart.pluginService.register(horizonalLinePlugin);

//days of the month
days = [];
for (i = 1; i <= 30; i++) {
	days.push(i);
}
days.push(1);
days.push(2);

var data = {
	labels: days,
	datasets: [
		{
			label: 'September 2019',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(61, 193, 211, 1)',
			borderColor: 'rgba(61, 193, 211, 1.0)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: []
		}
	]
};

var myChart = new Chart(ctx, {
	type: 'bar',
	data: data,
	options: {
		legend: {
			labels: {
				boxWidth: 0,
				color: 'black'
			}
		},

		/* 
Using hardcoded internJSONdata because CORS is not installed on the server of the link provided for downloading 
intern data which is an issue from your side, But Still i have already written the function for xhr call in objective 1 for your reference.
*/
		horizontalLine: [
			{
				id: 1,
				name: 'Shubham',
				start: '01/09/2019',
				end: '07/09/2019'
			},
			{
				id: 2,
				name: 'Shubham',
				start: '26/09/2019',
				end: '28/09/2019'
			},
			{
				id: 3,
				name: 'Vivek',
				start: '09/09/2019',
				end: '12/09/2019'
			},
			{
				id: 4,
				name: 'Priya',
				start: '10/09/2019',
				end: '12/09/2019'
			},
			{
				id: 5,
				name: 'Rohan',
				start: '17/09/2019',
				end: '19/09/2019'
			},
			{
				id: 6,
				name: 'Rohan',
				start: '27/09/2019',
				end: '29/09/2019'
			},
			{
				id: 7,
				name: 'Swati',
				start: '13/09/2019',
				end: '14/09/2019'
			},
			{
				id: 8,
				name: 'Swati',
				start: '29/09/2019',
				end: '29/09/2019'
			},
			{
				id: 9,
				name: 'prakash',
				start: '03/09/2019',
				end: '07/09/2019'
			},
			{
				id: 10,
				name: 'abhishek',
				start: '11/09/2019',
				end: '11/09/2019'
			},
			{
				id: 11,
				name: 'Pradeep',
				start: '09/09/2019',
				end: '13/09/2019'
			},
			{
				id: 12,
				name: 'Pradeep',
				start: '28/09/2019',
				end: '28/09/2019'
			},
			{
				id: 13,
				name: 'suhas',
				start: '20/09/2019',
				end: '23/09/2019'
			},
			{
				id: 14,
				name: 'Vishnu',
				start: '25/09/2019',
				end: '27/09/2019'
			},
			{
				id: 15,
				name: 'neha',
				start: '25/09/2019',
				end: '28/09/2019'
			}
		],

		scales: {
			xAxes: [
				{
					position: 'top'
				}
			],
			yAxes: [
				{
					ticks: {
						display: false
					},
					gridLines: false
				}
			]
		},
		responsive: true,
		maintainAspectRatio: true
	}
});

// Objective 4: On a button click “Check Availability” , highlight the intervals where everyone is available.

allotedDays = () => {
	totalInterns = myChart.options.horizontalLine.length;
	allotedDays = [];
	for (i = 0; i < totalInterns; i++) {
		startDay = Number(myChart.options.horizontalLine[i].start.slice(0, 2));
		endDay = Number(myChart.options.horizontalLine[i].end.slice(0, 2));
		for (j = startDay; j <= endDay; j++) {
			allotedDays.push(j);
		}
	}
	removeDulicates = () => {
		noDuplicates = [];
		for (i = 0; i < allotedDays.length; i++) {
			if (noDuplicates.indexOf(allotedDays[i]) === -1) noDuplicates.push(allotedDays[i]);
		}
		allotedDays = noDuplicates;
	};
	removeDulicates();
	return allotedDays;
};

availableDays = () => {
	availability = [];
	let ad = allotedDays();
	for (i = 1; i < 30; i++) {
		if (ad.indexOf(i) === -1) {
			availability.push(i);
		}
	}
	return availability;
};

// console.log(availableDays());

function checkAvaibility(myChart, vacantDays) {
	myChart.data.datasets.forEach((dataset) => {
		temp = [];
		for (i = 0; i < 31; i++) {
			temp.push(0);
		}
		//inserting element at specific index
		for (i = 0; i < vacantDays.length; i++) {
			temp.splice(vacantDays[i] - 1, 0, 30);
		}
		dataset.data = temp;
	});
	myChart.update();
}

let checkButton = document.querySelector('#checkButton');
checkButton.addEventListener('click', () => {
	checkAvaibility(myChart, availableDays());
});
