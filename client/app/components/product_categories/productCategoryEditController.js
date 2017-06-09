(function (app) {
    app.controller('productCategoryEditController', productCategoryEditController);
    productCategoryEditController.$inject = ['apiService', '$scope', 'notificationService', '$state', '$stateParams','commonService'];
    function productCategoryEditController(apiService, $scope, notificationService, $state, $stateParams, commonService) {
        $scope.flatFolders = [];
        $scope.loadParentCategories = loadParentCategories;
        $scope.loadProductCategoryDetail = loadProductCategoryDetail;
        $scope.UpdateProductCategory = UpdateProductCategory;
        $scope.GetSeoTitle = GetSeoTitle;

        $scope.ckeditorOptions = {
            languague: 'vi',
            height: '200px'
        }

        $scope.chooseImage = function () {
            var finder = new CKFinder();

            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.productCategory.Image = fileUrl;
                })
            }
            finder.popup();
        }

        function GetSeoTitle() {
            $scope.productCategory.Alias = commonService.getSeoTitle($scope.productCategory.Name);
        }

        function loadProductCategoryDetail() {
            apiService.get('http://localhost:8080/api/productcategory/detail/' + $stateParams.id, null, function (result) {
                $scope.productCategory = result.data;
                var time = result.data.createDate;
                var date = new Date(time);
                $scope.productCategory.createDate = date;
            }, function (error) {
            	console.log('Không có dữ liệu!!!');
// notificationService.displayError(error.data);
            });
        }
        function UpdateProductCategory() {
        	var file = $scope.myFile;
			var producCatergory = $scope.productCategory;
			producCatergory.updateDate = new Date()
			var fd = new FormData();
			fd.append('file', file);
			fd.append('product', JSON.stringify(producCatergory));
            apiService.postFile('http://localhost:8080/api/productcategory/update', fd,
                function (result) {
                    notificationService.displaySuccess('Đã cập nhật ' + result.data.name + ' thành công');
                    $state.go('product_categories');
                }, function (error) {
                    console.log(error);
                    notificationService.displayError('Cập nhật không thành công');
                });
        }

        function loadParentCategories() {
            apiService.get('http://localhost:8080/api/productcategory/getlistall', null,
                function (result) {
                    $scope.parentCategories = commonService.getTree(result.data, "id", "parentId");
                    $scope.parentCategories.forEach(function (item) {
                        recur(item, 0, $scope.flatFolders);
                    });
                }, function () {
                    console.log('Không có dữ liệu!!!');
                });
        }

        function times(n, str) {
            var result = '';
            for (var i = 0; i < n; i++) {
                result += str;
            }
            return result;
        };
        function recur(item, level, arr) {
            arr.push({
                name: times(level, '–') + ' ' + item.name,
                id: item.id,
                Level: level,
                Indent: times(level, '–')
            });
            if (item.children) {
                item.children.forEach(function (item) {
                    recur(item, level + 1, arr);
                });
            }
        };

        loadParentCategories();
        loadProductCategoryDetail();
    }
})(angular.module('uStora.product_categories'));