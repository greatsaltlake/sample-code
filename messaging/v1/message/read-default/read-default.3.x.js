// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messaging.sessions('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                .messages
                .list({limit: 20})
                .then(messages => messages.forEach(m => console.log(m.sid)));
