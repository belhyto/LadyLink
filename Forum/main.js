const firebaseConfig = {
    apiKey: "AIzaSyDIUhFTQBm2cf4hSenXJPSBkX6d0e4pLfU",
    authDomain: "ladylink-6315e.firebaseapp.com",
    databaseURL: "https://ladylink-6315e-default-rtdb.firebaseio.com",
    projectId: "ladylink-6315e",
    storageBucket: "ladylink-6315e.appspot.com",
    messagingSenderId: "648103263960",
    appId: "1:648103263960:web:4a43f11c0ac6c52d0f21ad",
    measurementId: "G-H3PHGRB7D6"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var ForumPostDB = firebase.database().ref("forumPost");
  
  document.getElementById("forumPost").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var uname = getElementVal("uname");
    var postTitle = getElementVal("postTitle");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(uname, postTitle, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("forumPost").reset();
  }
  
  const saveMessages = (uname, postTitle, msgContent) => {
    var newContactForm = ForumPostDB.push();
  
    newContactForm.set({
      uname: uname,
      postTitle: postTitle,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  //import { getDatabase, ref, onValue} from "firebase/database";
  var firebaseRef = firebase.database().ref().child('Submit');
  firebaseRef.once("value").then(function(snapshot){
    var PostDetails=snapshot.val();
    document.getElementById("Submit").addEventListener("click",function(){
      var uname = document.getElementById("uname");
          var postTitle = document.getElementById("postTitle");
          var msgContent = document.getElementById("msgContent");
          if (uname.value==PostDetails.uname && postTitle.value==PostDetails.postTitle && msgContent.value==PostDetails.msgContent)
          location.replace("/f_index.html");
          });
      });