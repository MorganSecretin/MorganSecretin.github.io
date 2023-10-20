import Router from './page/Router.js';
import ToogleHeaderButton from './ToggleHeaderButton.js';
import WelcomeView from './page/WelcomeView.js';
import AboutView from './page/AboutView.js';
import SkillsView from './page/SkillsView.js';
import CareerView from './page/CareerView.js';
import ProjectsView from './page/ProjectsView.js';
import DetailsView from './page/DetailsView.js';

/* INIT */
const header = document.querySelector('body>header');
const toogleHeaderButton = new ToogleHeaderButton(header);

// Creation différentes des vues du site
const welcomeView = new WelcomeView(document.querySelector('.welcome')),
	aboutView = new AboutView(document.querySelector('.about')),
	skillsView = new SkillsView(document.querySelector('.skills')),
	careerView = new CareerView(document.querySelector('.career')),
	projectsView = new ProjectsView(document.querySelector('.projects')),
	detailsView = new DetailsView(document.querySelector('.details'));

// mise en place du Router
const routes = [
	{ path: '/welcome', view: welcomeView },
	{ path: '/about', view: aboutView },
	{ path: '/skills', view: skillsView },
	{ path: '/career', view: careerView },
	{ path: '/projects', view: projectsView },
	{ path: '/details', view: detailsView },
];
Router.routes = routes;

// gestion des liens du menu (détection du clic et activation/désactivation)
Router.setMenuElement(document.querySelector('body>header nav'));

// Inititialisation des copier dans le press papier
var telephone = document.querySelector(".contacter_div_copy_link");
telephone.addEventListener('click', (event) => {
	event.preventDefault();
	navigator.clipboard.writeText("0644043059");
	alert("copie de 06.44.04.30.59");
});

// chargement de la vue initiale selon l"URL demandée par l"utilisateur.rice (Deep linking)
Router.navigate('/welcome');

console.log('Tout Fonctionne');
