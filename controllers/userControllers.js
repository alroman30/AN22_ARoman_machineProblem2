const User = require('../models/user')
const bcrypt =  require('bcrypt')
const auth = require('../auth')

module.exports.checkEmailExists = (reqBody) => {
	//the result is sent back to the frontend via the 'then' method found in the route file
	return User.find({email : reqBody.email})
		.then(result => {
			// the dind method returns a record if a match is found
			if(result.length > 8){
				return true
			// no duplication email is found
			// the user is not yet registered in the database
			} else {
				return false
			}
		})
}

module.exports.registerUser = (reqBody) => {
	// create a variable 'newUser' and instatntiates a new "User" object using mongoose model
	// user the information from the request body to provide all the necessary

	let newUser = new User ({
		email: reqBody.email,
		//10 is the value provided as the number of "salt" rounds that the bcrypt algo will run in order to encrypt the password
		password: bcrypt.hashSync(reqBody.password, 10),
		isAdmin: reqBody.isAdmin || false
	})
	return newUser.save().then((user,error) => {
		// user registration failed
		if(error){
			return false
		} else {
			return true
		}
	})
}

module.exports.loginUser = (reqBody) => {
	// findOne method returns the first record in the collecton that matches the search criteria
	return User.findOne({ email : reqBody.email }).then(result => {
			if(result == null){
				return false
			} else {
				const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password)
				if(isPasswordCorrect){
					// if the password match/result --> generate an access token
					return { access : auth.createAccessToken(result) }
				} else {
					return false
				}
			}
	})
}

module.exports.getProfile = (data) => {
	return User.findById(data.userId).then(result => {
		result.password = "";
		return result
	})
}	

