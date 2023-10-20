import View from './View.js';

export default class WelcomeView extends View {
	betweenLinesColor = 150;
	speedSpawn = 1000;
	refreshDuration = 10000;
	numPointsX;
	numPointsY;
	unitWidth;
	unitHeight;
	points;

	constructor(element) {
		super(element);
		fetch('./html/welcome.html')
			.then(response => response.text())
			.then(responseText => this.showFileContent(responseText))
			.then(() => this.onLoad());
	}

	onLoad() {
		var height = document.querySelector('.welcome').scrollHeight;
		console.log("height " + height);
		var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute('width', window.innerWidth);
		svg.setAttribute('height', height);
		document.querySelector('#bg').appendChild(svg);

		var unitSize = (window.innerWidth + height) / 20;
		this.numPointsX = Math.ceil(window.innerWidth / unitSize) + 1;
		this.numPointsY = Math.ceil(height / unitSize) + 1;
		this.unitWidth = Math.ceil(window.innerWidth / (this.numPointsX - 1));
		this.unitHeight = Math.ceil(height / (this.numPointsY - 1));

		this.points = [];

		for (var y = 0; y < this.numPointsY; y++) {
			for (var x = 0; x < this.numPointsX; x++) {
				this.points.push({ x: this.unitWidth * x, y: this.unitHeight * y, originX: this.unitWidth * x, originY: this.unitHeight * y });
			}
		}

		this.randomize();

		for (var i = 0; i < this.points.length; i++) {
			if (this.points[i].originX != this.unitWidth * (this.numPointsX - 1) && this.points[i].originY != this.unitHeight * (this.numPointsY - 1)) {
				var topLeftX = this.points[i].x;
				var topLeftY = this.points[i].y;
				var topRightX = this.points[i + 1].x;
				var topRightY = this.points[i + 1].y;
				var bottomLeftX = this.points[i + this.numPointsX].x;
				var bottomLeftY = this.points[i + this.numPointsX].y;
				var bottomRightX = this.points[i + this.numPointsX + 1].x;
				var bottomRightY = this.points[i + this.numPointsX + 1].y;

				var rando = Math.floor(Math.random() * 2);

				for (var n = 0; n < 2; n++) {
					var polygon = document.createElementNS(svg.namespaceURI, 'polygon');

					if (rando == 0) {
						if (n == 0) {
							polygon.point1 = i;
							polygon.point2 = i + this.numPointsX;
							polygon.point3 = i + this.numPointsX + 1;
							polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + bottomLeftX + ',' + bottomLeftY + ' ' + bottomRightX + ',' + bottomRightY);
						} else if (n == 1) {
							polygon.point1 = i;
							polygon.point2 = i + 1;
							polygon.point3 = i + this.numPointsX + 1;
							polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + topRightX + ',' + topRightY + ' ' + bottomRightX + ',' + bottomRightY);
						}
					} else if (rando == 1) {
						if (n == 0) {
							polygon.point1 = i;
							polygon.point2 = i + this.numPointsX;
							polygon.point3 = i + 1;
							polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + bottomLeftX + ',' + bottomLeftY + ' ' + topRightX + ',' + topRightY);
						} else if (n == 1) {
							polygon.point1 = i + this.numPointsX;
							polygon.point2 = i + 1;
							polygon.point3 = i + this.numPointsX + 1;
							polygon.setAttribute('points', bottomLeftX + ',' + bottomLeftY + ' ' + topRightX + ',' + topRightY + ' ' + bottomRightX + ',' + bottomRightY);
						}
					}
					polygon.setAttribute('fill', 'rgba(0,0,255,' + (Math.random() / 5) + ')');
					polygon.setAttribute('stroke', `rgba(${this.betweenLinesColor},${this.betweenLinesColor},${this.betweenLinesColor},` + (Math.random() / 1) + ')');
					var animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
					animate.setAttribute('fill', 'freeze');
					animate.setAttribute('attributeName', 'points');
					animate.setAttribute('dur', this.refreshDuration + 'ms');
					animate.setAttribute('calcMode', 'linear');
					polygon.appendChild(animate);
					svg.appendChild(polygon);
				}
			}
		}
		var ktmp;
		var k;
		setInterval(function () {
			var j = document.querySelector('#bg svg').childNodes.length;
			ktmp = k;
			k = parseInt(j * Math.random());
			var polygon0 = document.querySelector('#bg svg').childNodes[ktmp];
			var polygon1 = document.querySelector('#bg svg').childNodes[k];
			var tmp = polygon1.getAttribute('fill');
			if (polygon0) polygon0.setAttribute('fill', tmp);
			else console.log(`pol${ktmp} not found`);
			if (polygon1) polygon1.setAttribute('fill', 'rgba(255,255,255,.7)');
			else console.log(`pol${k} not found`);
		}
			, this.speedSpawn);
	}

	randomize() {
		for (var i = 0; i < this.points.length; i++) {
			if (this.points[i].originX != 0 && this.points[i].originX != this.unitWidth * (this.numPointsX - 1)) {
				this.points[i].x = this.points[i].originX + Math.random() * this.unitWidth - this.unitWidth / 2;
			}
			if (this.points[i].originY != 0 && this.points[i].originY != this.unitHeight * (this.numPointsY - 1)) {
				this.points[i].y = this.points[i].originY + Math.random() * this.unitHeight - this.unitHeight / 2;
			}
		}
	}
}
