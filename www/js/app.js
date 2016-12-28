// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  
	$ionicPlatform.ready(function() {
	
		/*if( ionic.Platform.isAndroid() )  { 
			 admobid = { // for Android
					banner: 'ca-app-pub-xxx/xxx' // Change this to your Ad Unit Id for banner...
			 };

			 if(AdMob) 
					AdMob.createBanner( {
						 adId:admobid.banner, 
						 position:AdMob.AD_POSITION.BOTTOM_CENTER, 
						 autoShow:true
					} );
		}*/

		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

	.state('register', {
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'RegisterCtrl'
	})
	.state('signin', {
		url: '/sign-in',
		templateUrl: 'templates/sign-in.html',
		controller: 'SignInCtrl'
	})
	.state('forgotpassword', {
		url: '/forgot-password',
		templateUrl: 'templates/forgot-password.html'
	})

		// setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
		url: '/services',
		views: {
			'tab-services': {
				templateUrl: 'templates/tab-chats.html',
				controller: 'ChatsCtrl'
			}
		}
	})
	.state('tab.svc-detail', {
		url: '/services/:svcId',
		views: {
			'tab-services': {
				templateUrl: 'templates/svc-detail.html',
				controller: 'SvcDetailCtrl'
			}
		}
	})
  .state('tab.tool', {
    url: '/tool',
    views: {
      'tab-tool': {
        templateUrl: 'templates/tab-tool.html',
        controller: 'ToolCtrl'
      }
    }
	})
	.state('tab.tool-ch', {
		url: '/tool/cekHarga',
		views: {
			'tab-tool': {
				templateUrl: 'templates/tab-chrg.html',
				controller: 'SvcCekHrgCtrl'
			}
		}
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/register');

});
