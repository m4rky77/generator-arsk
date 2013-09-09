'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ArskGenerator = module.exports = function ArskGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.npmInstall();
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ArskGenerator, yeoman.generators.Base);

ArskGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'checkbox',
    name: 'features',
    message: 'What more would you like?',
    choices: [{
      name: 'Grunt',
      value: 'gruntServer',
      checked: true
    }, {
      name: 'jQuery',
      value: 'jQuery',
      checked: true
    }, {
      name: 'Bootstrap',
      value: 'bootstrap',
      checked: true
    }, {
      name: 'UI Bootstrap',
      value: 'uiBootstrap',
      checked: true
    }]
  }];

  this.prompt(prompts, function (answers) {
    var features = answers.features;

    function hasFeature(feat) { return features.indexOf(feat) !== -1; }

    this.hasGruntServer = hasFeature('gruntServer');
    this.hasJquery = hasFeature('jQuery');
    this.hasBootstrap = hasFeature('bootstrap');
    this.hasUiBootstrap = hasFeature('uiBootstrap');

    cb();
  }.bind(this));
};

ArskGenerator.prototype.app = function app() {
  
  var folders = [
    'app',
    'app/css',
    'app/images',
    'app/js',
    'app/js/libs',
    'app/js/libs/angularjs',
    'app/js/libs/console',
    'app/js/libs/requirejs',
    'app/js/libs/underscorejs',
    'app/js/app',
    'app/js/app/filters',
    'app/js/app/modules',
    'app/js/app/modules/header',
    'app/js/app/modules/header/controllers',
    'app/js/app/modules/header/directives',
    'app/js/app/modules/header/filters',
    'app/js/app/modules/header/views',
    'app/js/app/nls',
    'app/js/app/nls/fr-fr',
    'app/js/app/nls/en-us',
    'app/js/app/pages',
    'app/js/app/pages/home',
    'app/js/app/pages/home/controllers',
    'app/js/app/pages/home/routes',
    'app/js/app/pages/home/filters',
    'app/js/app/pages/home/views',
    'app/js/app/services',
  ];

  var files = [
    'app/index.html',
    'app/css/styles.css',
    'app/css/theme.css',
    'app/js/main.js',
    'app/js/libs/angularjs/angular-1.0.7.js',
    'app/js/libs/console/console-0.4.min.js',
    'app/js/libs/console/console.js',
    'app/js/libs/requirejs/i18n-2.0.4.js',
    'app/js/libs/requirejs/require-2.1.8.js',
    'app/js/libs/underscorejs/underscore-1.5.1.js',
    'app/js/app/App.js',
    'app/js/app/filters/i18nFilter.js',
    'app/js/app/modules/header/controllers/headerController.js',
    'app/js/app/modules/header/directives/headerDirective.js',
    'app/js/app/modules/header/HeaderModule.js',
    'app/js/app/modules/header/views/headerView.html',
    'app/js/app/nls/fr-fr/i18n.js',
    'app/js/app/nls/i18n.js',
    'app/js/app/pages/home/controllers/homeController.js',
    'app/js/app/pages/home/HomePage.js',
    'app/js/app/pages/home/routes/homeRoute.js',
    'app/js/app/pages/home/views/page.html',
    'app/js/app/services/alertService.js'
  ];

  if (this.hasJquery) {
    folders.push('app/js/libs/jquery');
    
    files.push('app/js/libs/jquery/jquery-1.10.2.js');
  }

  if (this.hasUiBootstrap) {
    folders.push('app/js/libs/ui-bootstrap');
    
    files.push('app/js/libs/ui-bootstrap/ui-bootstrap-0.5.0.js');
    files.push('app/js/libs/ui-bootstrap/ui-bootstrap-tpls-0.5.0.js');
  }
 

  if (this.hasBootstrap) {
    folders.push('app/js/libs/bootstrap');
    folders.push('app/js/libs/bootstrap/css');
    folders.push('app/js/libs/bootstrap/fonts');
    folders.push('app/js/libs/bootstrap/js');

    files.push('app/js/libs/bootstrap/css/bootstrap-theme.css');
    files.push('app/js/libs/bootstrap/css/bootstrap.css');
    files.push('app/js/libs/bootstrap/fonts/glyphicons-halflings-regular.eot');
    files.push('app/js/libs/bootstrap/fonts/glyphicons-halflings-regular.svg');
    files.push('app/js/libs/bootstrap/fonts/glyphicons-halflings-regular.ttf');
    files.push('app/js/libs/bootstrap/fonts/glyphicons-halflings-regular.woff');
    files.push('app/js/libs/bootstrap/js/bootstrap.js');
  }

  var self = this;
  folders.forEach(function (folder) {
    self.mkdir(folder);
  });

  files.forEach(function (file) {
    if (file === 'app/js/libs/underscorejs/underscore-1.5.1.js') {
       self.copy(file, file);
    } else {
       self.template(file, file);
    }
   
  });

};

ArskGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  this.copy('jshintrc', '.jshintrc');
  this.copy('package.json', 'package.json');

  if(this.hasGruntServer){
    this.copy('GruntFile.js', 'GruntFile.js');
  }
};
