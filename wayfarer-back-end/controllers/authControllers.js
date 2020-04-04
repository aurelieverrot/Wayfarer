const db = require("../models");
const bcrypt = require("bcryptjs");
let AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-1'}); //US West (N. California)

const register = (req, res) => {
    // Check if Email is taken
    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot register user." });
        if (foundUser) return res.status(404).json({ status: 404, error: "Account already registered." });

        // Generate salt
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(404).json({ status: 404, error: "Cannot register user." });
            // Hash the password
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(404).json({ status: 404, error: "Cannot register user." });
                // Create a future user object
                const userInfo = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    password: hash,
                    email: req.body.email,
                    city: req.body.city,
                    photo: req.body.photo,
                };
                // Create a user
                db.User.create(userInfo, (err, newUser) => {
                    if (err) return res.status(404).json({ status: 404, error: "Cannot create a new user" });

                    const resUser = {
                        _id: newUser._id,
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        email: newUser.email,
                        city: newUser.city,
                        photo: newUser.photo,
                    };
                    res.status(201).json({status: 201, user: resUser, message: "User Created!" });

                    // AUTO SENDING EMAIL
                    
                    // let params = {
                    //     Destination: { /* required */
                    //         CcAddresses: [
                    //             'aalto2011@yandex.ru',
                    //             /* more items */
                    //         ],
                    //         ToAddresses: [
                    //             `${resUser.email}`,
                    //             /* more items */
                    //         ]
                    //     },
                    //     Message: { /* required */
                    //         Body: { /* required */
                    //             Html: {
                    //                 Charset: "UTF-8",
                    //                 Data: `<html>
                    //                 <head></head>
                    //                 <body>
                    //                   <h1>Amazon SES Test (SDK for JavaScript in Node.js)</h1>
                    //                   <p>This email was sent with
                    //                     <a href='https://aws.amazon.com/ses/'>Amazon SES</a> using the
                    //                     <a href='https://aws.amazon.com/sdk-for-node-js/'>
                    //                       AWS SDK for JavaScript in Node.js</a>.</p>
                    //                 </body>
                    //                 </html>`
                    //             },
                    //             Text: {
                    //                 Charset: "UTF-8",
                    //                 Data: "Amazon SES Test (SDK for JavaScript in Node.js)\r\n"
                    //                 + "This email was sent with Amazon SES using the "
                    //                 + "AWS SDK for JavaScript in Node.js."
                    //             }
                    //         },
                    //         Subject: {
                    //             Charset: 'UTF-8',
                    //             Data: 'Test email'
                    //         }
                    //     },
                    //     Source: 'aalto2011@yandex.ru', /* required */
                    //     ReplyToAddresses: [
                    //         'aalto2011@yandex.ru',
                    //         /* more items */
                    //     ],
                    // };

                    // let sendPromise = new AWS.SES({apiVersion: '2020-04-03'}).sendEmail(params).promise();

                    // // Handle promise's fulfilled/rejected states
                    // sendPromise.then(
                    //     function(data) {
                    //         console.log(data.MessageId);
                    //     })
                    //     .catch(
                    //         function(err) {
                    //         console.error(err, err.stack);
                    //     }
                    // );
                });
            });
        });
    });
};

const login = (req, res) => {
    // Check if user exists
    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot login a user" });
        if (!foundUser) return res.status(404).json({ status: 404, error: "Invalid credentials." });

        // Compare passwords
        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {

            if (err) return res.status(404).json({ status: 404, error: "Cannot login a user" });
            // If passwords match
            if (isMatch) {
                const currentUser = {
                    _id: foundUser._id,
                    firstName: foundUser.firstName,
                    lastName: foundUser.lastName,
                    email: foundUser.email,
                    city: foundUser.city,
                    photo: foundUser.photo,
                };

                // Save user to a session
                req.session.currentUser = currentUser;
                res.status(201).json({ status: 201, user: currentUser })
            } else {
                res.status(404).json({ status: 404, error: "Cannot login. Please, try again." });
            };
        });
    });
};

const logout = (req, res) => {
    if (!req.session.currentUser) {
        return res.status(404).json({ status: 404, error: "Cannot logout a user" });
    };

    req.session.destroy((err) => {
        if (err) return res.status(404).json({ status: 404, error: "Cannot logout a user" });
        res.status(201).json({ status: 201, message: "Logged out!" })
    });
};

const verify = (req, res) => {
    if (req.session.currentUser) {
        return res.json({
            status: 200, 
            message: "Authorized",
            currentUser: req.session.currentUser
        });
    };
};

module.exports = {
    register,
    login,
    logout,
    verify,
};