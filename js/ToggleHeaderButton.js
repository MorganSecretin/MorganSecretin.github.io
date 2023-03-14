export default class ToogleHeaderButton {
	openHeader;
	closeHeader;
	navBar;

	constructor(header) {
		this.openHeader = header.querySelector('.openHeader');
		this.closeHeader = header.querySelector('.closeHeader');
		this.navBar = header.querySelector('.navBar');

		// Situation initiale
		this.windowGrow();

		// Ajout des evenement
		this.openHeader.addEventListener('click', event => {
			event.preventDefault();
			this.showNavBar();
		});
		this.closeHeader.addEventListener('click', event => {
			event.preventDefault();
			this.hideNavBar();
		});
		window.addEventListener('resize', event => {
			this.windowGrow();
		});
	}

	windowGrow() {
		if (window.innerWidth > 750) {
			this.showNavBar();
			this.closeHeader.classList.add('hide');
		} else {
			this.hideNavBar();
		}
	}

	showNavBar() {
		this.openHeader.classList.add('hide');
		this.closeHeader.classList.remove('hide');
		this.navBar.classList.remove('hide');
	}

	hideNavBar() {
		this.openHeader.classList.remove('hide');
		this.closeHeader.classList.add('hide');
		this.navBar.classList.add('hide');
	}
}
