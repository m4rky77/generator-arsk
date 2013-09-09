define(['app/app'], function(app){
	
	app.config(['$routeProvider', function ($routeProvider) {
		
		console.group('Configuration des routes de la page Home');
		
		//Si la page est la route principale
		console.debug('Définition de la route par défaut : /home');
		$routeProvider.otherwise({
			redirectTo: '/home'
		});

		//Ajout de la liste des routes possibles
		console.debug('Ajout de la route /home');
		$routeProvider.when('/home', {
			templateUrl: '/js/app/pages/home/views/page.html',
			controller: 'HomeController'
		});

		console.groupEnd();
	}]);
});