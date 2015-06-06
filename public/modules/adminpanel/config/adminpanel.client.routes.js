'use strict';

// Setting up route
angular.module('adminpanel').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		//$urlRouterProvider.otherwise('/adminpanel');

        $stateProvider.
            state('adminpanel', {
                url: '/adminpanel',
                templateUrl: 'modules/adminpanel/views/home.client.view.html'
            }).
            state('adminlistCategories', {
                url: '/adminpanel/categories',
                templateUrl: 'modules/adminpanel/views/categories/list-categories.client.view.html'
            }).
            state('admincreateCategory', {
                url: '/adminpanel/categories/create',
                templateUrl: 'modules/adminpanel/views/categories/create-category.client.view.html'
            }).
            state('adminviewCategory', {
                url: '/adminpanel/categories/:categoryId',
                templateUrl: 'modules/adminpanel/views/categories/view-category.client.view.html'
            }).
            state('admineditCategory', {
                url: '/adminpanel/categories/:categoryId/edit',
                templateUrl: 'modules/adminpanel/views/categories/edit-category.client.view.html'
            }).
            state('adminlistProducts', {
                url: '/adminpanel/products',
                templateUrl: 'modules/adminpanel/views/products/list-products.client.view.html'
            }).
            state('admincreateProduct', {
                url: '/adminpanel/products/create',
                templateUrl: 'modules/adminpanel/views/products/create-product.client.view.html'
            }).
            state('adminviewProduct', {
                url: '/adminpanel/products/:productId',
                templateUrl: 'modules/adminpanel/views/products/view-product.client.view.html'
            }).
            state('admineditProduct', {
                url: '/adminpanel/products/:productId/edit',
                templateUrl: 'modules/adminpanel/views/products/edit-product.client.view.html'
            });
	}
]);

