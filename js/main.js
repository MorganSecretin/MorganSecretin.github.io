import ProjetListView from './ProjetListView.js';
import ToogleHeaderButton from './ToggleHeaderButton.js';

/* INIT */
const header = document.querySelector('body>header');
const toogleHeaderButton = new ToogleHeaderButton(header);

fetch('./html/welcome.html')
	.then(response => response.text())
	.then(responseText => showFileContent(responseText, '.welcome'));

function showFileContent(html, element) {
	document.querySelector(element).innerHTML = html;
}

console.log('Tout Fonctionne');
