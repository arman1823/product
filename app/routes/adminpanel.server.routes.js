'use strict';

module.exports = function(app) {
    console.log('********1*********************************************');
    // Root routing
    var adminpanel = require('../../app/controllers/adminpanel/adminpanel.server.controller');
    var users = require('../../app/controllers/users.server.controller');
    var products = require('../../app/controllers/products.server.controller');
    var categories = require('../../app/controllers/categories.server.controller');
    var uploader = require('../../app/controllers/uploader.server.controller');



    console.log(users);

    app.route('/adminpanel')
        .get(users.requiresLogin,users.requiresAdminLogin, adminpanel.hasAuthorization ,adminpanel.index);

    // Products Routes
    app.route('/adminpanel/products')
        .get(products.list)
        .post(users.requiresLogin, products.create);

    app.route('/adminpanel/products/:productId')
        .get(products.read)
        .put(users.requiresLogin, products.hasAuthorization, products.update)
        .delete(users.requiresLogin, products.hasAuthorization, products.delete);

    // Finish by binding the Product middleware
    app.param('productId', products.productByID);

    // Categories Routes
    app.route('/adminpanel/categories')
        .get(categories.list)
        .post(users.requiresLogin, categories.create);

    app.route('/adminpanel/categories/:categoryId')
        .get(categories.read)
        .put(users.requiresLogin, categories.hasAuthorization, categories.update)
        .delete(users.requiresLogin, categories.hasAuthorization, categories.delete);

    // Finish by binding the Category middleware
    app.param('categoryId', categories.categoryByID);

    // Categories Routes
    app.route('/adminpanel/uploader')
        .post(users.requiresLogin, uploader.uploadImage);

};