const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')
const FilmCtrl = require('../controllers/film-ctrl')

// All of the routes used in the app
// accompanied with appropriate handlers from controllers module
const router = express.Router()

router.post('/user', UserCtrl.addUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

router.get('/films', FilmCtrl.getFilmTitles)

module.exports = router
