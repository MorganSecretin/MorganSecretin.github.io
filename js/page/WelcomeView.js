import View from './View.js';

export default class WelcomeView extends View {
	constructor(element) {
		super(element);
		fetch('./html/welcome.html')
			.then(response => response.text())
			.then(responseText => this.showFileContent(responseText, '.welcome'));
	}
}
