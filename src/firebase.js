import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyClWiMjL1e7ojtTJ8Xe6uh61I7RVKUK4pY",
  authDomain: "boysgram-d881a.firebaseapp.com",
  projectId: "boysgram-d881a",
  storageBucket: "boysgram-d881a.appspot.com",
  messagingSenderId: "936387760049",
  appId: "1:936387760049:web:04cc3578807a9e78d93790",
  measurementId: "G-Z34QQVP3XY"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
