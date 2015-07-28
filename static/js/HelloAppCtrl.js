app.controller("HelloAppCtrl", function($scope,$http) {
    $scope.user_name = "";
    $scope.value_1 = "";
    $scope.value_2 = "";
    $scope.value_3 = "";

    $scope.clear = function() {
      $scope.user_name = "";
    };

    $scope.get_data = function(){
      $http.get("http://127.0.0.1:5016/data")
        .success(function(response) {
          $scope.value_1 = response.value_1;
          $scope.value_2 = response.value_2;
          $scope.value_3 = response.value_3;
        });
    };

    $scope.clear_data = function(){
      $scope.value_1 = "";
      $scope.value_2 = "";
      $scope.value_3 = "";
    };
});
