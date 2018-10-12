const User = require('../../modules/user');
const UserSession = require('../../models/User');

module.exports = (app) => {

    // module.exports = (app) => {
    //   app.get('/api/counters', (req, res, next) => {
    //     Counter.find()
    //       .exec()
    //       .then((counter) => res.json(counter))
    //       .catch((err) => next(err));
    //   });

    //   app.post('/api/counters', function (req, res, next) {
    //     const counter = new Counter();

    //     counter.save()
    //       .then(() => res.json(counter))
    //       .catch((err) => next(err));

    // sign up
    app.post('api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body;

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

            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    res.end({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                res.end({
                    success: true,
                    message: 'Signed up!'
                });
            });
        });
    });

    // sign in

    app.post('api/account/signin', (req, res, next) => {
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

        User.find({
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
            new userSession = new UserSession();
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

};