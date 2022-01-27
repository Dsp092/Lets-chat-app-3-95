//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAzchmpNnmJm5M4FCvn1nWsy3P2UK5mRvA",
      authDomain: "kwitter-fe3a4.firebaseapp.com",
      databaseURL: "https://kwitter-fe3a4-default-rtdb.firebaseio.com",
      projectId: "kwitter-fe3a4",
      storageBucket: "kwitter-fe3a4.appspot.com",
      messagingSenderId: "118341961384",
      appId: "1:118341961384:web:928151badd11abfa94a49d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data['name'];
message=message_data['message'];
like=message_data['like'];
nametag="<h4>"+name+"<img class='usertick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";

row=nametag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("Veryimportant").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("Veryimportant").value="";
}

function Logout()
{
      window.location="kwitter_room.html"
}