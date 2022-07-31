const userRouter = require('express').Router();
const { getAllUsers, getSingleUser } = require('../controllers/userController')

// users
// users/:id

userRouter.get('/users', getAllUsers)

userRouter.get('/users/:id', getSingleUser)

module.exports = userRouter;