define(['app/app'], function(app){
	
	app.config(['$routeProvider', function ($routeProvider) {
		
		console.group('Configuration des routes de la page <%= namePage %>');
		
		//Si la page est la route principale
		console.debug('Définition de la route par défaut : /<%= name %>');
		/*$routeProvider.otherwise({
			redirectTo: '/<%= name %>'
		});*/

		//Ajout de la liste des routes possibles
		console.debug('Ajout de la route /<%= name %>');
		$routeProvider.when('/<%= name %>', {
			templateUrl: '/js/app/pages/<%= name %>/views/view.html',
			controller: '<%= namePage %>Controller'
		});

		console.groupEnd();
	}]);
});