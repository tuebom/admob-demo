angular.module('starter.controllers', [])

.controller('RegisterCtrl', function($scope, $state, $ionicHistory) {
  
  $scope.register = function(user) {
    console.log('Register', user);
    // $ionicHistory.nextViewOptions({
			// disableBack: true
		// });
		$ionicHistory.currentView($ionicHistory.backView());
		$state.go('signin', {nohp: user.nohp}, {location: 'replace'});
  };
  
})

.controller('SignInCtrl', function($scope, $state, $ionicHistory) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    // $ionicHistory.nextViewOptions({
			// disableBack: true
		// });
		$ionicHistory.currentView($ionicHistory.backView());
    $state.go('tab.dash', {}, {location: 'replace'});
  };
  
})

.controller('DashCtrl', function($scope, $ionicPlatform, $ionicHistory) {
	
	$ionicPlatform.ready(function() {
		
		var push = PushNotification.init({
				"android": {
						"senderID": "788426251928"
				},
				"ios": {
						"sound": true,
						"vibration": true,
						"badge": true
				},
				"windows": {}
		});
		//console.log('after init');

		push.on('registration', function(data) {
				//console.log('registration event: ' + data.registrationId);
				//alert(data.registrationId);

				var oldRegId = localStorage.getItem('registrationId');
				if (oldRegId !== data.registrationId) {
						// Save new registration ID
						localStorage.setItem('registrationId', data.registrationId);
						// Post registrationId to your app server as the value has changed
				}
		});

		push.on('error', function(e) {
				console.log("push error = " + e.message);
		});

		push.on('notification', function(data) {
				//console.log('notification event');
				navigator.notification.alert(
						data.message,         // message
						null,                 // callback
						data.title,           // title
						'OK'                  // buttonName
				);
		});
	});

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

	$scope.clearHistory = function() {
		//$ionicHistory.clearCache();
    $ionicHistory.clearHistory();
	}
})

.controller('ChatsCtrl', function($scope, $ionicHistory, Chats) {
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

	$scope.clearHistory = function() {
		//$ionicHistory.clearCache();
    $ionicHistory.clearHistory();
	}
})

.controller('SvcDetailCtrl', function($scope, $ionicModal, $timeout, $stateParams, Chats) {
  $scope.services = Chats.get($stateParams.svcId);

  // Form data for the submit modal
  $scope.trxData = {};
	$scope.trxPLN = false;

	if ($stateParams.svcId) $scope.trxPLN = true;

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

.controller('ToolCtrl', function($scope, $ionicModal, $timeout, $ionicHistory) {

	$scope.clearHistory = function() {
		//$ionicHistory.clearCache();
    $ionicHistory.clearHistory();
	}

  // Form data for the submit modal
  $scope.trxData = {};

  // Pendaftaran member
  $ionicModal.fromTemplateUrl('templates/daftar.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.mdlDF = modal;
  });

  $scope.daftarMember = function() {
    $scope.mdlDF.show();
  };

  $scope.closeDF = function() {
    $scope.mdlDF.hide();
  };

  $scope.doRegister = function() {
    console.log('Doing login', $scope.trxData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeDF();
    }, 1000);
  };

	// Transfer saldo
  $ionicModal.fromTemplateUrl('templates/tsaldo.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.mdlTS = modal;
  });

  $scope.transferSaldo = function() {
    $scope.mdlTS.show();
  };

  $scope.closeTS = function() {
    $scope.mdlTS.hide();
  };

  $scope.doTransferSld = function() {
    console.log('Doing login', $scope.trxData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeTS();
    }, 1000);
  };

	// Transfer bonus
  $ionicModal.fromTemplateUrl('templates/tbonus.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.mdlTB = modal;
  });

  $scope.transferBonus = function() {
    $scope.mdlTB.show();
  };

  $scope.closeTB = function() {
    $scope.mdlTB.hide();
  };

  $scope.doTransferBns = function() {
    console.log('Doing login', $scope.trxData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeTB();
    }, 1000);
  };

	// Ganti PIN
  $ionicModal.fromTemplateUrl('templates/gantipin.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.mdlGP = modal;
  });

  $scope.gantiPIN = function() {
    $scope.mdlGP.show();
  };

  $scope.closeGP = function() {
    console.log('Close GP');
    $scope.mdlGP.hide();
  };

  $scope.doGantiPIN = function() {
    console.log('Doing login', $scope.trxData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeGP();
    }, 1000);
  };

	// Info / Komplain
  $ionicModal.fromTemplateUrl('templates/komplain.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.mdlKP = modal;
  });

  $scope.sendInfo = function() {
    $scope.mdlKP.show();
  };

  $scope.closeKP = function() {
    $scope.mdlKP.hide();
  };

  $scope.doSendInfo = function() {
    console.log('Send info ', $scope.trxData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeKP();
    }, 1000);
  };
})

.controller('SvcCekHrgCtrl', function($scope, $ionicHistory) {

});
