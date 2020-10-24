const fs = require('firebase-admin');

const serviceAccount = require('./Certificates/gentle-voltage-293516-bdc58c06b2ca.json');

fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore(); 

const todoDb = db.collection('todos');

function addTodo(id, title, description) {

    const idTodo = todoDb.doc(id); 

    idTodo.set({
        title: title,
        description: description
    });

}

addTodo("shopping", "Shopping", "Take the shopping list");

