var customers = angular.module("customers", []);

customers.factory("CustomerFactory", function() {
	var people = [
		{name: "Michael Choi", created_at: new Date(2014, 3, 3)},
		{name: "John Supsupin", created_at: new Date(2014, 3, 3)},
		{name: "Trey Villafane", created_at: new Date(2014, 3, 1)},
		{name: "India Meisner", created_at: new Date(2014, 2, 15)}
	  ];

	var factory = {};
	factory.getCustomers = function() {
		return people;

	};
	factory.addCustomer = function(data) {
		people.push({
			name: data,
			created_at: new Date()
		});
	};
	
	factory.removeCustomer = function(target) {
		var index;
		for (var i = 0; i < people.length; i++) {
			if (target.name === people[i].name) {
				index = i;
			}
		}
		people.splice(index, 1);
	}
	return factory;
});
