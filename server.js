const fs = require('firebase-admin');

const serviceAccount = require('./Certificates/gentle-voltage-293516-3b9e09fd9ae6.json');

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore(); 