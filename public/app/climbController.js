angular.module('climbCtrl', [])
.controller('climbController', climbController)

climbController.$inject = ['$state', 'authFactory', '$rootScope']

function climbController($state, authFactory, $rootScope){
	var vm = this
	var climbObj = {}

	
console.log('climb controller hit')

	vm.createClimb = function(section,grade,color,rating){
		console.log(vm.user)
		var climb = {
			section:section,
			grade:grade,
			color:color,
			rating:rating
		}
		authFactory.createClimb(climb)
		.then(function(response){
			if(response.data.success){
				console.log(response.data)
				user.save
				vm.climb = {}
			} else {
				console.log('sign up did not work')
				vm.error = response.data.message
			}
		})
	}
}