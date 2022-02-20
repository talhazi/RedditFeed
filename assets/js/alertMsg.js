// show alert before the search card (add div)
export default(message, className) => {
	const div = document.createElement('div');
	div.className = `alert ${className}`;
	div.appendChild(document.createTextNode(message));
	const searchContainer = document.getElementById('search-container');
	const search = document.getElementById('search');
	searchContainer.insertBefore(div, search);
	// remove the message alert after 4 sec
	setTimeout(() => document.querySelector('.alert').remove(), 4000);
}