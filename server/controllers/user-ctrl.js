// The module for handling user actions

const User = require('../models/user-model')

addUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'User unknown.',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: error })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User is created.',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User is not created.',
            })
        })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Body is missing.',
        })
    }

    User.findOne({ _id: req.params.id }, (error, user) => {
        if (error) {
            return res.status(404).json({
                error,
                message: 'User not found.',
            })
        }
        user.name = body.name
        user.films = body.films
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User is updated.',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User is not updated.',
                })
            })
    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (error, user) => {
        if (error) {
            return res.status(400).json({ success: false, error: error })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(error => console.log(error))
}

getUsers = async (req, res) => {
    await User.find({}, (error, users) => {
        if (error) {
            return res.status(400).json({ success: false, error: error })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `Users not found.` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(error => console.log(error))
}


getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (error, user) => {
        if (error) {
            return res.status(400).json({ success: false, error: error })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `User not found.` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(error => console.log(error))
}

module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
}
