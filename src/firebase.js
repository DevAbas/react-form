import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCyqTufS2OxfCzl1ggaxx-zPt2P8KNlzao",
  authDomain: "react-form-26b64.firebaseapp.com",
  databaseURL: "https://react-form-26b64.firebaseio.com",
  projectId: "react-form-26b64",
  storageBucket: "react-form-26b64.appspot.com",
  messagingSenderId: "298175719928"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();

// Add data to firebase DB
// firebaseDB.ref('skills').set(
//   ['talking, walking']
// );

// // Get data from firebase DB
// firebaseDB.ref('car').once('value')
//   .then(snapshot => {
//     console.log(snapshot.val())
//   })
//   .catch(err => {
//     console.log(err)
//   })

export {
  firebaseDB
}