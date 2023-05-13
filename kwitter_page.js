//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyA8tEou70sXB29onKW14K8w9SPs5ccvhUU",
      authDomain: "kwitter-df260.firebaseapp.com",
      databaseURL: "https://kwitter-df260-default-rtdb.firebaseio.com",
      projectId: "kwitter-df260",
      storageBucket: "kwitter-df260.appspot.com",
      messagingSenderId: "206122572646",
      appId: "1:206122572646:web:0e5b26ca0c33f1663606a7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            like : 0,
            name : user_name,
            message : msg, 
      });
      document.getElementById("msg").value= "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
