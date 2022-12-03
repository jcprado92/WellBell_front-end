/* eslint-disable */

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
    //   functions.logger.info("Hello logs!", {structuredData: true});
    //   response.send("Hello from Firebase!");
    // });
    
    // The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
    const functions = require('firebase-functions');
    
    // The Firebase Admin SDK to access Firestore.
    const admin = require('firebase-admin');
    admin.initializeApp();
    const FCMToken = "c6zwDRqw5wKQH2JdNlnN90:APA91bGvgi-mMIc9mFQLEJV1YgjKK5uf1Z1kX7qd2d5Z8WFLDPMO8E7QC9bdSr-ugVDlEIYsQlrGeBVjxMrytx9tSaiCQl6_2TitQwkIkBqqD363y6t1GvxSWGv5yYTIBjbRSpNF77WQ"
    
    const message = "whateverrr"

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
 //http request method
exports.sendHttpPushNotification = functions.https.onRequest((req, res) => {
    // const userId = req.body.userId; //get params like this
    admin.messaging().send(payload).then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
        return {success: true};
    }).catch((error) => {
        return {error: error.code};
    });
    
})

//listener method
exports.sendListenerPushNotification = functions.database.ref('/sendMessage/{userId}/').onWrite((data, context) => {
	const userId = context.params.userId; //get params like this
})



// admin.messaging().send(payload).then((response) => {
//     // Response is a message ID string.
//     console.log('Successfully sent message:', response);
//     return {success: true};
// }).catch((error) => {
//     return {error: error.code};
// });

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async function (req, res) {
//     // Grab the text parameter.
//     const original = req.query.text;
//     // Push the new message into Firestore using the Firebase Admin SDK.
//     const writeResult = await admin.firestore().collection('messages').add({original: original});
//     // Send back a message that we've successfully written the message
//     res.json({result: `Message with ID: ${writeResult.id} added.`});
//   });

  // Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
.onCreate((snap, context) => {
  // Grab the current value of what was written to Firestore.
  const original = snap.data().original;

  // Access the parameter `{documentId}` with `context.params`
  functions.logger.log('Uppercasing', context.params.documentId, original);
  
  const uppercase = original.toUpperCase();
  
  // You must return a Promise when performing asynchronous tasks inside a Functions such as
  // writing to Firestore.
  // Setting an 'uppercase' field in Firestore document returns a Promise.
  return snap.ref.set({uppercase}, {merge: true});
});