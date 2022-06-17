//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
like_button ="<button class='btn btn-warning' id="=firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerhtml += row;
//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:data,
            like:0
      });

      document.getElementById("msg").value = "";     
}
functionlogout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window. location = "kwitter.html"
}
function updatelike(message_id)
{
    button_id = message_id
    likes = document.getElementById(button_id).value;
    updated_likes = number(likes) + 1;

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes  
    });
}