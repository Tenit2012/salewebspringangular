(function (app) {
    'use strict';

    app.controller('applicationUserEditController', applicationUserEditController);

    applicationUserEditController.$inject = ['$scope', 'apiService', 'notificationService', '$location', '$stateParams'];

    function applicationUserEditController($scope, apiService, notificationService, $location, $stateParams) {
        $scope.account = {}
        $scope.birthDay = "";
        $scope.updateAccount = updateAccount;

        function updateAccount() {
            apiService.put('http://localhost:8080/api/applicationUser/update', $scope.account, editSuccessed, editFailed);
        }
        function loadDetail() {
            apiService.get('http://localhost:8080/api/applicationUser/detail/' + $stateParams.id, null,
            function (result) {
                $scope.account = result.data.user;
                $scope.groups = result.data.groups;
                $scope.account.birthDay = new Date($scope.account.birthDay);
            },
            function (result) {
                notificationService.displayError(result.data);
            });
        }

        function editSuccessed() {
            notificationService.displaySuccess($scope.account.fullName + ' đã được cập nhật thành công.');

            $location.url('application_users');
        }
        function editFailed(response) {
            notificationService.displayError(response.data.Message);
        }
//        function loadGroups() {
//            apiService.get('http://localhost:8080/api/applicationGroup/getlistall',
//                null,
//                function (response) {
//                    $scope.groups = response.data.groups;
//                }, function (response) {
//                    notificationService.displayError('Không tải được danh sách nhóm.');
//                });
//
//        }
//
//        loadGroups();
        loadDetail();
    }
})(angular.module('uStora.application_users'));