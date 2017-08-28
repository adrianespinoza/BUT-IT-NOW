
# SHOPPING CART

SHOPPING CART™ is a website to sell their products.

### Version
1.0.0

### Tech

SHOPPING CART website uses a number of technologies to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [jQuery] - The Write Less, Do More, JavaScript Library.
* [Zurb Foundation] - great UI boilerplate for modern web apps.
* [node.js] - evented I/O, used for Client Side  build system.
* [Gulp] - the streaming build system.

**1. Requirements**

To build and serve the client side application, you need to have the following prerequisites:

* [Nodejs] >= 4.0.0
* [Git] >= 1.8.5

Make sure you have installed all the things mentioned above by executing the following commands in the cmd terminal:

```bash
npm -v
```
```bash
node -v
```
```bash
git --version
```

**2. Installing Dependencies**

After that, you must install the following app dependencies by running the following commands on the cmd terminal (make sure you are in the root folder):

* Installing node modules dependencies

	```bash
	npm install
	```
* Installing gulp as global module

	```bash
	npm install gulp -g
	```
* Installing bower as global module

    ```bash
    npm install bower -g
    ```
* Installing bower dependencies

    ```bash
    bower install
    ```

**3. Running the application in dev mode**

In a development environment we use the file [app.dev.conf.js](src/app.dev.conf.js) in order to configure the server base url for our REST API (Make sure you have installed a valid [server] in order to start using the REST API.

```javascript
// src/app.dev.config.js
angular.module('xpressApp.services')
  .constant('xpress.API_URL_BASE', 'http://localhost:1731');
```

The code above is the way that angularjs creates constants (.constant('key', 'value') ) and we are using it as configuration. The 'API_URL_BASE' as a mentioned before it is the url base for our REST API.

After configuring the app.dev.config.js file. The only thing you have to do is to execute the following command:

```bash
gulp
```

The command above will do a lot of things (verify the coding style for the javascript files, run the unit testing, compile the less files into css files, etc) and will also host our site.

Once all the gulp tasks finished, the console will indicate a url where the site has been hosted (i.e. http://10.31.36.62:3000)

This development environment is implemented in a way that when you change something in the source code, some gulp tasks will be automatically executed in order to update the build and refresh the browser.


**4. Generating a build for production**

In order to generate a build for production we need to run the following command:

```bash
npm run build
```

The command will be executed in the context of the application according to the following configuration (package.json)

```json
{
  "name": "xpress-online-client",
  "version": "1.17.0",
  "devDependencies": {
    "bower": "1.7.7",
    "bower-nexus3-resolver" : "*",
    "browser-sync": "2.2.2",
    "del": "1.1.1",
    "express": "4.13.3",
    "gulp": "3.8.11",
    "gulp-angular-filesort": "1.1.1",
    "gulp-bless": "3.0.1",
    "gulp-callback": "0.0.3",
    "gulp-concat": "2.5.2",
    "gulp-file": "0.3.0",
    "gulp-flatten": "0.0.4",
    "gulp-if": "2.0.0",
    "gulp-inject": "1.2.0",
    "gulp-jslint-simple": "1.0.0",
    "gulp-json-transform": "0.2.0",
    "gulp-karma": "0.0.4",
    "gulp-less": "3.0.5",
    "gulp-load-plugins": "0.8.1",
    "gulp-merge": "0.1.1",
    "gulp-ng-annotate": "0.5.3",
    "gulp-ng-templates": "0.0.5",
    "gulp-rename": "1.2.0",
    "gulp-rev": "3.0.1",
    "gulp-rev-replace": "0.4.0",
    "gulp-ruby-sass": "1.0.0-alpha.3",
    "gulp-uglify": "1.1.0",
    "gulp-watch": "4.1.1",
    "karma": "0.10.9",
    "karma-chrome-launcher": "0.1.2",
    "karma-coffee-preprocessor": "~0.1.3",
    "karma-coverage": "0.3.1",
    "karma-firefox-launcher": "0.1.3",
    "karma-jasmine": "0.1.5",
    "karma-ng-html2js-preprocessor": "0.2.2",
    "karma-phantomjs-launcher": "0.1.2",
    "karma-requirejs": "0.2.1",
    "karma-script-launcher": "0.1.0",
    "main-bower-files": "2.5.0",
    "minimist": "1.1.1",
    "path": "0.4.9",
    "require-dir": "0.1.0",
    "requirejs": "2.1.11",
    "wiredep": "2.2.2"
  },
  "engines": {
    "node": ">=0.8.0"
  },
  "scripts": {
    "prebuild": "npm install && bower install",
    "build": "gulp dist -s"
  }
}
```

So, executing _npm build_ in fact will also execute _npm prebuild_ before, and according to the package.json the prebuild is in charge of installing all the dependencies of the application.

Usually this command is used for a CI tool.(i.e. Team City or Jenkins)


[node.js]:http://nodejs.org
[jQuery]:http://jquery.com
[AngularJS]:http://angularjs.org
[Gulp]:http://gulpjs.com
[Zurb Foundation]:http://foundation.zurb.com/