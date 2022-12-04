const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const FCMToken = 'ccYjMRosn_0Ii75pYvrKux:APA91bFbcVEEg3ILgDmiJtZiyN278m4aZqjohsn_v9MPsVn6susf2LShBQEUjqsz-aIdmHEe-YwoKIdKCH8dqd8MDvAx_FgmFZUWVwe3lXkQ8ZkPqMNu3tWuHG6hmPUjsF7nHHnPO66g'

//http request method
exports.sendHttpPushNotification = functions.https.onRequest((req, res) => {
  const userId = req.body.userId; //get params like this

  const payload = {
    token: FCMToken,
      notification: {
          title: 'cloud function demo',
          body: message
      },
      data: {
          body: message,
      }
  };
  
  admin.messaging().send(payload).then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
      return {success: true};
  }).catch((error) => {
      return {error: error.code};
  });
})



// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
