.. image:: https://travis-ci.org/Manacola/react-angular-es6.svg?branch=master
    :target: https://travis-ci.org/Manacola/react-angular-es6


React Angular ES6
=======================

Stack
-----

- NPM
- Webpack
- # [AngularJS] (https://angularjs.org/) &middot;
- # [React](https://reactjs.org/) &middot;
- # [AngularUI Router (with self-registering components)] (https://ui-router.github.io/) &middot;
- # [Angular Material Design] (https://material.angularjs.org/) &middot;
- ES 6 / Babel (Module Loading)
- SASS
- Jade
- Tests
  - Karma (Test Runner, http://karma-runner.github.io/)
  - Mocha (Test Framework, http://mochajs.org/)
  - Chai (BDD/TSS assertion library, http://chaijs.com/)


Requirements
------------

ToDo:

- React latest version
- SASS variables

Planed:

- Redux integration
- Some examples to directly use React components and Update view with out depending on Angular
- Integrate some UI components in React to look like material design


Prerequisits
------------

Install a few dependencies globally::

  $ npm install -g babel
  $ npm install -g webpack
  $ npm install -g webpack-dev-server
  $ npm install -g eslint


Development
-----------

Create a JS bundle with Webpack::

  $ npm run build

Start the Webpack development server on 'localhost:8080'::

  $ npm run start

Run tests::

  $ npm run test

Linting::

  $ npm run lint


HTML Webpack Plugin
-------------------

Installation::

  $ npm install html-webpack-plugin --save-dev

webpack.config.js::

  var HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    ...
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Website Starter',
        template: 'src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
    ],
  }


ES 6 Imports
------------

Default import::

  import localName from 'src/my_lib';

Namespace import: imports the module as an object (with one property per named export)::

  import * as my_lib from 'src/my_lib';

Named imports::

  import { name1, name2 } from 'src/my_lib';

Renaming named imports::

  // Renaming: import `name1` as `localName1`
  import { name1 as localName1, name2 } from 'src/my_lib';
Empty import: only loads the module, doesn’t import anything. The first such import in a program executes the body of the module.
  import 'src/my_lib';

Source: http://exploringjs.com/es6/ch_modules.html

Imports for broken modules::

  require('script!objectpath/lib/ObjectPath');

Source: https://webpack.github.io/docs/shimming-modules.html


SASS Loader
-----------

Installation::

  $ npm install sass-loader --save-dev

Webpack Configuration (webpack.config.js)::

  module.exports = {
    ...
    module: {
      loaders: [
        ...
        { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap", "sass-loader"], options: {
          includePaths: ['node_modules', 'node_modules/angular-material/*']
        }
        ...
        ,
        {
          test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
          loader: 'file?name=fonts/[name].[ext]'
        }
      ]
    },
    devtool: 'source-map'
  }

Javascript::

  import Styles from './styles.scss';

SASS (styles.scss)::

  body {
      padding-top: 80px;
  }


Jade Loader
-----------

Installation::

  $ npm install jade-loader --save-dev

Webpack Configuration (webpack.config.js)::

  module.exports = {
    ...
    module: {
      loaders: [
        ...
        { test: /\.jade$/, loader: 'jade-loader' },
      ]
    }
  }

Javascript::

  import template from './hero.jade';

Jade (hero.jade)::

  div.jumbotron
    h1 Angular, ES6, Webpack Starter!
    h3 You can find my template inside {{ vm.name }}.html


Angular Schema Form
-------------------

Installation::

  $ npm install angular-schema-form --save
  $ npm install objectpath --save
  $ npm install tv4 --save
  $ npm install angular-sanitize --save

Javascript::

  import 'angular-sanitize';
  require('script!tv4/tv4.js');
  require('script!objectpath/lib/ObjectPath');
  require('script!angular-schema-form/dist/schema-form');
  require('script!angular-schema-form/dist/bootstrap-decorator');

  let formsModule = angular.module('forms', [
    uiRouter,
    'schemaForm'
  ])

  ...

Controller::

  class FormsController {
    constructor() {
      this.name = 'Contact Us';
      this.model = {};
      this.schema = {
        type: 'object',
        properties: {
          name: { type: 'string', minLength: 2, title: 'Name', description: 'Name or alias' },
          title: {
            type: 'string',
            enum: ['dr','jr','sir','mrs','mr','NaN','dj']
          }
        },
        'required': [
          'name'
        ]
      };
      this.form = [
        '*',
        {
          type: 'submit',
          title: 'Save'
        }
      ];
    }
  }

  export default FormsController;


Service
-------

...

Travis CI
---------

- Enable Travis for repository

.travis.yml::

  language: node_js
  node_js:
  - 4.2.1
  cache:
    directories:
      - node_modules
  before_install:
    - export CHROME_BIN=chromium-browser
    - export DISPLAY=:99.0
    - sh -e /etc/init.d/xvfb start
  install:
  - npm install -g babel
  - npm install -g webpack
  - npm install -g webpack-dev-server
  - npm install -g eslint
  - npm install
  script:
  - npm run test
  notifications:
    email:
    - jithu.reddy225@gmial.com

webpack.config.js::

  ...

ESLint
------

Installation::

  $ npm install eslint -g

Sublime Text 3 Installation:

https://github.com/roadhump/SublimeLinter-eslint

Sources
-------

- Webpack: https://github.com/faassen/bundle_example
- Angular: https://github.com/angular-class/NG6-starter
- Angular: http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
- Webpack and Babel6: https://github.com/rauschma/webpack-babel-demo

