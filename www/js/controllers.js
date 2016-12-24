angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	/*$scope.options = {
		loop: false,
		effect: 'fade',
		speed: 500,
	}

	$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
		// data.slider is the instance of Swiper
		$scope.slider = data.slider;
	});

	$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
		console.log('Slide change is beginning');
	});

	$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
		// note: the indexes are 0-based
		$scope.activeIndex = data.slider.activeIndex;
		$scope.previousIndex = data.slider.previousIndex;
	});*/
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.operators = Chats.all();
  $scope.remove = function(opr) {
    Chats.remove(opr);
  }
})

.controller('SvcDetailCtrl', function($scope, $ionicModal, $timeout, $stateParams, Chats) {
  $scope.services = Chats.get($stateParams.svcId);

  // Form data for the submit modal
  $scope.trxData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/submit.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeTrx = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.inputNumber = function(data) {
		$scope.trxData.kode = data;
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doProsesTrx = function() {
    console.log('Doing login', $scope.trxData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeTrx();
    }, 1000);
  };
})

.controller('ToolCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
