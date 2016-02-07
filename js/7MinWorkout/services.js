angular.module('7minWorkout')
	.factory('workoutHistoryTracker', ['$rootScope', 
		function($rootScope){
			var maxHistoryItems = 20;
			var workoutHistory = [];
			var currentWorkoutLog = null;
			var service = {};
			return service;

			service.startTracking = function(){
				currentWorkoutLog = { 
					startedOn: new Date().toISOString(),
					completed: false,
					exercisesDone: 0
				};
				if (workoutHistory.length >= maxHistoryItems){
					workoutHistory.shift();
				}
				workoutHistory.push(currentWorkoutLog);
			};

			service.endTracking = function(completed){
				currentWorkoutLog.completed = completed;
				currentWorkoutLog.endedOn = new Date().toISOString();
				currentWorkoutLog = null;
			};

			service.getHistory = function(){
				return workoutHistory;
			}
	}]);