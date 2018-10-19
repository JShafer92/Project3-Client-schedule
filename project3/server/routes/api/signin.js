const user = require('../../models/user');
const userSession = require('../../models/userSession');
const express = require('express');
const router = express.Router();
// sign up
router.post('/account/signup', (req, res, next) => {
    // const { body } = req;
    console.log(req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;


    if (!firstName) {
        return res.send({
            success: false,
            message: 'Error: First Name can not be blank'
        });
    }
    if (!lastName) {
        return res.send({
            success: false,
            message: 'Error: Last Name can not be blank'
        });
    }
    if (!email) {
        return res.send({
            success: false,
            message: 'Error: email can not be blank'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: password can not be blank'
        });
    }
    email = email.toLowerCase();

    user.find({
        email: email
    }, (err, previousUsers) => {
        if (err) {
            res.end({
                success: false,
                message: 'Error: Server error'
            });
        } else if (previousUsers.length > 0) {
            res.end({
                success: false,
                message: 'Error: Account exists'
            });
        }

        const newUser = user();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
            console.log('test')
            if (err) {
                console.log(err, 'this is')
                res.end({
                    success: false,
                    message: 'Error: Server error'
                });
            } else {
                res.json('hello')}
        //     res.end({
        //         success: true,
        //         message: 'Signed up!'
        //     });
        // }
        });
    });
});

// sign in

router.post('/account/signin', (req, res, next) => {
    const { body } = req;
    const {
        password
    } = body;
    let {
        email
    } = body;
    if (!email) {
        return res.send({
            success: false,
            message: 'Error: email can not be blank'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: password can not be blank'
        });
    }

    email = email.toLowerCase();

    user.find({
        email: email
    }, (err, users) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: server error'
            });
        }

        if (users.length != 1) {
            return res.send({
                success: false,
                message: "error: invalid"
            });
        }
        const user = users[0];
        if (!user.validPassword(password)) {
            return res.send({
                success: false,
                message: "error: invalid"
            });
        }
        let userSession = new userSession();
        userSession.userId = user._id
        userSession.save((err, doc) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            return res.send({
                success: true,
                message: 'valid sign in',
                token: doc._id
            });
        });
    });
});

router.get('/account/verify', (req, res, next) => {
    const { query } = req;
    const { token } = query;

    userSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: server error'
            });
        }
        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Error: invalid'
            });
        }
        else {
            return res.send({
                success: true,
                message: 'Good'
            });
        }
    })
})

router.get('account/logout', (req, res, next) => {
    userSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
            $set: {
                isDeleted: true
            }
        }, null, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            else {
                return res.send({
                    success: true,
                    message: 'Good'
                });
            }
        })
})

module.exports = router;