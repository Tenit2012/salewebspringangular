
(function (app) {
    'use strict';

    app.service('loginService', ['$http', '$q', 'authenticationService', 'authData', 'apiService',
        function ($http, $q, authenticationService, authData, apiService) {
            var userInfo;
            var deferred;
            this.login = function (userName, password) {
                deferred = $q.defer();
               $http({
			url : 'http://localhost:8080/authenticate',
			method : "POST",
			params : {
				username : userName,
				password : password
			}
		}).then(function (response) {
                        userInfo = {
                            accessToken: response.data.token,
                            userName: response.data.user.appUser.name
                        };
                        authenticationService.setTokenInfo(userInfo);
                        authData.authenticationData.IsAuthenticated = true;
                        authData.authenticationData.accessToken = userInfo.accessToken;
                        authData.authenticationData.userName = userInfo.userName;
                        deferred.resolve(null);

                }, function (err, status) {
                    initialValue();
                    deferred.resolve(err);
                })
                return deferred.promise;
            };

            this.logOut = function () {
                apiService.post('/api/account/logout', null, function (response) {
                    authenticationService.removeToken();
                    initialValue();
                }, null);
            };
            function initialValue() {
                authData.authenticationData.IsAuthenticated = false;
                authData.authenticationData.userName = "";
                authData.authenticationData.image = "";
                authData.authenticationData.createdDate = "";
                authData.authenticationData.accessToken = "";
            }
        }]);
})(angular.module('uStora.common'));