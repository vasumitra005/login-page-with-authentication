import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyB1t76L7uymOtL_GSDnHEphD7Lsk9ZHJAY",
    authDomain: "login-form-aabdc.firebaseapp.com",
    projectId: "login-form-aabdc",
    storageBucket: "login-form-aabdc.appspot.com",
    messagingSenderId: "44257345701",
    appId: "1:44257345701:web:3fbac5c032a6840bd38d4c"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


document.getElementById('reg-btn').addEventListener('click',function(){
  document.getElementById('register-div').style.display="inline";
  document.getElementById('login-div').style.display="none";
});
document.getElementById('log-btn').addEventListener('click',function(){
    document.getElementById('login-div').style.display="none";
    document.getElementById('register-div').style.display="inline";
  });


  document.getElementById('login-btn').addEventListener('click',function(){
  const loginEmail=document.getElementById("login-email").value;
  const loginPassword= document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('result-box').style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById('result').innerHTML="Sorry !!!<br>"+errorMessage;
  });
});
  document.getElementById('register-btn').addEventListener('click',function(){
    const registerEmail=document.getElementById("register-email").value;
    const registerPassword= document.getElementById("register-password").value;
  
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      document.getElementById('result-box').style.display="inline";
      document.getElementById('register-div').style.display="none";
      document.getElementById('result').innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('result-box').style.display="inline";
      document.getElementById('register-div').style.display="none";
      document.getElementById('result').innerHTML="Sorry !!!<br>"+errorMessage;
    });
  });

  document.getElementById('log-out-btn').addEventListener('click',function(){


    signOut(auth).then(() => {
        // Sign-out successful.
        document.getElementById('result-box').style.display="none";
  document.getElementById('login-div').style.display="inline";
      }).catch((error) => {
        // An error happened.
        document.getElementById('result').innerHTML="Sorry !!!<br>"+errorMessage;
      });
      
  });