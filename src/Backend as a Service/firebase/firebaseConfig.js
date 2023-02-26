// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDhU7gml-tzNFFiXyO459Dq8wS7EIfw1a0",
//   authDomain: "universal-mall-e155c.firebaseapp.com",
//   projectId: "universal-mall-e155c",
//   storageBucket: "universal-mall-e155c.appspot.com",
//   messagingSenderId: "214234307631",
//   appId: "1:214234307631:web:156b535dd76d4151a0fada",
//   measurementId: "G-63QK6XNK2R"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication & get a reference to the service
// export const auth = getAuth(app)

// const listAllUsers = (nextPageToken) => {
//   // List batch of users, 1000 at a time.
//   getAuth().listUsers(1000, nextPageToken)
//     .then((listUsersResult) => {
//       listUsersResult.users.forEach((userRecord) => {
//         console.log('user', userRecord.toJSON());
//       });
//       if (listUsersResult.pageToken) {
//         // List next batch of users.
//         listAllUsers(listUsersResult.pageToken);
//       }
//     })
//     .catch((error) => {
//       console.log('Error listing users:', error);
//     });
// };
// // Start listing users from the beginning, 1000 at a time.
// listAllUsers();