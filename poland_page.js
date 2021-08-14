var firebaseConfig = {
      apiKey: "AIzaSyC455f4ZKeud8Rk-maPlk692_7syvTgZn0",
      authDomain: "kwitterrrr-b8e27.firebaseapp.com",
      databaseURL: "https://kwitterrrr-b8e27-default-rtdb.firebaseio.com",
      projectId: "kwitterrrr-b8e27",
      storageBucket: "kwitterrrr-b8e27.appspot.com",
      messagingSenderId: "303908782239",
      appId: "1:303908782239:web:52ca8f27c76f9a814f22aa",
      measurementId: "G-P7H5B40PJW"
    };
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0

          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
