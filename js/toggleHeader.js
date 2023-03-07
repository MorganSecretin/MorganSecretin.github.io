export default function toggleHeader(event) {
	event.preventDefault();

	document.querySelectorAll('.openHeader, .closeHeader').forEach(button => {
		button.classList.remove('hide');
		button.classList.add('show');
	});

	event.currentTarget.classList.remove('show');
	event.currentTarget.classList.add('hide');
}
