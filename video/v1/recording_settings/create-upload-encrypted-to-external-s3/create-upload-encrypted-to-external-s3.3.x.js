// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.video.recordingSettings()
  .create({
     awsS3Url: 'https://my-bucket.s3.amazonaws.com/recordings',
     awsStorageEnabled: true,
     awsCredentialsSid: 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     encryptionEnabled: true,
     encryptionKeySid: 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
     friendlyName: 'Upload encrypted to external bucket'
   })
  .then(recording_settings => console.log(recording_settings.friendlyName));
