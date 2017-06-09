(function(app) {
	app
			.controller('productCategoryAddController',
					productCategoryAddController);
	productCategoryAddController.$inject = [ 'apiService', '$scope',
			'notificationService', '$state', 'commonService' ];
	function productCategoryAddController(apiService, $scope,
			notificationService, $state, commonService) {
		$scope.productCategory = {
			createDate : new Date(),
			status : true
		}
		
		$scope.flatFolders = [];
		$scope.loadParentCategories = loadParentCategories;
		$scope.AddProductCategory = AddProductCategory;
		$scope.GetSeoTitle = GetSeoTitle;

		$scope.ckeditorOptions = {
			languague : 'vi',
			height : '200px'
		}

		$scope.chooseImage = function() {
			var finder = new CKFinder();

			finder.selectActionFunction = function(fileUrl) {

				$scope.$apply(function() {
					$scope.productCategory.Image = fileUrl;
				})
			}
			finder.popup();
		};

		function GetSeoTitle() {
			$scope.productCategory.Alias = commonService
					.getSeoTitle($scope.productCategory.Name);
		}
		;

		function AddProductCategory() {
			var file = $scope.myFile;
			var producCatergory = $scope.productCategory;
			var fd = new FormData();
			fd.append('file', file);
			fd.append('product', JSON.stringify(producCatergory));
			apiService.postFile(
					'http://localhost:8080/api/productcategory/add', fd,
					function(result) {
						notificationService.displaySuccess('Đã thêm '
								+ result.data.name + ' thành công');
						$state.go('product_categories');
					}, function(error) {
						console.log(error);
						notificationService
								.displayError('Thêm không thành công');
					});
		}

		function loadParentCategories() {
			apiService.get(
					'http://localhost:8080/api/productcategory/getlistall',
					null, function(result) {
						$scope.parentCategories = commonService.getTree(
								result.data, "id", "parentId");
						$scope.parentCategories.forEach(function(item) {
							recur(item, 0, $scope.flatFolders);
						});
					}, function() {
						console.log('Không có dữ liệu!!!');
					});
		}
		;

		function times(n, str) {
			var result = '';
			for (var i = 0; i < n; i++) {
				result += str;
			}
			return result;
		}
		;
		function recur(item, level, arr) {
			arr.push({
				name : times(level, '–') + ' ' + item.name,
				id : item.id,
				Level : level,
				Indent : times(level, '–')
			});
			if (item.children) {
				item.children.forEach(function(item) {
					recur(item, level + 1, arr);
				});
			}
		}
		;

		loadParentCategories();
	}
})(angular.module('uStora.product_categories'));