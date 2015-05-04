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