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