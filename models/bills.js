var mongoose = require('mongoose');

var BillSchema = mongoose.Schema({
	Billid: {
		type: String,
		index:true
	},
	amount: {
		type: Number,
		default:0
	},
	type: {
		type: String,
		default:"get"
	},
	date:{
		issuedate: {
		type: Date,
		default:new Date()
	},
	duedate: {
		type: Date,
		default:new Date()
	},
	paiddate: {
		type: Date,
		default:new Date()
	}
	}
	,	
	surcharge: {
		type: Number,
		default:0
	},
	paidornot: {
		type: Boolean,
		default:false
	}

});

var Bill = module.exports = mongoose.model('Bills', BillSchema);
