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
    $routeProvider.when("/admin", {
        templateUrl: "/templates/admin/home.html",
        controller: "AdminController"
    });
    $routeProvider.when("/admin/product", {
        templateUrl: "/templates/admin/products.html",
        controller: "AdminProductListController",
        resolve: {
            "products": function($http){
                return $http.get(app.config.api.getUrl() + "/product");
            }
        }
    });
    $routeProvider.when("/admin/product/:id", {
        templateUrl: "/templates/admin/showProduct.html",
        controller: "AdminProductShowController",
        resolve: {
            "product": function($route, $http){
                return $http.get(app.config.api.getUrl() + "/product/" + $route.current.params.id);
            }
        }
    });
    $routeProvider.when("/admin/product/:id/edit", {
        templateUrl: "/templates/admin/editProduct.html",
        controller: "AdminProductEditController",
        resolve: {
            "product": function($route, $http){
                return $http.get(app.config.api.getUrl() + "/product/" + $route.current.params.id);
            }
        }
    });
    $routeProvider.otherwise({redirectTo: '/'});
});