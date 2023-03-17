import View from './View.js';

export default class SkillsView extends View {
	constructor(element) {
		super(element);
		fetch('./html/skills.html')
			.then(response => response.text())
			.then(responseText => this.showFileContent(responseText, '.skills'));
	}
}
