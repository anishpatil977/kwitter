
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDI4o4SAJ4p0sOsrVrI7gmkoUYhFfOlfP8",
      authDomain: "classtest-6b8b5.firebaseapp.com",
      databaseURL: "https://classtest-6b8b5-default-rtdb.firebaseio.com",
      projectId: "classtest-6b8b5",
      storageBucket: "classtest-6b8b5.appspot.com",
      messagingSenderId: "986666092150",
      appId: "1:986666092150:web:3ccb9a67a617bb7cd24157"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
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
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
