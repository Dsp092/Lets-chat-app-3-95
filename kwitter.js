function login()
{
    user_name=document.getElementById("username_input").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}