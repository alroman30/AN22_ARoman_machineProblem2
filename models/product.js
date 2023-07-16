const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	productName : {
		type : String,
		required : [true, "Product Name is required"]
	},
	productDescription : {
		type : String,
		required : [true, "Product Description is required"]
	},
	productPrice : {
		type : Number,
		required : [true, "Product Price is required"]
	},
	isActive : {
		type : Boolean,
		default : true
	},
	createdOn : {
		type: Date,
		default : Date.now
	}
})

module.exports = mongoose.model("Product", productSchema);
