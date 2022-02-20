import { dirname } from 'path';
import { fileURLToPath } from 'url';
import ejsMate from 'ejs-mate';

import express from 'express';
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;

// set views directroy and default extention
app.engine('ejs', ejsMate);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// serve static files
app.use(express.static(__dirname + '/assets'));

// root route
app.get('/', (req, res) => {
	res.render('index', { title: 'Reddit Feed' });
});

//404 - catches ANY request a route is not available for: GET, POST DELETE etc
app.all('*', (req, res) => {
	res.status(404).render('404', { url: req.path, title: '404 Not found' });
});

// start server
app.listen(port, () => console.log('STARTED ON PORT', port));