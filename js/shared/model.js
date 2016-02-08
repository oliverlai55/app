'use strict';

/* Model classes */
//This is the service shared between the two apps.
angular.module('app')
    .factory('Exercise', function () {
        function Exercise(args) {
            this.name = args.name;
            this.title = args.title;
            this.description = args.description;
            this.image = args.image;
            this.related = {};
            this.related.videos = args.videos;
            this.nameSound = args.nameSound;
            this.procedure = args.procedure;
        }
        return Exercise;
        //returning a constructor function reference
    });

angular.module('app')
    .factory('WorkoutPlan', function () {
        function WorkoutPlan(args) {
            this.exercises = [];
            this.name = args.name;
            this.title = args.title;
            this.description = args.description;
            this.restBetweenExercise = args.restBetweenExercise;
        };
        WorkoutPlan.prototype.totalWorkoutDuration = function () {
            if (this.exercises.length == 0) return 0;
            var total = 0;
            angular.forEach(this.exercises, function (exercise) {
                total = total + (exercise.duration ? exercise.duration : 0);
            });
            return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
        }
        return WorkoutPlan;
    });
