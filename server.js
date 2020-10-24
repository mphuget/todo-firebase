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

//addTodo("shopping", "Shopping", "Take the shopping list");

async function getTodos() {
    const todosRef = db.collection('todos');
    const snapshot = await todosRef.get();
    let documents = {};

    snapshot.forEach(doc => {
      documents[doc.id] = doc.data();
    });

    return documents;
}


//getTodos().then((documents) => console.log(documents));

async function getTodo(id) {
    const todoRef = db.collection('todos').doc(id);
    const doc = await todoRef.get();
    if (!doc.exists) {
        return null; 
    } 
    else {
        return doc.data();
    }

}

//getTodo("laundry").then((doc) => console.log(doc));

async function updateTodo(id, title, description) {
    const idTodo = await
    db.collection('todos').doc(id).update({
        title: title, 
        description : description
    });
}

//updateTodo("laundry", "Do the laundry", "Check the basket");

async function deleteTodo(id) {
    await db.collection('todos').doc(id).delete(); 
}

//deleteTodo();
