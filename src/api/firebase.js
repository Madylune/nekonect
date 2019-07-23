import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyALFFzL7sSPM0dO8Nyy4wF81DiZk3E5ip0",
  authDomain: "nekonect-1fe84.firebaseapp.com",
  databaseURL: "https://nekonect-1fe84.firebaseio.com",
  projectId: "nekonect-1fe84",
  storageBucket: "",
  messagingSenderId: "1087194634224"
}
firebase.initializeApp(FIREBASE_CONFIG)

export const db = firebase.firestore()
export const auth = firebase.auth()

// Helpers
export const fieldValue = firebase.firestore.FieldValue
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()

// Social Sign In Method Provider
export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}
// export const googleProvider = new firebase.auth.GoogleAuthProvider()
// export const facebookProvider = new firebase.auth.FacebookAuthProvider()

export default firebase
