// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('quickstart-assistant')
                .modelBuilds
                .create({uniqueName: 'v0.1'})
                .then(model_build => console.log(model_build.sid))
                .done();
