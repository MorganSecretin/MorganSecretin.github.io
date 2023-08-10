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
			});
	}

	renderProjectDetails() {
		data.forEach(project => {
			if (project.active == true) {
				let linkFirst = '';
				if (project.link.length > 0) {
					linkFirst = 'Lien :';
				}

				this.element.querySelector('h2').innerHTML =
					project.title + ' (' + project.type.description + ')';
				this.element.querySelector('img').src = project.imgUrl;
				this.element.querySelector('.linkFirst').innerHTML = linkFirst;
				this.element.querySelector('.linkDetails').href = project.link;
				this.element.querySelector('.linkDetails').innerHTML =
					project.titleLink;
				this.element.querySelector('p').innerHTML = project.bigDescription;

				this.initButton();
				this.initList(project);
			}
		});
	}

	initButton() {
		const back = this.element.querySelector('.backFromDetails');
		back.addEventListener('click', event => {
			event.preventDefault();

			// Changement page
			Router.navigate('/projects');
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
