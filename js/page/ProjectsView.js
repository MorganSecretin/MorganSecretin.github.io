import renderProjectThumbnail from '../renderProjectThumbnail.js';
import data from '../data.js';
import View from './View.js';
import Router from './Router.js';

export default class ProjectsView extends View {
	constructor(element) {
		super(element);

		fetch('./html/projects.html')
			.then(response => response.text())
			.then(responseText => {
				this.showFileContentAndProjects(responseText);
				this.initDetailsLinks();
				window.addEventListener('resize', event => {
					this.chooseAnimation();
				});
				//this.initFilterToggler();
			});
	}

	initDetailsLinks() {
		const listLink = this.element.querySelectorAll('.project_div');
		listLink.forEach(projectHTML => {
			const link = projectHTML.querySelector('.project_div_text>a');
			link.addEventListener('click', event => {
				event.preventDefault();

				// Activation du bon projet
				data.forEach(project => {
					if (
						project.title.replaceAll(' ', '-') == link.className.split(' ')[0]
					) {
						project.active = true;
					}
				});

				// Changement page
				Router.navigate('/details');
			});
		});
	}

	initFilterToggler() {
		const filterToggler = this.element.querySelector('.minimum>h4');
		filterToggler.addEventListener('click', event => {
			const filter = this.element.querySelector('.filter');
			if (!filter.classList.contains('hide')) {
				filter.classList.add('hide');
			} else {
				filter.classList.remove('hide');
			}
		});
	}

	chooseAnimation() {
		if (window.innerWidth > 500) {
			this.element.querySelectorAll('.project_div').forEach(projectDiv => {
				const divText = projectDiv.querySelector('.project_div_text');
				const img = projectDiv.querySelector('.project_img');

				divText.classList.add('hideSlow');
				projectDiv.addEventListener('mouseover', event => {
					if (window.screen.width > 500) {
						divText.classList.remove('hideSlow');
						divText.classList.add('showSlow');
					}
				});
				projectDiv.addEventListener('mouseout', event => {
					if (window.screen.width > 500) {
						divText.classList.remove('showSlow');
						divText.classList.add('hideSlow');
					}
				});
			});
		} else {
			this.element.querySelectorAll('.project_div').forEach(projectDiv => {
				const divText = projectDiv.querySelector('.project_div_text');

				projectDiv.addEventListener('mouseover', event => { });
				projectDiv.addEventListener('mouseout', event => { });
				divText.classList.remove('hideSlow');
				divText.classList.remove('showSlow');
			});
		}
	}

	showFileContentAndProjects(html) {
		this.showFileContent(html);
		this.renderProjectList();

		// détection de la soumission du formulaire de recherche
		/*this.searchForm = this.element.querySelector('.searchForm');
		this.searchForm.addEventListener('submit', event =>
			this.handleSearchFormSubmit(event)
		);*/
	}

	renderProjectList(
		technos = '',
		languages = '',
		apps = '',
		others = '',
		search = '',
		ordering
	) {
		// calcul de la fonction de tri selon le paramètre ordering
		/*let sortingFunction;
		if (ordering == '-dateDown') {
			sortingFunction = (a, b) => b.date.localeCompare(a.date);
		} else if (ordering == '-dateUp') {
			sortingFunction = (a, b) => a.date.localeCompare(b.date);
		}

		*/
		// parcours du tableau + génération du code HTML de la projectList
		let html = '';
		/*
				data
					.filter(project =>
						project.title.toLowerCase().includes(search.toLowerCase())
					) // recherche
					.filter(project => {
						let valid = false;
						technos.split(' ').forEach(techno => {
							if (project.technos.toLowerCase().includes(techno.toLowerCase())) {
								valid = true;
							}
						});
						return valid;
					}) // type
					.filter(project => {
						let valid = false;
						languages.split(' ').forEach(language => {
							if (project.technos.toLowerCase().includes(language.toLowerCase())) {
								valid = true;
							}
						});
						return valid;
					}) // langage
					.filter(project => {
						let valid = false;
						apps.split(' ').forEach(app => {
							if (project.technos.toLowerCase().includes(app.toLowerCase())) {
								valid = true;
							}
						});
						return valid;
					}) // app
					.filter(project => {
						let valid = false;
						others.split(' ').forEach(other => {
							if (project.technos.toLowerCase().includes(other.toLowerCase())) {
								valid = true;
							}
						});
						return valid;
					}) // other
					.sort(sortingFunction); // tri
					*/
		let pair = true;

		data.forEach(project => {
			if (pair) {
				html += '<div class="doubleProject">' + renderProjectThumbnail(project);
			} else {
				html += renderProjectThumbnail(project) + '</div>';
			}
			pair = !pair;
		}); // génération du HTML

		// maj de la page HTML
		this.element.querySelector('.result').innerHTML = html;

		// Reset des animations
		this.chooseAnimation();
	}

	/*handleSearchFormSubmit(event) {
		event.preventDefault();
		const searchInput = this.searchForm.querySelector('[name=search]'),
			orderingSelect = this.searchForm.querySelector('[name=ordering]'),
			checkboxType = this.searchForm.querySelectorAll('.checkboxType'),
			checkboxLanguages = this.searchForm.querySelectorAll('.checkboxLanguage'),
			checkboxApps = this.searchForm.querySelectorAll('.checkboxApp'),
			checkboxOthers = this.searchForm.querySelectorAll('.checkboxOther');

		let technos = '';
		checkboxType.forEach(typeCheckbox => {
			if (typeCheckbox.checked) {
				technos += typeCheckbox.name + ' ';
			}
		});
		let languages = '';
		checkboxLanguages.forEach(languageCheckbox => {
			if (languageCheckbox.checked) {
				languages += languageCheckbox.name + ' ';
			}
		});
		let apps = '';
		checkboxApps.forEach(appCheckbox => {
			if (appCheckbox.checked) {
				apps += appCheckbox.name + ' ';
			}
		});
		let others = '';
		checkboxOthers.forEach(otherCheckbox => {
			if (otherCheckbox.checked) {
				others += otherCheckbox.name + ' ';
			}
		});

		this.renderProjectList(
			technos.substring(0, technos.length - 1),
			languages.substring(0, languages.length - 1),
			apps.substring(0, apps.length - 1),
			others.substring(0, others.length - 1),
			searchInput.value,
			orderingSelect.value
		);
	}

	setTypes() {
		let listTechnos = '';
		data.forEach(project => {
			project.active = false;

			// récupération de tout les types d'un projet
			const technosString = project.technos.split(' ');
			technosString.forEach(techno => {
				// ajoute si n'existe pas
				if (!listTechnos.toLowerCase().includes(techno.toLowerCase())) {
					listTechnos = listTechnos + ' ' + techno;
				}
			});
		});

		// Creation de l'html
		return listTechnos
			.split(' ')
			.forEach(techno => this.renderTechnoOption(techno));
	}

	renderTechnoOption(techno) {
		return `
		<option value="${techno}">${techno}</option>
		`;
}*/
}
