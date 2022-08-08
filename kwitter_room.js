var firebaseConfig = {
      apiKey: "AIzaSyAagc3DENHJup-onzeY5RG_XC_vCL3UVcs",
      authDomain: "kwitterfirebase-638c2.firebaseapp.com",
      databaseURL: "https://kwitterfirebase-638c2-default-rtdb.firebaseio.com",
      projectId: "kwitterfirebase-638c2",
      storageBucket: "kwitterfirebase-638c2.appspot.com",
      messagingSenderId: "842179123985",
      appId: "1:842179123985:web:ddfdf42e46270fdeaacab0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class = 'room_name' id = "+ Room_names +" onclick() = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log("name")
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";     
}

function addRoom() {
room_name = document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
key : "value"
})
localStorage.setItem("room_name", room_name)
window.location = "kwitter_page.html";
}