define(['angular' <% if(hasUiBootstrap) { %>,'uibootstrap'<% } %>], function(){

	var dependances = [];
	<% if(hasUiBootstrap) { %>
		dependances.push('ui.bootstrap');
	<% } %>

	console.group('Initialisation de l\'application');
	app = angular.module("app", dependances);
	console.groupEnd();

	return app;
});