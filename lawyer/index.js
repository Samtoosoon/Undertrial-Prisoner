// const firebaseConfig = {
//     apiKey: "AIzaSyBiIrPpQJpay-02Lm0pzNXHm4zxwCXA2hU",
//     authDomain: "loginsignup-page-541c1.firebaseapp.com",
//     projectId: "loginsignup-page-541c1",
//     storageBucket: "loginsignup-page-541c1.appspot.com",
//     messagingSenderId: "842148234758",
//     appId: "1:842148234758:web:72acfc5167dff0aa86a587",
//     measurementId: "G-EK1HL13TWT"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// //   const analytics = getAnalytics(app);
// const auth =firebase.auth()
// const database =firebase.database()


// // setup of register function 
// function register (){
//     fullname = document.getElementById('fullname').value 
// email = document.getElementById('email').value 
// password = document.getElementById('password').value 
// idcard = document.getElementById('idcard').value 
// age = document.getElementById('age').value 
// dob = document.getElementById('dob').value 

// }
// function login () {
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value
//     if (validate_email(email) == false || validate_password(password) == false) {
//       alert('Email or Password is Outta Line!!')
//       return
     
//     }
  
   

// // move on with authentication 
// auth.createUserWithEmailAndPassword(email,password)
//     .then(function(){
//    var user=auth.currentUser
// // adding this to firebase 
// var database_ref = database.ref()
// var user_data={
//     email :email,
//     fullname :fullname,
//     idcard :idcard,
//     age :age,
//     dob :dob,
//     last_login :Date.now()
// }

// database_ref.child('users/' +user.uid).set(user_data)

//    alert('user created !!')
//     })
//     .catch(function(error){
//       var error_code =error.code
//       var error_message = error.message
// // fire base alert 
//       alert(error_message)
//     })




// // validate input field 
// if(validate_email(email)==false||validate_password==false){
//     alert('Email or password is incorrect!')
//     return // don't run the code
// }
// if(validate_field(fullname)==fasle||validate_field(dob)==false||validate_field(age)==false){
//     alert('fill properly!!')
//     return
// }

// function validate_email(email){
//    expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if(expression.test(email)==true){
//         // email is correct 
//         return true
//     }
//      else {
//          return false 
//      }
// }

// function validate_password (password){
//     if(password<6){
//         return false
//     }
//     else {
//          return true 
//     }
// }

// // if no value enter 
// function validate_field(field){
//      if(field==null){
//          return false ;
//      }
//       if(field.length<=0){
//         return false
//       }
//       else {
//         return true
//       }
// }



const firebaseConfig = {
    apiKey: "AIzaSyBiIrPpQJpay-02Lm0pzNXHm4zxwCXA2hU",
    authDomain: "loginsignup-page-541c1.firebaseapp.com",
    projectId: "loginsignup-page-541c1",
    storageBucket: "loginsignup-page-541c1.appspot.com",
    messagingSenderId: "842148234758",
    appId: "1:842148234758:web:72acfc5167dff0aa86a587",
    measurementId: "G-EK1HL13TWT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Setup of register function 
function register() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const idcard = document.getElementById('idcard').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;

    // Validate input fields
    if (!validate_email(email) || !validate_password(password) || !validate_field(fullname) || !validate_field(dob) || !validate_field(age)) {
        alert('Please fill all fields correctly!');
        return;
    }

    // Move on with authentication 
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser;
            // Adding this to Firebase 
            var database_ref = database.ref();
            var user_data = {
                email: email,
                fullname: fullname,
                idcard: idcard,
                age: age,
                dob: dob,
                last_login: Date.now()
            };

            database_ref.child('users/' + user.uid).set(user_data);
            alert('User created successfully!');
        })
        .catch(function (error) {
            var error_message = error.message;
            // Firebase alert 
            alert(error_message);
        });
}

// Function to validate email
function validate_email(email) {
    var expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

// Function to validate password
function validate_password(password) {
    return password.length >= 6;
}

// Function to validate field
function validate_field(field) {
    return field && field.length > 0;
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validate_email(email) || !validate_password(password)) {
        alert('Email or Password is incorrect!');
        return;
    }

    // Move on with authentication 
    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            alert('Login successful!');
            // You can add code to redirect the user to another page or perform other actions after successful login.
        })
        .catch(function (error) {
            var error_message = error.message;
            // Firebase alert 
            alert(error_message);
        });
}
