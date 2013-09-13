//On génère une config dédié à l'application pour pouvoir utiliser plusieurs APP sur une même page
appRequire = require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    angular: {
      exports: "angular"
    },
    <% if (hasBootstrap && hasJquery) { %>
    bootstrap:{
      deps: ['jquery']
    },
    <% } %>
    <% if(hasJquery) { %>
    jquery: {
      exports: "$"
    }
    <% } %>
    
  },

  paths: {
    // Librairies bower
    underscore:         '/js/vendor/underscore/underscore',
    angular:            '/js/vendor/angular/angular',
    <% if (hasBootstrap && hasJquery) { %>
    bootstrap:          '/js/vendor/bootstrap/dist/js/bootstrap',
    <% } %>
    <% if(hasJquery) { %>
    jquery:             '/js/vendor/jquery/jquery',
    <% } %>
    i18n :              '/js/vendor/requirejs-i18n/i18n',
    
    // Librairies incluse
    Console:            '/js/libs/console/console'
   
  },

  config : {
    i18n : {
      locale: localStorage.getItem('locale') || 'fr-fr'
    }
  }

});

appRequire([
  'angular',
  <% if (hasBootstrap && hasJquery) { %>
  'bootstrap',
  <% } %>
  'app/filters/i18nFilter',
  'app/modules/header/HeaderModule',
  'app/pages/home/HomePage',
  'Console'
], function(){
    angular.bootstrap(document.getElementById('app'),['app']);
});