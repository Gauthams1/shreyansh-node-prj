var express = require('express');
var router = express.Router();


var Bills = require('../models/bills');
// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	
	Bills.update({},{Billid:"pappu"},{upsert:true},function(err,usr){
		res.render('index', {hello:"hello"} );
	})
});
router.get('/populate', ensureAuthenticated, function(req, res){
	console.log(req.query);
	Bills.find({Billid:req.query.qut},function(err,usr){
		res.render('populate',{usr:usr});
	})
	
});
router.get('/view', ensureAuthenticated, function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	// if(req.isAuthenticated()){
	// 	return next();
	// } else {
	// 	//req.flash('error_msg','You are not logged in');
	// 	res.redirect('/users/login');
	// }
	return next();
}

module.exports = router;