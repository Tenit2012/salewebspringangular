/// <reference path="../../../Assets/admin/libs/angular/angular.js" />
(function (app) {
    app.controller('homeController', homeController);
    homeController.$inject = ['$scope', 'apiService', 'notificationService', '$sce','urls'];
    function homeController($scope, apiService, notificationService, $sce,urls) {
        $scope.getItemCount = getItemCount;
        $scope.productsCount = 0;
        $scope.feedbacksCount = 0;
        $scope.ordersCount = 0;
        $scope.usersCount = 0;
        $scope.users = [];
        $scope.products = [];
        $scope.latestUsers = latestUsers;
        $scope.latestProducts = latestProducts;
       
        function latestUsers() {
            apiService.get(urls.BASE_URL+'/api/home/getlatestusers', null, function (res) {
                $scope.users = res.data;
            });
        }
        function latestProducts() {
            apiService.get(urls.BASE_URL+'/api/home/getlatestproducts', null, function (res) {
                $scope.products = res.data;
            });
        }
        
        $scope.htmlRaw = function (input) {
            return $sce.trustAsHtml(input);
        };
        function getItemCount() {
            apiService.get('http://localhost:8080/api/home/gettotalitem', null, function (res) {
                $scope.productsCount = res.data.totalproduct;
                $scope.feedbacksCount = res.data.totalfeedback;
                $scope.ordersCount = res.data.totalOther;
                $scope.usersCount = res.data.totalUser;
            }, function (res) {

            });
        }
        latestUsers();
        getItemCount();
        latestProducts();
    }
})(angular.module('uStora'));