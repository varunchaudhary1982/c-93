

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBqqntxLoP7UCPs2ymB_KVxTMjnqowvh_A",
      authDomain: "c-93-bc28d.firebaseapp.com",
      projectId: "c-93-bc28d",
      storageBucket: "c-93-bc28d.appspot.com",
      messagingSenderId: "854671221185",
      appId: "1:854671221185:web:8f44d36f3a5ca8ff610f40",
      measurementId: "G-R70ZMYB4G9"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
