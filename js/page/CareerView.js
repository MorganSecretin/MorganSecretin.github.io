import View from './View.js';

export default class CareerView extends View {
	constructor(element) {
		super(element);
		fetch('./html/career.html')
			.then(response => response.text())
			.then(responseText => this.showFileContent(responseText, '.career'));
	}
}
