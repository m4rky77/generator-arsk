'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
  	yeoman.generators.NamedBase.apply(this, arguments);

  	console.log('Add new module ' + this.name + '.');
};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

ModuleGenerator.prototype.files = function files() {
	this.nameModule = this._.str.capitalize(this.name);

	var folders = [
		'app/js/app/modules/' + this.name,
		'app/js/app/modules/' + this.name + '/controllers',
		'app/js/app/modules/' + this.name + '/directives',
		'app/js/app/modules/' + this.name + '/filters',
		'app/js/app/modules/' + this.name + '/services',
		'app/js/app/modules/' + this.name + '/views',

	];

	var files = [
		'controllers/controller.js',
		'directives/directive.js',
		'filters/filter.js',
		'services/service.js',
		'views/view.html',
		'module.js'
	];

	var self = this;
	folders.forEach(function (folder) {
	    self.mkdir(folder);
	});

	files.forEach(function (file) {
	    self.template(file, 'app/js/app/modules/' + self.name + "/" + file);
	});
};
