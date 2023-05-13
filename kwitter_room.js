
//ADD YOUR FIREBASE LINKS HERE

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

user_name = document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_room.html";


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_names - ",Room_names);
      row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}