define(['app/app'], function(app){
	console.group('Chargement du service AlertService');

	app.factory('AlertService', function ($window){
		return {
			log: function(text){
				$window.alert(text);
			}
		};
	});

	console.groupEnd();
});