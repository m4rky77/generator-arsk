'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PageGenerator = module.exports = function PageGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Add new page ' + this.name + '.');
};

util.inherits(PageGenerator, yeoman.generators.NamedBase);

PageGenerator.prototype.files = function files() {
  	this.namePage = this._.str.capitalize(this.name);

	var folders = [
		'app/js/app/pages/' + this.name,
		'app/js/app/pages/' + this.name + '/controllers',
		'app/js/app/pages/' + this.name + '/directives',
		'app/js/app/pages/' + this.name + '/filters',
		'app/js/app/pages/' + this.name + '/routes',
		'app/js/app/pages/' + this.name + '/views',

	];

	var files = [
		'controllers/controller.js',
		'directives/directive.js',
		'routes/route.js',
		'filters/filter.js',
		'views/view.html',
		'page.js'
	];

	var self = this;
	folders.forEach(function (folder) {
	    self.mkdir(folder);
	});

	files.forEach(function (file) {
	    self.template(file, 'app/js/app/pages/' + self.name + "/" + file);
	});
};
