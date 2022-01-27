
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

     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

     function addroom()
     {
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({purpose:"adding room name" });
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html";
     }

function getData(){firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecTroomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();





function redirecTroomname(name)
{
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}