# First-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd first-app`
* `npm install`
* `bower install`

## Running / Development

* `ember electron`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember electron:test`
* `ember electron:test --server`

### Building

* `ember electron:build` (development)
* `ember electron:build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [ember-electron](https://github.com/felixrieseberg/ember-electron)

## Packages to install
* Bootstrap and Sass
```bash
$ ember install ember-cli-sass
$ ember install ember-cli-bootstrap-sassy
```
then we have to import it in the style sheet `app/styles/app.scss` with
```javascript
@import "bootstrap"
```
