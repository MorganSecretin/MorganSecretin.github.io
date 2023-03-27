import renderProjectThumbnail from '../renderProjectThumbnail.js';
import data from '../data.js';
import View from './View.js';

export default class ProjectsView extends View {
	searchForm;

	constructor(element) {
		super(element);
		fetch('./html/projects.html')
			.then(response => response.text())
			.then(responseText =>
				this.showFileContentAndProjects(responseText, '.projects')
			);

		// ajout de la liste des types dans l'html
		//this.searchForm.querySelector('#select_types').innerHTML = this.setTypes();
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

	renderProjectList(types = '', search = '', ordering) {
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
			.filter(project =>
				project.type.toLowerCase().includes(types.toLowerCase())
			) // type
			.sort(sortingFunction) // tri
			.forEach((project, index) => {
				if (index % 2 == 0) {
					html += '<div class="project_duo">';
					html += renderProjectThumbnail(project);
				} else {
					html += renderProjectThumbnail(project);
					html += '</div>';
				}
			}); // génération du HTML

		// maj de la page HTML
		this.element.querySelector('.result').innerHTML = html;
	}

	handleSearchFormSubmit(event) {
		event.preventDefault();
		const searchInput = this.searchForm.querySelector('[name=search]'),
			orderingSelect = this.searchForm.querySelector('[name=ordering]'),
			typesSelect = this.searchForm.querySelector('[name=types]');

		this.renderProjectList(
			typesSelect.value,
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
