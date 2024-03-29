import data from '../data.js';

export default class Router {
	static routes = [];
	static currentRoute;
	static currentMenu;

	static #menuElement;

	static setMenuElement(menuElement) {
		this.#menuElement = menuElement;

		const menuLinks = this.#menuElement.querySelectorAll('a');
		menuLinks.forEach(link =>
			link.addEventListener('click', event => {
				event.preventDefault();

				const linkHref = event.currentTarget.getAttribute('href');
				if (this.currentMenu) {
					this.currentMenu.classList.remove('active');
				}
				this.currentMenu = event.currentTarget;
				this.currentMenu.classList.add('active');
				Router.navigate(linkHref);
			})
		);
	}

	static navigate(path) {
		const route = this.routes.find(route => {
			return route.path == path;
		});

		if (route) {
			// on masque la vue précédente
			if (this.currentRoute) {
				this.currentRoute.view.hide();
			}
			this.currentRoute = route;

			// Affichage des details d'un projet
			if (route.path == '/details') {
				route.view.renderProjectDetails();
			}
			// on désactive les détails des projets
			else if (route.path == '/projects') {
				data.forEach(project => {
					project.active = false;
				});
			}

			// on affiche la nouvelle vue
			route.view.show();
		}

		// on retourne en haut de la page
		window.scrollTo(0, 0);
	}
}
