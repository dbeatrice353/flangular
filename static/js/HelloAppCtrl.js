app.controller("HelloAppCtrl", function($scope,$http) {
    // The user's name, for the custom greeting.
    $scope.user_name = "";
    // Some variables for the unordered list elements
    $scope.value_1 = "";
    $scope.value_2 = "";
    $scope.value_3 = "";

    // Clear the custom greating and the input field.
    $scope.clear = function() {
      $scope.user_name = "";
    };

    // Make an ajax request for some data. Place the data in the
    // unordered list.
    $scope.get_data = function(){
      $http.get("http://127.0.0.1:5000/data")
        .success(function(response) {
          $scope.value_1 = response.value_1;
          $scope.value_2 = response.value_2;
          $scope.value_3 = response.value_3;
        });
    };

    // Clear the unordered list.
    $scope.clear_data = function(){
      $scope.value_1 = "";
      $scope.value_2 = "";
      $scope.value_3 = "";
    };
});
