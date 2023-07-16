const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')
const { authenticateUser } = require('../auth')

router.post('/checkEmail',(req,res)=> {
    userController.checkEmailExists(req.body)
    .then(resultFromController => res.send(resultFromController));
});

// route for user registration
router.post('/register', (req, res) => {
    userController.registerUser(req.body)
    .then(resultFromController => res.send(resultFromController))
})

// route for user authentication
router.post('/login', (req, res) => {
    userController.loginUser(req.body)
    .then(resultFromController => res.send(resultFromController))
})

router.get('/details', (req, res) => {
    authenticateUser(req, res, () => {
        return res.status(200).json(req.user)
    })
})

module.exports = router;