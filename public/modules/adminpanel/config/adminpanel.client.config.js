'use strict';

// Configuring the Articles module
angular.module('adminpanel').run(['AdminMenus',
    function(AdminMenus) {
        // Set top bar menu items
        AdminMenus.addMenuItem('topbar', 'Categories', 'categories', 'dropdown', '/adminpanel/categories(/create)?');
        AdminMenus.addSubMenuItem('topbar', 'categories', 'List Categories', '/adminpanel/categories');
        AdminMenus.addSubMenuItem('topbar', 'categories', 'New Category', '/adminpanel/categories/create');
    }
]);
