import  firebase from "firebase";

//inicialize seu banco de dados
var firebaseConfig = {
  apiKey: "AIzaSyCDaDJSJXNNl8Aq1G99sKk-S2LKGszC5pM",
  authDomain: "pro60-ae57e.firebaseapp.com",
  databaseURL: "https://pro60-ae57e-default-rtdb.firebaseio.com",
  projectId: "pro60-ae57e",
  storageBucket: "pro60-ae57e.appspot.com",
  messagingSenderId: "876281903020",
  appId: "1:876281903020:web:1e6a29fb5b5be4f4ffec09"
};
 firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
 

  