//!!!! IMPORTANT !!!

//************************************************************************************/

// I use this file for testing how to send e-mails.
// Please, do not modify this. 
// Thank you, 
// Lia

//************************************************************************************/

 let AWS = require('aws-sdk');
 AWS.config.update({region: 'us-east-1'}); //US West (N. California)
 let params = {
        Destination: { /* required */
              CcAddresses: [
                  /* more items */
              ],
              ToAddresses: [
                  "aalto2011@ya.ru",
                  /* more items */
              ]
          },
        Message: { /* required */
              Body: { /* required */
                    Html: {
                          Charset: "UTF-8",
                          Data: `<html>
                          <head></head>
                          <body>
                            <h1>Amazon SES Test (SDK for JavaScript in Node.js)</h1>
                            <p>This email was sent with
                              <a href='https://aws.amazon.com/ses/'>Amazon SES</a> using the
                              <a href='https://aws.amazon.com/sdk-for-node-js/'>
                                AWS SDK for JavaScript in Node.js</a>.</p>
                          </body>
                          </html>`
                      },
                    Text: {
                          Charset: "UTF-8",
                          Data: "Amazon SES Test (SDK for JavaScript in Node.js)\r\n"
                          + "This email was sent with Amazon SES using the "
                          + "AWS SDK for JavaScript in Node.js."
                      }
                },
              Subject: {
                    Charset: 'UTF-8',
                    Data: 'Test email'
                }
          },
        Source: 'aalto2011@yandex.ru', /* required */
        ReplyToAddresses: [
            'aalto2011@yandex.ru',
            /* more items */
        ],
    };

let sendPromise = new AWS.SES({apiVersion: '2020-04-03'}).sendEmail(params).promise();
