angular.module('7minWorkout')
	.factory('workoutHistoryTracker', ['$rootScope', 
		function($rootScope){
			var maxHistoryItems = 20;
			var workoutHistory = [];
			var currentWorkoutLog = null;
			var service = {};
			return service;
	}]);