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
				this.element.querySelector('.description>p').innerHTML =
					project.bigDescription;

				this.initList(project);
			}
		});
	}

	initList(project) {
		let description = this.element.querySelector('.description');

		let html = '';

		project.technos.split(' ').forEach(techno => {
			html += `
			<li>
				${techno}
			</li>`;
		});

		console.log(description);

		description.querySelector('.gainSkills').innerHTML = html;
	}
}
