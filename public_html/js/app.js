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
app.config = {
    "api": {
        host: "api.mywebdesign.dev",
        protocol: "http",
        port: "80",
        getUrl: function getUrl(){
            return app.config.api.protocol + "://" + app.config.api.host + ":" + app.config.api.port;  
        }
    }
}
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
app.controller("AdminController", function($scope){
    $scope.user = "Phil";
});
app.controller("AdminProductListController", function($scope, products){
    console.log(products);
    $scope.products = products;
});

app.controller("AdminProductShowController", function($scope, product){
    $scope.product = product;
});

app.controller("AdminProductEditController", function($scope, product){
    $scope.product = product;
});
app.controller("AdminProductListController", function($scope, products){
    console.log(products);
    $scope.products = products;
});

app.controller("AdminProductShowController", function($scope, product){
    $scope.product = product;
});

app.controller("AdminProductEditController", function($scope, product){
    $scope.product = product;
});
app.controller("AdminProductListController", function($scope, products){
    console.log(products);
    $scope.products = products;
});

app.controller("AdminProductShowController", function($scope, product){
    $scope.product = product;
});

app.controller("AdminProductEditController", function($scope, product){
    $scope.product = product;
});
var productController = {
    listProducts: function listProducts($scope, products){
        $scope.products = products.data;
    },
    showProduct: function showProduct($scope, product){
        $scope.product = product.data;
    },
    editProduct: function editProduct($scope, $location, product){
        $scope.product = product.data;
        $scope.delete = function(){ 
            productController.deleteProduct(product, $location); 
        };
    },    
    deleteProduct: function deleteProduct(product, $location){
        console.log("deleting: " + product.data.name);
        $location.path('/admin/product');
    }
}

app.controller("AdminProductListController", productController.listProducts);

app.controller("AdminProductShowController", productController.showProduct);

app.controller("AdminProductEditController", productController.editProduct);


app.directive('menu', function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/menu.html'
    } 
});