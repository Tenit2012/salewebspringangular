(function (app) {
    app.service('apiService', apiService);
    apiService.$inject = ['$http', 'notificationService','authenticationService','urls'];
    function apiService($http, notificationService, authenticationService,urls) {
        return {
            get: get,
            post: post,
            postFile: postFile,
            put: put,
            putFile: putFile,
            del:del
        }

        function del(url, data, success, failure) {
            authenticationService.setHeader();
            $http.delete(url, data).then(function (result) {
                success(result);
            }, function (error) {
                if (error.status === '401') {
                    notificationService.displayError('Authenticate is required');
                }
                else
                    if (failure != null) {
                        failure(error);
                    }

            });
        }

        function put(url, data, success, failure) {
            authenticationService.setHeader();
            $http.put(url, data).then(function (result) {
                success(result);
            }, function (error) {
                if (error.status === '401') {
                    notificationService.displayError('Authenticate is required');
                }
                else
                    if (failure != null) {
                        failure(error);
                    }

            });
        }

        function post(url, data, success, failure) {
            authenticationService.setHeader();
            $http.post(url, data).then(function (result) {
                success(result);
            }, function (error) {
                if (error.status === '401') {
                    notificationService.displayError('Authenticate is required');
                }
                else
                    if (failure != null) {
                        failure(error);
                    }
            });
        }
        function postFile(url, data,success, failure) {
        	authenticationService.setHeaderFile();
        		$http.post(url, data, {
        			transformRequest : angular.identity,
        			headers : {
        				'Content-Type' : undefined
        			}
        			}).then(function (result) {
                    success(result);
                }, function (error) {
                    if (error.status === '401') {
                        notificationService.displayError('Authenticate is required');
                    }
                    else
                        if (failure != null) {
                            failure(error);
                        }
                });
            }
        function putFile(url, data,success, failure) {
        	authenticationService.setHeaderFile();
        		$http.put(url, data, {
        			transformRequest : angular.identity,
        			headers : {
        				'Content-Type' : undefined
        			}
        			}).then(function (result) {
                    success(result);
                }, function (error) {
                    if (error.status === '401') {
                        notificationService.displayError('Authenticate is required');
                    }
                    else
                        if (failure != null) {
                            failure(error);
                        }
                });
            }
        function get(url, params, success, failure) {
            authenticationService.setHeader();
            $http.get(url, params).then(function (result) {
                success(result);
            }, function (error) {
                if (error.status === '401') {
                    notificationService.displayError('Authenticate is required');
                }
                else
                    if (failure != null) {
                        failure(error);
                    }
            });
        }
    }
})(angular.module('uStora.common'));