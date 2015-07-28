app.controller("PlotCtrl", function($scope,$http) {
  // The div that will contain the plot.
  $scope.plot_div = null;

  // Initialize the plot by pointing it to a div, and supplying some data.
  $scope.init = function(){
    $scope.plot_div = document.getElementById('tester');
    var x = [1, 2, 3, 4, 5];
    var y = [1, 2, 4, 8, 16];
    $scope.plot(x,y,$scope.plot_div)
  };

  // Plot x and y values in a given div.
  $scope.plot = function(x_vals,y_vals,div){
    Plotly.plot( div, [{
    x: x_vals,
    y: y_vals }],
    { margin: { t: 0 } } );
  }

  // Make an ajax request for more x and y data for the plot.
  // Add the data received to the plot.
  $scope.get_data = function(){
    $http.get("http://127.0.0.1:5000/plot_data")
      .success(function(response) {
        $scope.plot(response.x_vals,response.y_vals,$scope.plot_div)
      });
  };
  // Initialize the plot.
  $scope.init();
});
