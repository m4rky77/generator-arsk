define(['app/app'], function(app){
	console.group('Chargement de la directive App<%= nameModule %>');

	app.directive('app<%= nameModule %>', function ($compile){
		return {
			restrict: 'A',
			templateUrl: '/js/app/modules/<%= name %>/views/view.html',
			controller: '<%= nameModule %>Controller',
			replace: true
		};
	});

	console.groupEnd();
});