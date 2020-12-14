# URL Shortener

 ## Description 
A URL shortening service that allows users to generate random or custom shortcodes to easily reference a given URL. If a user chooses to create a random shortcode, a random 6 digit code will be returned and confirmed. If a user chooses to create a custom shortcode, their custom code will be confirmed and returned if available for use.

## Features
* MongoDB stores user URL and short code data
* Express defines the backend server API routes
* Handlebars renders the HTML pages
* Jest testing ensures random generated codes are alphanumeric

## Built With
* [MongoDB](https://www.mongodb.com/) - cross-platform document-oriented database program
* [Mongoose](https://mongoosejs.com/) - object data modeling (ODM) library for MongoDB
* [Express](https://expressjs.com/) - backend web application framework for Node.js, for building web applications and APIs
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment that allows JavaScript to be run in command line
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - code that creates the logic and structure of the program
* [Handlebars](https://handlebarsjs.com/) - templating language to generate HTML pages
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - defines styling on the HTML page
* [Bootstrap](https://getbootstrap.com/) - CSS framework used to build mobile responsive websites
* [Jest](https://jestjs.io/en/) - JavaScript testing framework
* [Git](https://git-scm.com/) - version control system to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub

## Geting Started
### Installation
Install dependencies with the following command:

        npm install

### Tests
Run Jest tests with the following command:

        npm test

### Run in Development Environment
1. Ensure you have MongoDB installed. If not, follow installation instructions on [mongodb.com](https://www.mongodb.com/)

2. Run the application with the following command:

        npm start

3. To create a random shortcode, enter a URL in the random shortcode box and click "Generate Shortcode". Your shortcode will appear in the box below.

4. To create a custom short code, enter a URL in the custom shortcode box and click "Generate Shortcode". All shortcodes must be alphanumeric and at least 4 characters long. If your requested shortcode is available, it will appear in the box below. If your requested shortcode is not available, it will not display in the box below. Select a new shortcode and try again until you see your requested shortcode appear in the box below.

5. Once you have a confirmed shortcode, the ``</shortcode>`` endpoint will redirect you to your original long URL.

6. The ``</shortcode/stats>`` endpoint will display a page with the stats for the given shortcode. The stats list the number of times a code has been accessed, when it was registered, and when it was last accessed.

## Examples
The below GIF demonstrates how a user can generate a random shortcode for a URL
![RandomGIF](public/gif/random.gif)

The below GIF demonstrates how a user can generate a custom shortcode for a URL
![CustomGIF](public/gif/custom.gif)

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)