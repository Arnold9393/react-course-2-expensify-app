import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').push({
//     title: 'dasdao',
//     body: 'Go for a run'
// });

//
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//
//         console.log(expenses);
//     });


// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });



// const firebaseNotes = {
//     notes: {
//         12: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         13: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };
//
// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];
//
// database.ref('notes').set(notes);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }, (e) => {
//     console.log('Error with data fetching: ', e);
// });
//
// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//     database.ref('age').off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

//
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data: ', e);
//     });


// database.ref().set({
//     name: 'Arnold',
//     age: 25,
//     location: {
//         city: 'Adelaide',
//         country: 'Aus'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });
//
// database.ref().update({
//     name: 'Mike',
//     age: 15,
//     job: 'Software Developer',
//     'location/city': 'Melb'
// });

//database.ref('location').set(null);

// database.ref('location/city')
//     .remove()
//     .then(() => {
//         console.log('Location was removed');
//     })
//     .catch((e) => {
//         console.log('Location wasn"t remove: ', e);
//     });

// database.ref('age').set(27);
// database.ref('location/city').set('Melb');
// database.ref('attributes').set({
//     height: 75,
//     weight: 9001
// });
