var firebaseConfig = {
    apiKey: "AIzaSyBACv0EzkBQPRCvWwDKieRvkt2j_sKZO-c",
    authDomain: "chatter-895d1.firebaseapp.com",
    databaseURL: "https://chatter-895d1-default-rtdb.firebaseio.com",
    projectId: "chatter-895d1",
    storageBucket: "chatter-895d1.appspot.com",
    messagingSenderId: "415483246762",
    appId: "1:415483246762:web:46241ddc7d556839f138d3",
    measurementId: "G-X74NT1P9PH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function adduser(){
    user_name = document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
}
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
function addRoom() { room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; }
function getData() 
{ firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
  { childKey = childSnapshot.key; Room_names = childKey; 
    console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; }); }); }
getData();
 function redirectToRoomName(name) 
{ console.log(name); localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html"; }
 function logout() 
 { localStorage.removeItem("user_name"); 
 localStorage.removeItem("room_name");
  window.location = "index.html"; }
  