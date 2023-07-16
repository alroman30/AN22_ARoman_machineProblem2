const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	userId: {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'user',
		required : [true, "User Id is required." ]
	},
	product: [{
		productId : {
			type : mongoose.Schema.Types.ObjectId,
			ref : 'product',
			required : [true, "Product Id is required."]
		},
		productQuantity : {
			type : Number,
			required : [true, "Quantity is required"]
		},
		totalAmount : {
			type : Number,
			default : [true, "Total Amount is required"]
		}
	}],
	purchasedOn : {
		type : Date,
		default : Date.now
	}
})

module.exports = mongoose.model("Order", orderSchema);