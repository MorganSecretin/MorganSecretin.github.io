import ProjetListView from './ProjetListView.js';
import toggleHeader from './toggleHeader.js';

const toggleHeaderButton = document.querySelectorAll(
	'.openHeader, .closeHeader'
);
toggleHeaderButton.forEach(button =>
	button.addEventListener('click', toggleHeader)
);

window.addEventListener('resize', WindowGrow);

function WindowGrow(event) {
	if (window.innerWidth > 919) {
		document.querySelectorAll('.openHeader, .closeHeader').forEach(button => {
			button.classList.remove('show');
			button.classList.add('hide');
		});
	} else {
		document.querySelectorAll('.openHeader').forEach(button => {
			button.classList.remove('hide');
			button.classList.add('show');
		});
		document.querySelectorAll('.closeHeader').forEach(button => {
			button.classList.remove('show');
			button.classList.add('hide');
		});
	}
}

//const projectListView = new ProjetListView(document.querySelector('#projets'));

console.log('Tout Fonctionne');
