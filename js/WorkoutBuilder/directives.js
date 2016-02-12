angular.module('WorkoutBuilder')
    .directive('workoutTile', function () {
        return {
            restrict:'EA',
            templateUrl:'http://oliverlai.com/fitness-app/partials/workoutbuilder/workout-tile.html'
        }
    });