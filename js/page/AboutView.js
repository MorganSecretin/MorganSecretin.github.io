import View from './View.js';

export default class AboutView extends View {
	constructor(element) {
		super(element);
		fetch('./html/about.html')
			.then(response => response.text())
			.then(responseText => this.showFileContent(responseText, '.about'));
	}
}
