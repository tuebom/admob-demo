// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.service.push', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  
	$ionicPlatform.ready(function() {

    var push = new Ionic.Push({
      "debug": false,
			"onNotification": function(notification) {
				var payload = notification.payload;
				console.log(notification, payload);
			},
			"onRegister": function(data) {
				console.log(data.token);
			}
    });
 
    push.register(function(token) {
      console.log("My Device token:",token.token);
      push.saveToken(token);  // persist the token in the Ionic Platform
    });
		
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
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
