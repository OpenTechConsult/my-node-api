import express from 'express'


import {
    createUser,
    findUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
} from '../controllers/users.controller.js'

const router = express.Router()



// all routes in here are starting with /users
router.get('/', getAllUsers)

router.post('/', createUser)

router.get('/:id', findUserById)

router.delete('/:id', deleteUserById)

router.patch('/:id', updateUserById)


export default router