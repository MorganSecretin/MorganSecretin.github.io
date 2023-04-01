import renderProjectThumbnail from '../renderProjectThumbnail.js';
import data from '../data.js';
import View from './View.js';

export default class ProjectsView extends View {
	constructor(element) {
		super(element);

		fetch('./html/projects.html')
			.then(response => response.text())
			.then(responseText => {
				this.showFileContentAndProjects(responseText, '.projects');
				window.addEventListener('resize', event => {
					this.chooseAnimation();
					console.log('change size');
				});
				this.initFilterToggler();
			});
	}

	initFilterToggler() {
		const filterToggler = this.element.querySelector('.minimum>h4');
		filterToggler.addEventListener('click', event => {
			console.log('click');
		});
	}

	chooseAnimation() {
		if (window.innerWidth > 500) {
			this.element.querySelectorAll('.project_div').forEach(projectDiv => {
				const divText = projectDiv.querySelector('.project_div_text');
				const img = projectDiv.querySelector('.project_img');

				divText.classList.add('hideSlow');
				projectDiv.addEventListener('mouseover', event => {
					divText.classList.remove('hideSlow');
					divText.classList.add('showSlow');
				});
				projectDiv.addEventListener('mouseout', event => {
					divText.classList.remove('showSlow');
					divText.classList.add('hideSlow');
				});
			});
		} else {
			this.element.querySelectorAll('.project_div').forEach(projectDiv => {
				const divText = projectDiv.querySelector('.project_div_text');

				projectDiv.addEventListener('mouseover', event => {});
				projectDiv.addEventListener('mouseout', event => {});
				divText.classList.remove('hideSlow');
				divText.classList.remove('showSlow');
			});
		}
	}

	showFileContentAndProjects(html, element) {
		this.showFileContent(html, element);
		this.renderProjectList();

		// détection de la soumission du formulaire de recherche
		this.searchForm = this.element.querySelector('.searchForm');
		this.searchForm.addEventListener('submit', event =>
			this.handleSearchFormSubmit(event)
		);
	}

	renderProjectList(
		types = '',
		languages = '',
		apps = '',
		others = '',
		search = '',
		ordering
	) {
		console.log(
			'1.' + types + '\n2.' + languages + '\n3.' + apps + '\n4.' + others
		);
		// calcul de la fonction de tri selon le paramètre ordering
		let sortingFunction;
		if (ordering == '-dateDown') {
			sortingFunction = (a, b) => b.date.localeCompare(a.date);
		} else if (ordering == '-dateUp') {
			sortingFunction = (a, b) => a.date.localeCompare(b.date);
		}

		// parcours du tableau + génération du code HTML de la projectList
		let html = '';
		data
			.filter(project =>
				project.title.toLowerCase().includes(search.toLowerCase())
			) // recherche
			.filter(project => {
				let valid = false;
				types.split(' ').forEach(type => {
					if (project.type.toLowerCase().includes(type.toLowerCase())) {
						valid = true;
					}
				});
				return valid;
			}) // type
			.filter(project => {
				let valid = false;
				languages.split(' ').forEach(language => {
					if (project.type.toLowerCase().includes(language.toLowerCase())) {
						valid = true;
					}
				});
				return valid;
			}) // langage
			.filter(project => {
				let valid = false;
				apps.split(' ').forEach(app => {
					if (project.type.toLowerCase().includes(app.toLowerCase())) {
						valid = true;
					}
				});
				return valid;
			}) // app
			.filter(project => {
				let valid = false;
				others.split(' ').forEach(other => {
					if (project.type.toLowerCase().includes(other.toLowerCase())) {
						valid = true;
					}
				});
				return valid;
			}) // other
			.sort(sortingFunction) // tri
			.forEach(project => {
				html += renderProjectThumbnail(project);
			}); // génération du HTML

		// maj de la page HTML
		this.element.querySelector('.result').innerHTML = html;

		// Reset des animations
		this.chooseAnimation();
	}

	handleSearchFormSubmit(event) {
		event.preventDefault();
		const searchInput = this.searchForm.querySelector('[name=search]'),
			orderingSelect = this.searchForm.querySelector('[name=ordering]'),
			checkboxTypes = this.searchForm.querySelectorAll('.checkboxType'),
			checkboxLanguages = this.searchForm.querySelectorAll('.checkboxLanguage'),
			checkboxApps = this.searchForm.querySelectorAll('.checkboxApp'),
			checkboxOthers = this.searchForm.querySelectorAll('.checkboxOther');

		let types = '';
		checkboxTypes.forEach(typeCheckbox => {
			if (typeCheckbox.checked) {
				types += typeCheckbox.name + ' ';
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
			types.substring(0, types.length - 1),
			languages.substring(0, languages.length - 1),
			apps.substring(0, apps.length - 1),
			others.substring(0, others.length - 1),
			searchInput.value,
			orderingSelect.value
		);
	}

	setTypes() {
		let listTypes = '';
		data.forEach(project => {
			// récupération de tout les types d'un projet
			const typesString = project.type.split(' ');
			typesString.forEach(type => {
				// ajoute si n'existe pas
				if (!listTypes.toLowerCase().includes(type.toLowerCase())) {
					listTypes = listTypes + ' ' + type;
				}
			});
		});

		// Creation de l'html
		return listTypes.split(' ').forEach(type => this.renderTypeOption(type));
	}

	renderTypeOption(type) {
		return `
        <option value="${type}">${type}</option>
        `;
	}
}
