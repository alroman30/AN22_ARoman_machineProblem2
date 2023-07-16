const Order = require('../models/order')

module.exports.createOrder = (reqBody) => {
    let newOrder = new Order({
      userId: reqBody.userId, 
      product: reqBody.products,
    });
	return newOrder.save().then((user,error) => {
			// user registration failed
			if(error){
				return false
			} else {
				return true
			}
		})
}