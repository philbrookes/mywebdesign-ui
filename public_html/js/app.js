var app = angular.module('mywebdesign-app', ['ngRoute']).config(function($routeProvider){
    $routeProvider.when("/", {
       templateUrl: "/templates/home.html",
       controller: "HomeController"
    });
    $routeProvider.when("/contact-us", {
       templateUrl: "/templates/contact-us.html",
       controller: "ContactController"
    });
    $routeProvider.when("/portfolio", {
       templateUrl: "/templates/portfolio.html",
       controller: "PortfolioController"
    });
    $routeProvider.otherwise({redirectTo: '/'});
});
app.controller("ContactController", function($scope){

});
app.controller("HomeController", function($scope){

});
app.controller("MenuController", function($scope, $location){
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});
app.controller("PortfolioController", function($scope){

});
app.directive('menu', function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/menu.html'
    } 
});