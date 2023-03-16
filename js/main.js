import Router from './page/Router.js';
import ToogleHeaderButton from './ToggleHeaderButton.js';
import WelcomeView from './page/WelcomeView.js';
import AboutView from './page/AboutView.js';
import SkillsView from './page/SkillsView.js';
import CareerView from './page/CareerView.js';
import ProjectsView from './page/ProjectsView.js';
import ContactView from './page/ContactView.js';

/* INIT */
const header = document.querySelector('body>header');
const toogleHeaderButton = new ToogleHeaderButton(header);

fetch('./html/welcome.html')
	.then(response => response.text())
	.then(responseText => showFileContent(responseText, '.welcome'));

fetch('./html/about.html')
	.then(response => response.text())
	.then(responseText => showFileContent(responseText, '.about'));

fetch('./html/skills.html')
	.then(response => response.text())
	.then(responseText => showFileContent(responseText, '.skills'));

function showFileContent(html, element) {
	document.querySelector(element).innerHTML = html;
}

// Creation différentes des vues du site
const welcomeView = new WelcomeView(document.querySelector('.welcome')),
	aboutView = new AboutView(document.querySelector('.about')),
	skillsView = new SkillsView(document.querySelector('.skills')),
	careerView = new CareerView(document.querySelector('.career')),
	projectsView = new ProjectsView(document.querySelector('.projects')),
	contactView = new ContactView(document.querySelector('.contact'));

// mise en place du Router
const routes = [
	{ path: '/', view: welcomeView },
	{ path: '/welcome', view: welcomeView },
	{ path: '/about', view: aboutView },
	{ path: '/skills', view: skillsView },
	{ path: '/career', view: careerView },
	{ path: '/projects', view: projectsView },
	{ path: '/contact', view: contactView },
];
Router.routes = routes;

// gestion des liens du menu (détection du clic et activation/désactivation)
Router.setMenuElement(document.querySelector('body>header nav'));

// chargement de la vue initiale selon l"URL demandée par l"utilisateur.rice (Deep linking)
Router.navigate('/welcome', true);

console.log('Tout Fonctionne');
