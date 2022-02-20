import truncateText from './truncateText.js';
import timeSince from './timeSince.js';

// generate post data to HTML as a card
export function generatePostHtml(post) {
    const creationTime = new Date(post.created_utc * 1000);
    const image = post.preview ? post.preview.images[0].source.url : null;
    const postAsHtml = `
        <div class="card">
            ${image ? `<img src="${image}" class="card-img-top" alt="no-image">` : ''}
            <div class="card-body">
                <a href="${post.url}" target="_blank" class="btn btn-info btn-sm">${linkIcon}</a>
                <h5 class="card-title d-inline ml-1">${post.title}</h5>
                <p class="card-text">${truncateText(post.selftext, 100)}</p>
                <span class="badge badge-info">🡡 Upvotes: ${post.score}</span>                             
            </div>
            <div class="card-footer">
                <small class="text-muted">Posted ${timeSince(creationTime)} by ${post.author}</small>
            </div>
        </div>
    `;
    return postAsHtml;
};

// link svg icon
const linkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>`;