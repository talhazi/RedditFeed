import { search } from './redditAPI.js';
import { generatePostHtml } from './Post.js';
import alertMsg from './alertMsg.js';
import loadingSpinner from './loadingSpinner.mjs';

const searchForm = document.getElementById('search-form');
// form event listener
searchForm.addEventListener('submit', async e => {
	e.preventDefault();

	// get the search params
	const searchTerm = e.target.elements.searchInput.value;
	const sortBy = e.target.elements.sortby.value;
	const searchLimit = e.target.elements.limit.value;

	// handling empty stringTerm case
	if (!searchTerm) {
		return alertMsg('Please add a Subreddit to search', 'alert-danger');
	}
	
	// search subreddit, sending GET request through reddit API
	try {
		const results = document.getElementById('results');
		// show loading spinner
		results.innerHTML = loadingSpinner();
		// get posts
		const posts = await search(searchTerm, sortBy, searchLimit);
		let allPostsAsHtml = '<div class="card-columns">';
		posts.forEach(post => (allPostsAsHtml += generatePostHtml(post)));
		allPostsAsHtml += '</div>';
		results.innerHTML = allPostsAsHtml;
		
	} catch (err) {
		// hide loading spinner
		results.innerHTML = null;
		alertMsg(
			`Sorry, didn't found the '${searchTerm}' subreddit or it's a private community`,
			'alert-danger'
		);
	}
});
