customers.controller("Controller1", function($scope, CustomerFactory) {
	$scope.customers = CustomerFactory.getCustomers();

	$scope.addCustomer = function() {
		var dupe = false;
		for (var i = 0; i < $scope.customers.length; i++) {
			if ($scope.customers[i].name === $scope.new_customer) {
				dupe = true;
			}
		};
		if (dupe) {
			alert("That customer is already present.");
		}
		else {
			CustomerFactory.addCustomer($scope.new_customer);
		}
	};

	$scope.removeCustomer = function(target) {
		CustomerFactory.removeCustomer(target);
	}
});