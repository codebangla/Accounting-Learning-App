
var app = angular.module('myApp', ['onsen', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	// By default show Tab 1 - Navigator MasterDetail example
	$urlRouterProvider.otherwise('/home');

	$stateProvider

		// Tab 1 - MasterDetail example - Navigator init
		.state('navigator', {
			abstract: true,
			// url: '/navigator', // Optional url prefix
			resolve: {
				loaded: function($rootScope) {
					$rootScope.myTabbar.setActiveTab(0);
					return $rootScope.myTabbar.loadPage('html/tab1.html');
				}
			}
		})



		.state('navigator.home', {
			parent: 'navigator',
			url: '/home',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myNavigator.resetToPage('html/home.html');
			}]
		})



		// Tab 1 - MasterDetail example - Item details
		.state('navigator.home.detail', {
			parent: 'navigator.home',
			url: '/detail/:index',
			onEnter: ['$rootScope','$stateParams', function($rootScope,$stateParams) {
				$rootScope.myNavigator.pushPage('html/detail/' + $stateParams.index + '.html');
			}],
			onExit: function($rootScope) {
				$rootScope.myNavigator.popPage();
			}
		})

		// Tab 2 - SlidingMenu example - Example page 2
		.state('sliding.pagex1', {
			parent: 'sliding',
			url: '/p1',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/detail/1.html', {closeMenu: true});
			}]
		})


		// Tab 2 - MasterDetail example - List of items
		.state('navigator.about', {
			parent: 'navigator',
			url: '/about',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myNavigator.resetToPage('html/about.html');
			}]
		})


		// Tab 3 - MasterDetail example - List of items
		.state('navigator.rate', {
			parent: 'navigator',
			url: '/rate',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myNavigator.resetToPage('html/rate.html');
			}]
		})

		// Tab 1 - MasterDetail example - List of items
		.state('navigator.master', {
			parent: 'navigator',
			url: '/master',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myNavigator.resetToPage('html/master.html');
			}]
		})

		// Tab 1 - MasterDetail example - Item details
		.state('navigator.master.detail', {
			parent: 'navigator.master',
			url: '/detail/:index',
			onEnter: ['$rootScope','$stateParams', function($rootScope,$stateParams) {
				$rootScope.myNavigator.pushPage('html/detail.html', {'index': $stateParams.index});
			}],
			onExit: function($rootScope) {
				$rootScope.myNavigator.popPage();
			}
		})





		// Tab 2 - SlidingMenu example - SlidingMenu init
		.state('sliding', {
			abstract: true,
			// url: '/sliding', // Optional url prefix
			resolve: {
				loaded: function($rootScope) {
					$rootScope.myTabbar.setActiveTab(1);
					return $rootScope.myTabbar.loadPage('html/tab2.html');
				}
			}
		})

		// Tab 2 - SlidingMenu example - Landing page
		.state('sliding.main', {
			parent: 'sliding',
			url: '/main',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/main.html', {closeMenu: true});
			}]
		})

		// Tab 2 - SlidingMenu example - Example page 1
		.state('sliding.page1', {
			parent: 'sliding',
			url: '/page1',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/page1.html', {closeMenu: true});
			}]
		})

		// Tab 2 - SlidingMenu example - Example page 2
		.state('sliding.page2', {
			parent: 'sliding',
			url: '/page2',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/page2.html', {closeMenu: true});
			}]
		})
	;

});



