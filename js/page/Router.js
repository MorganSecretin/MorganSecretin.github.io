export default class Router {
	static routes = [];
	static currentRoute;

	static #menuElement;

	static setMenuElement(menuElement) {
		this.#menuElement = menuElement;

		const menuLinks = this.#menuElement.querySelectorAll('a');
		menuLinks.forEach(link =>
			link.addEventListener('click', event => {
				event.preventDefault();

				const linkHref = event.currentTarget.getAttribute('href');
				Router.navigate(linkHref);
			})
		);
	}

	static navigate(path, skipPushState = false) {
		const route = this.routes.find(route => {
			return route.path == path;
		});

		if (route) {
			// on masque la vue précédente
			if (this.currentRoute) {
				this.currentRoute.view.hide();
			}
			this.currentRoute = route;

			// on affiche la nouvelle vue
			route.view.show();
		}
	}
}
