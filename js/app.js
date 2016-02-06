'use strict';

angular.module('app',['ngRoute', 'ngSanitize', '7minWorkout', 'mediaPlayer']).
//the sceDelegrateProvider makes youtube able to inject videos as trustworthy source.
config(function ($routeProvider, $sceDelegateProvider){
	$routeProvider.when('/start', {
		templateUrl: 'partials/start.html'
	});
	$routeProvider.when('/workout', {
		templateUrl: 'partials/workout.html',
		controller: 'WorkoutController'
	});
	$routeProvider.when('/finish', {
		templateUrl: 'partials/finish.html'
	});
	$routeProvider.otherwise({
		redirectTo: '/start'
	});

	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'http://*.youtube.com/**'
		]);
});
//creates new modules
angular.module('7minWorkout',[]);