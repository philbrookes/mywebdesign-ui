app.controller("MenuController", function($scope, $location){
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});