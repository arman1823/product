'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
   // process.exit();
    console.log('*********************************2*******************');
    res.render('adminpanel/index', {

        user: req.user || null,
        request: req
    });

};

/**
 * Product authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.product.user.id !== req.user.id) {
        return res.status(403).send('User is not authorized');
    }
    next();
};
