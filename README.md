# Reddit Feed

> This web app integrates with Reddit’s API to show the top posts in a given subreddit.

The flow of the code is as follows:
1. The *subreddit search form* accepts *searchTerm*, *sortBy* and *searchLimit* as queries.
2. When the form identifies a `'submit'` event, it parses the search queries.
3. Then it send a `GET` request according to that queries, to fetch the recent data from Reddit API.
4. Iterate through the relevant data (subreddit's posts) and parse all as HTML code.
5. Add the results to the Main view `index.ejs` file.

### Application deployed on Heroku: <https://reddit-tal.herokuapp.com/>

## Application screenshot: <br/>
![App screenshot][app-screenshot]

## Tests
To run the tests:
   ```
   npm test
   ```

## Built with
* [Express](https://expressjs.com/) as Node.js web application framework
* [Ejs](https://ejs.co/) to include dynamic data to the html
* [Bootstrap](https://getbootstrap.com/) as the CSS framework
* [Mocha](https://mochajs.org/) as testing framework

## Running the app
To launch the application locally:
1. Clone repo:
   ```
   git clone https://github.com/talhazi/RedditFeed.git
   ```
2. Enter the directory:
   ```
   cd RedditFeed
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the app:
   ```
   npm start
   ```
   ```
   # dev mode
   npm run dev
   ```
   Now the server should run at: <http://localhost:3000>

## Contact
Tal Hazi <> [talhazi114@gmail.com](mailto:talhazi114@gmail.com)

[app-screenshot]: ./assets/app-screenshot.png
