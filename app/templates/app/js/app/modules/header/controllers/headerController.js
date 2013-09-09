define(['app/app'], function(app){
	console.group('Chargement du controleur HeaderController');

	app.controller('HeaderController', function HeaderController($scope, $http) {
		$scope.headerTitle = 'AngularJS Boilerplate';
	});

	console.groupEnd();
});