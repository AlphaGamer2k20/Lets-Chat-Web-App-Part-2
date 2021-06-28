//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhtaFkKidtCx26FXfEfAh09llUD_tga1I",
    authDomain: "lets-chat-web-app-71ea5.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-71ea5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-71ea5",
    storageBucket: "lets-chat-web-app-71ea5.appspot.com",
    messagingSenderId: "183191723249",
    appId: "1:183191723249:web:45eb8c1b238a02d478dd50",
    measurementId: "G-QP0XV9JTL3"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "Lets-Chat-Web-App-Page.html";
}

function getData() 
{  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "Lets-Chat-Web-App-Page.html";
}

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
     window.location = "Lets-Chat-Web-App.html";
}