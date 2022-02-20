// search for searchTerm subreddit, sending GET request through reddit API
export function search(searchTerm, sortBy, searchLimit) {
	return fetch(`https://www.reddit.com/r/${searchTerm}/${sortBy}/.json?limit=${searchLimit}`)
		.then(res => res.json())
		.then(data => data.data.children.map(data => data.data))
		.catch(err => console.log(err));
}
