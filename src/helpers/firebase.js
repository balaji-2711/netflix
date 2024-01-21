import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAMYS7GyjhMs5pBfU-QGLTcdck0hGAjHtg",
//   authDomain: "netflixclone-d9293.firebaseapp.com",
//   projectId: "netflixclone-d9293",
//   storageBucket: "netflixclone-d9293.appspot.com",
//   messagingSenderId: "621280613078",
//   appId: "1:621280613078:web:b911fe9505d947bfc22f77",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBNVLtio_p3rVboRWmE33lj_g2CpQPCWlc",
  authDomain: "netflix-77824.firebaseapp.com",
  projectId: "netflix-77824",
  storageBucket: "netflix-77824.appspot.com",
  messagingSenderId: "350512303021",
  appId: "1:350512303021:web:e59f682ab6ccaed5882f24",
  measurementId: "G-Q41KLCDD0S",
};

//to use firebase services in application
const app = initializeApp(firebaseConfig);

//to provide authentication
const auth = getAuth();

//lets your users to authenticate with Firebase using their Google Accounts
const provider = new GoogleAuthProvider();

export { auth, provider, app };
