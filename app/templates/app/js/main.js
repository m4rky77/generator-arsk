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
    jquery: {
      exports: "$"
    }
    <% } %>
    
  },

  paths: {
    // Major libraries
    i18n :              '/js/libs/requirejs/i18n-2.0.4',
    underscore:         '/js/libs/underscorejs/underscore-1.5.1',
    angular:            '/js/libs/angularjs/angular-1.0.7',
    <% if (hasBootstrap && hasJquery) { %>
    bootstrap:          '/js/libs/bootstrap/js/bootstrap',
    jquery:             '/js/libs/jquery/jquery-1.10.2',
    <% } %>
     <% if (hasUiBootstrap) { %>
    uibootstrap:        '/js/libs/ui-bootstrap/ui-bootstrap-0.5.0',
    <% } %>
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