
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAt-tTgVWa-joKMehYyvJoBOjqbePV9jsA",
    authDomain: "portfolio-contact-form-33a35.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-33a35.firebaseio.com",
    projectId: "portfolio-contact-form-33a35",
    storageBucket: "portfolio-contact-form-33a35.appspot.com",
    messagingSenderId: "226652345683",
    appId: "1:226652345683:web:4b835218bb5c270d017da6",
    measurementId: "G-MV47QTMTGN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  //Refrence contactInfo collections
  let contactInfo = firebase.database().ref("infos") //create database 



//list for a submit

// document.querySelector(".contact_form").addEventListener("submit",
// submitForm);

// function submitForm(e) {
//     e.preventDefault();
//     console.log(123);
// }


document.querySelector(".contact_form").addEventListener("submit",
submitForm);

function submitForm(e) {
    e.preventDefault();
    
    //Get input values
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    console.log(name , email , message);


    saveContactInfo(name , email, message);

    document.querySelector(".contact_form").reset();

}

//save info to firebase
function saveContactInfo(name, email, message){
    let newContactInfo = contactInfo.push();


    newContactInfo.set({
        name : name,
        email: email,
        message: message,
    });
}