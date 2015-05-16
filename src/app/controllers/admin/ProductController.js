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

