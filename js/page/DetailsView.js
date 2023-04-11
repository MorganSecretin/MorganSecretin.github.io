import View from './View.js';
import data from '../data.js';

export default class DetailsView extends View {
	constructor(element) {
		super(element);
		fetch('./html/details.html')
			.then(response => response.text())
			.then(responseText => this.showFileContent(responseText));
	}

	renderProjectDetails() {
		data.forEach(project => {
			if (project.active == true) {
				this.element.querySelector('h2').innerHTML = project.title;
				this.element.querySelector('img').src = project.imgUrl;
				this.element.querySelector('a').href = project.link;
				this.element.querySelector('a').innerHTML = project.titleLink;
				this.element.querySelector('.description').innerHTML =
					project.bigDescription;

				this.initList();
			}
		});
	}

	initList() {
		let htmlCompetence = this.element.querySelector('.description');
	}
}
