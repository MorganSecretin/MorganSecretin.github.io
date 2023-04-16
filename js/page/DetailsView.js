import View from './View.js';
import data from '../data.js';
import Router from './Router.js';

export default class DetailsView extends View {
	constructor(element) {
		super(element);
		fetch('./html/details.html')
			.then(response => response.text())
			.then(responseText => {
				this.showFileContent(responseText);
				// TEMPO
				Router.navigate('/details');
			});
	}

	renderProjectDetails() {
		data.forEach(project => {
			if (project.active == true) {
				this.element.querySelector('h2').innerHTML = project.title;
				this.element.querySelector('img').src = project.imgUrl;
				this.element.querySelector('a').href = project.link;
				this.element.querySelector('a').innerHTML = project.titleLink;
				this.element.querySelector('p').innerHTML = project.bigDescription;

				this.initList(project);
			}
		});
	}

	initList(project) {
		// Technos
		let html = '';
		project.technos.split(' ').forEach(techno => {
			html += `
			<li>
				${techno}
			</li>`;
		});
		this.element.querySelector('.techUsed').innerHTML = html;

		// Skills
		html = '';
		project.skills.split(' ').forEach(skill => {
			html += `
			<li>
				${skill.replaceAll('-', ' ')}
			</li>`;
		});
		this.element.querySelector('.gainSkills').innerHTML = html;
	}
}
