define(['angular'], function(){

	var dependances = [];


	console.group('Initialisation de l\'application');
	app = angular.module("app", dependances);
	console.groupEnd();

	return app;
});