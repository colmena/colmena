'use strict';

(function() {
  angular.module('com.module.core')
    .directive('dateButton', function() {
      var linkFn = function link(scope) {
        scope.options.open = false;
        scope.switchOpen = function(event) {
          event.preventDefault();
          event.stopPropagation();
          scope.options.open = true;
          return true;
        };
      };

      return {
        restrict: 'A',
        scope: false,
        compile: function(element) {
          var span = angular.element('<span></span>');
          var button = angular.element('<button></button>');
          var i = angular.element('<i></i>');

          span.addClass('input-group-btn');

          button.attr('type', 'button');
          button.addClass('btn btn-default');
          button.attr('ng-click', 'switchOpen($event)');

          i.addClass('glyphicon glyphicon-calendar');

          button.append(i);
          span.append(button);
          element.after(span);

          return linkFn;
        }
      };
    });

})();
