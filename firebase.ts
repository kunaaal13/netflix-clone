// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMtfenJ9hd6YWHEyOqwgxaYu7C3-x1IZ0',
  authDomain: 'netflix-ultimate.firebaseapp.com',
  projectId: 'netflix-ultimate',
  storageBucket: 'netflix-ultimate.appspot.com',
  messagingSenderId: '391778728795',
  appId: '1:391778728795:web:ec2d413179fe603a46387e',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
